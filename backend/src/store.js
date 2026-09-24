'use strict';

// Almacenamiento del estado global del portafolio.
// - Si existe DATABASE_URL usa PostgreSQL (tabla app_state, una sola fila).
// - Si no, usa memoria (perfecto para desarrollo local y pruebas).
// El estado es el mismo objeto que el frontend guarda hoy en localStorage,
// más COURSES, MATERIALS y SESSIONS (para que los CRUD docentes persistan).

const { Pool } = require('pg');

let pool = null;
let mem = null;
let usingPostgres = false;

async function initStore() {
    if (process.env.DATABASE_URL) {
        pool = new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await pool.query(
            'CREATE TABLE IF NOT EXISTS app_state (id INT PRIMARY KEY, data JSONB NOT NULL, updated_at TIMESTAMPTZ DEFAULT NOW())'
        );
        usingPostgres = true;
        console.log('[store] PostgreSQL conectado.');
    } else {
        console.log('[store] Sin DATABASE_URL: usando memoria local (los datos se pierden al reiniciar).');
    }
}

async function getState() {
    if (pool) {
        const r = await pool.query('SELECT data FROM app_state WHERE id = 1');
        return r.rows.length ? r.rows[0].data : null;
    }
    return mem;
}

async function saveState(state) {
    if (pool) {
        await pool.query(
            'INSERT INTO app_state (id, data, updated_at) VALUES (1, $1, NOW()) ' +
            'ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()',
            [state]
        );
        return;
    }
    mem = state;
}

function isPostgres() {
    return usingPostgres;
}

module.exports = { initStore, getState, saveState, isPostgres };
