'use strict';
// Harness temporal: levanta la API, prueba endpoints y la apaga.
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const PORT = 3100;
const BASE = `http://localhost:${PORT}`;
const results = [];
const check = (name, ok, extra = '') => {
    results.push(`${ok ? 'PASS' : 'FAIL'} ${name}${extra ? ' -> ' + extra : ''}`);
    if (!ok) process.exitCode = 1;
};

async function main() {
    const child = spawn('node', ['src/index.js'], {
        cwd: __dirname,
        env: { ...process.env, PORT: String(PORT), JWT_SECRET: 'test-secret' },
        stdio: ['ignore', 'pipe', 'pipe']
    });
    let out = '';
    child.stdout.on('data', (d) => { out += d.toString(); });
    child.stderr.on('data', (d) => { out += d.toString(); });
    const kill = () => { try { child.kill(); } catch (e) {} };

    // Esperar arranque (máx 10s)
    const t0 = Date.now();
    while (!out.includes('Escuchando') && Date.now() - t0 < 10000) {
        await new Promise((r) => setTimeout(r, 200));
    }
    check('boot', out.includes('Escuchando'), out.trim().split('\n').pop() || 'sin salida');

    const J = async (method, url, body, token) => {
        const r = await fetch(BASE + url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { Authorization: 'Bearer ' + token } : {})
            },
            body: body ? JSON.stringify(body) : undefined
        });
        let data = null;
        try { data = await r.json(); } catch (e) {}
        return { status: r.status, data };
    };

    try {
        // health
        let r = await J('GET', '/api/health');
        check('health', r.status === 200 && r.data && r.data.ok, JSON.stringify(r.data));

        // teacher login ok
        r = await J('POST', '/api/auth/teacher', { username: 'docente', password: 'recuay26' });
        check('teacher-login-ok', r.status === 200 && !!r.data.token);
        const tToken = r.data.token;

        // teacher login bad
        r = await J('POST', '/api/auth/teacher', { username: 'docente', password: 'xxx' });
        check('teacher-login-bad', r.status === 401);

        // state sin token
        r = await J('GET', '/api/state');
        check('state-no-auth', r.status === 401);

        // state con token docente
        r = await J('GET', '/api/state', null, tToken);
        check('state-teacher', r.status === 200 && Array.isArray(r.data.COURSES) && r.data.COURSES.length === 3);

        // leer clave demo del seed
        const pwFile = path.join(__dirname, 'seed-passwords.json');
        const pws = JSON.parse(fs.readFileSync(pwFile, 'utf8'));
        check('seed-passwords', Array.isArray(pws) && pws.length === 3, `${pws.length} claves`);

        // student login ok
        r = await J('POST', '/api/auth/student', { code: pws[0].code, pass: pws[0].pass });
        check('student-login-ok', r.status === 200 && !!r.data.token, r.data && r.data.name);
        const sToken = r.data.token;

        // student login bad pass
        r = await J('POST', '/api/auth/student', { code: pws[0].code, pass: 'ZZZZZZ' });
        check('student-login-bad', r.status === 401);

        // state filtrado estudiante (solo sus registros)
        r = await J('GET', '/api/state', null, sToken);
        const onlyMine = r.status === 200 &&
            Object.values(r.data.STUDENTS).flat().every((s) => s.code === pws[0].code);
        check('state-student-filtered', onlyMine);

        // PUT prohibido para estudiante
        r = await J('PUT', '/api/state', r.data, sToken);
        check('put-forbidden-student', r.status === 403);

        // PUT docente: añadir anuncio y verificar persistencia
        r = await J('GET', '/api/state', null, tToken);
        const full = r.data;
        full.ANNOUNCEMENTS.push({ id: 999, title: 'Test', message: 'hola', course: 'all', date: '2026-09-24', pinned: false });
        r = await J('PUT', '/api/state', full, tToken);
        check('put-teacher', r.status === 200 && r.data.ok === true);
        r = await J('GET', '/api/state', null, tToken);
        check('put-persisted', r.data.ANNOUNCEMENTS.some((a) => a.id === 999));
    } catch (e) {
        check('harness-error', false, e.message);
    } finally {
        kill();
    }
    console.log(results.join('\n'));
}

main();
