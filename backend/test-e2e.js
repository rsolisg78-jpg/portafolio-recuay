'use strict';
// Harness temporal: verifica ApiClient contra la API real (modo memoria).
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const PORT = 3101;
const results = [];
const check = (name, ok, extra = '') => {
    results.push(`${ok ? 'PASS' : 'FAIL'} ${name}${extra ? ' -> ' + extra : ''}`);
    if (!ok) process.exitCode = 1;
};

async function main() {
    // Mocks de navegador para api.js
    const store = {};
    global.window = {};
    global.sessionStorage = {
        getItem: (k) => (k in store ? store[k] : null),
        setItem: (k, v) => { store[k] = String(v); },
        removeItem: (k) => { delete store[k]; }
    };
    const apiSrc = fs.readFileSync(
        path.join(__dirname, '..', 'portfolio', 'js', 'api.js'), 'utf8'
    );
    eval(apiSrc);
    const ApiClient = global.window.ApiClient;
    check('apiclient-loads', !!ApiClient && typeof ApiClient.loadState === 'function');
    check('local-mode-default', ApiClient.useApi() === false);

    // Servidor real
    const child = spawn('node', ['src/index.js'], {
        cwd: __dirname,
        env: { ...process.env, PORT: String(PORT), JWT_SECRET: 'test-e2e' },
        stdio: ['ignore', 'pipe', 'pipe']
    });
    let out = '';
    child.stdout.on('data', (d) => { out += d.toString(); });
    const kill = () => { try { child.kill(); } catch (e) {} };
    const t0 = Date.now();
    while (!out.includes('Escuchando') && Date.now() - t0 < 10000) {
        await new Promise((r) => setTimeout(r, 200));
    }
    check('boot', out.includes('Escuchando'));

    try {
        global.window.API_BASE_URL = `http://localhost:${PORT}`;
        check('api-mode-on', ApiClient.useApi() === true);

        // Login docente vía ApiClient
        const t = await ApiClient.loginTeacher('docente', 'recuay26');
        check('e2e-teacher-login', !!t.token);
        ApiClient.setToken(t.token);
        check('e2e-token-saved', ApiClient.getToken() === t.token);

        // loadState trae cursos y estudiantes
        const s = await ApiClient.loadState();
        check('e2e-load-state', Array.isArray(s.COURSES) && s.STUDENTS.algoritmos.length === 3);

        // Guardar cambio y releer (simula queueStateSync)
        s.ANNOUNCEMENTS.push({ id: 555, title: 'E2E', message: 'x', course: 'all', date: '2026-09-24', pinned: false });
        await ApiClient.saveState(s);
        const s2 = await ApiClient.loadState();
        check('e2e-save-roundtrip', s2.ANNOUNCEMENTS.some((a) => a.id === 555));

        // Estudiante: login con clave del seed y estado filtrado
        const pws = JSON.parse(fs.readFileSync(path.join(__dirname, 'seed-passwords.json'), 'utf8'));
        ApiClient.setToken(null);
        const st = await ApiClient.loginStudent(pws[0].code, pws[0].pass);
        check('e2e-student-login', !!st.token && !!st.name);
        ApiClient.setToken(st.token);
        const mine = await ApiClient.loadState();
        const all = Object.values(mine.STUDENTS).flat();
        check('e2e-student-filtered', all.length > 0 && all.every((x) => x.code === pws[0].code));

        // 401 con token malo
        ApiClient.setToken('invalido');
        let got401 = false;
        try { await ApiClient.loadState(); } catch (e) { got401 = e.code === 401; }
        check('e2e-401', got401);
    } catch (e) {
        check('harness-error', false, e.message);
    } finally {
        kill();
    }
    console.log(results.join('\n'));
}

main();
