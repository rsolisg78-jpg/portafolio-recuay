'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { initStore, getState, saveState, isPostgres } = require('./store');
const { buildSeed } = require('./seed');

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-cambiar-en-produccion';
const TEACHER_USER = process.env.TEACHER_USER || 'docente';
const TEACHER_PASS = process.env.TEACHER_PASS || 'recuay26';

if (!process.env.JWT_SECRET) {
    console.warn('[auth] JWT_SECRET no configurado: usando secreto de desarrollo. ¡Cámbialo en producción!');
}

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL === '*' ? '*' : (process.env.FRONTEND_URL || '*') }));
app.use(express.json({ limit: '5mb' }));

const norm = (s) => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();

// ---------- Auth ----------
function signToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '12h' });
}

function authRequired(req, res, next) {
    const h = req.headers.authorization || '';
    const token = h.startsWith('Bearer ') ? h.slice(7) : null;
    if (!token) return res.status(401).json({ error: 'Token requerido' });
    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (e) {
        return res.status(401).json({ error: 'Token inválido o expirado' });
    }
}

function teacherOnly(req, res, next) {
    if (!req.user || req.user.role !== 'teacher') {
        return res.status(403).json({ error: 'Solo docentes' });
    }
    next();
}

app.post('/api/auth/teacher', (req, res) => {
    const { username, password } = req.body || {};
    if (username === TEACHER_USER && password === TEACHER_PASS) {
        return res.json({ token: signToken({ role: 'teacher', username }), role: 'teacher', username });
    }
    return res.status(401).json({ error: 'Credenciales incorrectas' });
});

app.post('/api/auth/student', async (req, res) => {
    const code = norm(req.body && req.body.code);
    const pass = String((req.body && req.body.pass) || '').trim().toUpperCase();
    if (!code || !pass) return res.status(400).json({ error: 'Código y contraseña requeridos' });
    const state = await getState();
    let found = null;
    for (const course of Object.keys(state.STUDENTS || {})) {
        const st = (state.STUDENTS[course] || []).find((s) => norm(s.code) === code);
        if (st) { found = st; break; }
    }
    if (!found) return res.status(401).json({ error: 'Estudiante no encontrado' });
    if (found.pass !== pass) return res.status(401).json({ error: 'Contraseña incorrecta' });
    return res.json({
        token: signToken({ role: 'student', code: found.code }),
        role: 'student', code: found.code, name: found.name
    });
});

// ---------- State ----------
// El frontend trabaja con el estado completo en memoria (igual que hoy con
// localStorage) y lo sincroniza con PUT /api/state (docente).
// A estudiantes se les entrega el estado filtrado: solo sus registros.

function filterForStudent(state, code) {
    const mine = {};
    for (const course of Object.keys(state.STUDENTS || {})) {
        mine[course] = (state.STUDENTS[course] || []).filter((s) => norm(s.code) === norm(code));
    }
    const allowed = Object.keys(mine).filter((c) => mine[c].length > 0);
    return {
        COURSES: state.COURSES,
        MATERIALS: state.MATERIALS,
        SESSIONS: state.SESSIONS,
        STUDENTS: mine,
        WEEK_DATES: state.WEEK_DATES,
        PROJECTS: state.PROJECTS,
        SCHEDULE: state.SCHEDULE,
        ANNOUNCEMENTS: (state.ANNOUNCEMENTS || []).filter(
            (a) => a.course === 'all' || allowed.indexOf(a.course) !== -1
        )
    };
}

app.get('/api/state', authRequired, async (req, res) => {
    const state = await getState();
    if (!state) return res.status(500).json({ error: 'Estado no inicializado' });
    if (req.user.role === 'student') {
        return res.json(filterForStudent(state, req.user.code));
    }
    return res.json(state);
});

app.put('/api/state', authRequired, teacherOnly, async (req, res) => {
    const s = req.body || {};
    if (!s.STUDENTS || typeof s.STUDENTS !== 'object') {
        return res.status(400).json({ error: 'Estado inválido: falta STUDENTS' });
    }
    await saveState(s);
    return res.json({ ok: true });
});

app.get('/api/health', (req, res) => {
    res.json({ ok: true, store: isPostgres() ? 'postgres' : 'memory', time: new Date().toISOString() });
});

// ---------- Boot ----------
async function boot() {
    await initStore();
    let state = await getState();
    if (!state) {
        const { state: seed, passwords } = buildSeed();
        await saveState(seed);
        console.log('--------------------------------------------------');
        console.log('[seed] Estado inicial creado.');
        console.log('[seed] Claves de estudiantes demo (entregarlas una sola vez):');
        passwords.forEach((p) => console.log(`   ${p.code} | ${p.name} | clave: ${p.pass}`));
        try {
            fs.writeFileSync(
                path.join(__dirname, '..', 'seed-passwords.json'),
                JSON.stringify(passwords, null, 2)
            );
            console.log('[seed] Copia guardada en seed-passwords.json');
        } catch (e) {
            console.warn('[seed] No se pudo escribir seed-passwords.json');
        }
        console.log('--------------------------------------------------');
    }
    app.listen(PORT, () => {
        console.log(`[api] Escuchando en puerto ${PORT} (store: ${isPostgres() ? 'postgres' : 'memory'})`);
    });
}

boot().catch((e) => {
    console.error('[api] Error al iniciar:', e);
    process.exit(1);
});
