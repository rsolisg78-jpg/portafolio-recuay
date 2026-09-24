/* ============================================================
   api.js - Capa de conexión con el backend (Opción A)
   - Si API_BASE_URL está vacío -> modo LOCAL (localStorage, como antes).
   - Si tiene URL -> modo API (login y estado vía backend + JWT).
   ============================================================ */
(function() {
    'use strict';

    // 👉 En producción apunta aquí a tu API en Railway, ej:
    // window.API_BASE_URL = 'https://portafolio-api.up.railway.app';
    window.API_BASE_URL = window.API_BASE_URL || '';

    function useApi() {
        return !!window.API_BASE_URL;
    }

    function getToken() {
        try { return sessionStorage.getItem('portfolio_token'); } catch (e) { return null; }
    }

    function setToken(t) {
        try {
            if (t) sessionStorage.setItem('portfolio_token', t);
            else sessionStorage.removeItem('portfolio_token');
        } catch (e) {}
    }

    async function apiFetch(path, options) {
        options = options || {};
        const headers = Object.assign({ 'Content-Type': 'application/json' }, options.headers || {});
        const token = getToken();
        if (token) headers.Authorization = 'Bearer ' + token;
        const res = await fetch(window.API_BASE_URL + path, {
            method: options.method || 'GET',
            headers: headers,
            body: options.body ? JSON.stringify(options.body) : undefined
        });
        let data = null;
        try { data = await res.json(); } catch (e) {}
        if (res.status === 401) {
            const err = new Error((data && data.error) || 'No autorizado');
            err.code = 401;
            throw err;
        }
        if (!res.ok) {
            throw new Error((data && data.error) || ('Error ' + res.status));
        }
        return data;
    }

    window.ApiClient = {
        useApi: useApi,
        getToken: getToken,
        setToken: setToken,
        loginTeacher: (username, password) =>
            apiFetch('/api/auth/teacher', { method: 'POST', body: { username, password } }),
        loginStudent: (code, pass) =>
            apiFetch('/api/auth/student', { method: 'POST', body: { code, pass } }),
        loadState: () => apiFetch('/api/state'),
        saveState: (state) => apiFetch('/api/state', { method: 'PUT', body: state })
    };
})();
