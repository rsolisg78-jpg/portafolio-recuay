(function() {
    'use strict';

    var LOGIN_USER = 'docente';
    var LOGIN_PASS = 'recuay26';

    var SESSIONS = [
        { id: 1, course: 'algoritmos', title: 'Introducción a la Programación y Algoritmos', date: '20/04/2026', description: 'Conceptos fundamentales de algoritmos, representación gráfica y análisis de problemas.', topics: ['Algoritmos', 'PSeInt', 'Introducción'] },
        { id: 2, course: 'algoritmos', title: 'Variables, Tipos de Datos y Operadores', date: '27/04/2026', description: 'Declaración de variables, tipos de datos básicos, operadores aritméticos y lógicos.', topics: ['Variables', 'Tipos de Datos', 'Operadores'] },
        { id: 3, course: 'algoritmos', title: 'Estructuras Condicionales', date: '04/05/2026', description: 'Sentencias if, else, switch. Análisis de flujo de control.', topics: ['Condicionales', 'If-Else', 'Switch'] },
        { id: 4, course: 'algoritmos', title: 'Estructuras Repetitivas I', date: '11/05/2026', description: 'Ciclos while, for, do-while. Aplicaciones en resolución de problemas.', topics: ['Ciclos', 'While', 'For'] },
        { id: 5, course: 'algoritmos', title: 'Estructuras Repetitivas II', date: '18/05/2026', description: 'Ciclos anidados, sentencias de control break y continue.', topics: ['Ciclos Anidados', 'Break', 'Continue'] },
        { id: 6, course: 'algoritmos', title: 'Arreglos y Matrices', date: '25/05/2026', description: 'Declaración, inicialización y manipulación de arreglos unidimensionales y bidimensionales.', topics: ['Arreglos', 'Matrices', 'Arrays'] },
        { id: 7, course: 'algoritmos', title: 'Algoritmos de Búsqueda y Ordenamiento', date: '01/06/2026', description: 'Búsqueda secuencial, binaria. Ordenamiento burbuja, inserción, selección.', topics: ['Búsqueda', 'Ordenamiento', 'Algoritmos'] },
        { id: 8, course: 'algoritmos', title: 'Funciones y Módulos', date: '08/06/2026', description: 'Definición y llamada de funciones, parámetros, retorno de valores, alcance.', topics: ['Funciones', 'Módulos', 'Scope'] },
        { id: 9, course: 'aplicaciones-web', title: 'Fundamentos HTML5 y CSS3', date: '20/04/2026', description: 'Estructura semántica HTML5, selectores CSS, box model, Flexbox básico.', topics: ['HTML5', 'CSS3', 'Semántica'] },
        { id: 10, course: 'aplicaciones-web', title: 'JavaScript Moderno ES6+', date: '27/04/2026', description: 'Variables let/const, arrow functions, destructuring, spread operator.', topics: ['JavaScript', 'ES6', 'Moderno'] },
        { id: 11, course: 'aplicaciones-web', title: 'DOM y Eventos', date: '04/05/2026', description: 'Manipulación del DOM, event listeners, formularios interactivos.', topics: ['DOM', 'Eventos', 'Interactividad'] },
        { id: 12, course: 'aplicaciones-web', title: 'React: Componentes y Props', date: '11/05/2026', description: 'Introducción a React, JSX, componentes funcionales, props, composition.', topics: ['React', 'Componentes', 'Props'] },
        { id: 13, course: 'aplicaciones-web', title: 'React Hooks y State Management', date: '18/05/2026', description: 'useState, useEffect, useContext, lifting state down.', topics: ['React', 'Hooks', 'State'] },
        { id: 14, course: 'aplicaciones-web', title: 'Node.js y Express', date: '25/05/2026', description: 'Creación de servidores, rutas, middleware, REST APIs con Express.', topics: ['Node.js', 'Express', 'REST'] },
        { id: 15, course: 'arquitectura', title: 'Fundamentos de Arquitectura de Software', date: '20/04/2026', description: 'Principios SOLID, patrones de diseño, arquitecturas monolítica y distribuida.', topics: ['SOLID', 'Patrones', 'Arquitectura'] },
        { id: 16, course: 'arquitectura', title: 'Docker y Contenerización', date: '27/04/2026', description: 'Dockerfile, imágenes, contenedores, Docker Compose, orquestación básica.', topics: ['Docker', 'Contenedores', 'Orquestación'] }
    ];

    var COURSES = [
        { id: 'algoritmos', icon: '🧮', code: 'APSTI-101', title: 'Algoritmos y Estructuras de Datos', credits: 4, hours: 64, weeks: 16, description: 'Fundamentos de lógica de programación, algoritmos, estructuras de datos lineales y no lineales. Uso de PSeInt y Python para implementación.', topics: ['Variables, tipos de datos, operadores', 'Estructuras condicionales y repetitivas', 'Arreglos, matrices, listas, pilas, colas', 'Algoritmos de búsqueda y ordenamiento', 'Recursividad y programación dinámica'], materials: [{ id: 1, title: 'Guía Práctica N5', type: 'docx', size: '19 KB', tags: ['Práctico', 'Estructuras de Datos'] }, { id: 2, title: 'Estructuras Repetitivas en PSeInt', type: 'pdf', size: '26 MB', tags: ['Teoría', 'PSeInt'] }, { id: 3, title: 'Estructuras Repetitivas en PSeInt', type: 'pptx', size: '17 GB', tags: ['Presentación', 'PSeInt'] }, { id: 4, title: 'Silabo de Algoritmos', type: 'pdf', size: '4 MB', tags: ['Silabo', 'Oficial'] }, { id: 5, title: 'Silabo de Algoritmos', type: 'docx', size: '583 KB', tags: ['Silabo', 'Word'] }] },
        { id: 'aplicaciones-web', icon: '🌐', code: 'APSTI-201', title: 'Aplicaciones Web', credits: 5, hours: 80, weeks: 16, description: 'Desarrollo fullstack de aplicaciones web modernas. Frontend con HTML5, CSS3, JavaScript ES6+, React. Backend con Node.js, Express, bases de datos.', topics: ['HTML5 semántico, CSS3, Flexbox, Grid', 'JavaScript moderno, DOM, Fetch API', 'React: Componentes, Hooks, Router, State', 'Node.js, Express, REST APIs, JWT', 'Bases de datos: PostgreSQL, MongoDB', 'Despliegue: Docker, CI/CD, Cloud'], materials: [{ id: 6, title: 'Silabo de Aplicaciones Web', type: 'pdf', size: '4 MB', tags: ['Silabo', 'Oficial'] }, { id: 7, title: 'Silabo de Aplicaciones Web', type: 'docx', size: '583 KB', tags: ['Silabo', 'Word'] }, { id: 8, title: 'Aplicaciones Web - Material', type: 'pdf', size: '4 MB', tags: ['Complementario', 'Web'] }] },
        { id: 'arquitectura', icon: '🏗️', code: 'APSTI-301', title: 'Arquitectura de Plataformas y Servicios', credits: 4, hours: 64, weeks: 16, description: 'Principios de arquitectura de software, patrones de diseño, microservicios, contenedores, orquestación, cloud computing y prácticas DevOps.', topics: ['Patrones de arquitectura: MVC, Clean, Hexagonal', 'Microservicios vs Monolito, Comunicación', 'Docker, Kubernetes, Service Mesh', 'Cloud: AWS/Azure/GCP, Serverless', 'CI/CD, Observabilidad, SRE', 'Seguridad, Escalabilidad, Resiliencia'], materials: [{ id: 9, title: 'Itinerario de Arquitectura', type: 'pdf', size: '27 MB', tags: ['Planificación', 'Arquitectura'] }] }
    ];

    var MATERIALS = [
        { id: 1, title: 'Guía Práctica N5', type: 'docx', size: '19 KB', course: 'algoritmos', courseTitle: 'Algoritmos y Estructuras de Datos', description: 'Ejercicios prácticos de estructuras de datos', tags: ['Práctico', 'Estructuras de Datos'] },
        { id: 2, title: 'Estructuras Repetitivas en PSeInt', type: 'pdf', size: '26 MB', course: 'algoritmos', courseTitle: 'Algoritmos y Estructuras de Datos', description: 'Documento completo sobre estructuras repetitivas', tags: ['Teoría', 'PSeInt'] },
        { id: 3, title: 'Estructuras Repetitivas en PSeInt', type: 'pptx', size: '17 GB', course: 'algoritmos', courseTitle: 'Algoritmos y Estructuras de Datos', description: 'Presentación sobre estructuras repetitivas', tags: ['Presentación', 'PSeInt'] },
        { id: 4, title: 'Silabo de Algoritmos', type: 'pdf', size: '4 MB', course: 'algoritmos', courseTitle: 'Algoritmos y Estructuras de Datos', description: 'Silabo oficial del curso', tags: ['Silabo', 'Oficial'] },
        { id: 5, title: 'Silabo de Algoritmos', type: 'docx', size: '583 KB', course: 'algoritmos', courseTitle: 'Algoritmos y Estructuras de Datos', description: 'Silabo en formato Word', tags: ['Silabo', 'Word'] },
        { id: 6, title: 'Silabo de Aplicaciones Web', type: 'pdf', size: '4 MB', course: 'aplicaciones-web', courseTitle: 'Aplicaciones Web', description: 'Silabo oficial del curso', tags: ['Silabo', 'Oficial'] },
        { id: 7, title: 'Silabo de Aplicaciones Web', type: 'docx', size: '583 KB', course: 'aplicaciones-web', courseTitle: 'Aplicaciones Web', description: 'Silabo en formato Word', tags: ['Silabo', 'Word'] },
        { id: 8, title: 'Aplicaciones Web - Material', type: 'pdf', size: '4 MB', course: 'aplicaciones-web', courseTitle: 'Aplicaciones Web', description: 'Material complementario', tags: ['Complementario', 'Web'] },
        { id: 9, title: 'Itinerario de Arquitectura', type: 'pdf', size: '27 MB', course: 'arquitectura', courseTitle: 'Arquitectura de Plataformas y Servicios', description: 'Plan de itinerario del programa', tags: ['Planificación', 'Arquitectura'] },
        { id: 10, title: 'Silabo de Arquitectura', type: 'pdf', size: '5 MB', course: 'arquitectura', courseTitle: 'Arquitectura de Plataformas y Servicios', description: 'Silabo oficial del curso', tags: ['Silabo', 'Oficial'] },
        { id: 11, title: 'Modelo de Sesión de Aprendizaje', type: 'docx', size: '252 MB', course: 'aplicaciones-web', courseTitle: 'Aplicaciones Web', description: 'Modelo actualizado de sesión de aprendizaje', tags: ['Modelo', 'Docente'] },
        { id: 12, title: 'Plan de Trabajo 2026-I', type: 'docx', size: '941 KB', course: 'arquitectura', courseTitle: 'Arquitectura de Plataformas y Servicios', description: 'Plan de trabajo del periodo académico', tags: ['Planificación', 'Trabajo'] }
    ];

    var NEXT_MAT_ID = 13;

    var WEEK_COUNT = 17;
    var RISK_AVG = 13;
    var RISK_ATT = 70;
    var STUDENTS = {
        algoritmos: [
            { id: 3, name: 'Quispe Rojas, Ana María', code: 'APSTI-2026-003', grades: [15, 14], attendance: {} },
            { id: 1, name: 'Castillo Vega, Luis Fernando', code: 'APSTI-2026-001', grades: [16, 13, 15], attendance: {} },
            { id: 2, name: 'Mendoza Torres, Rosa Elena', code: 'APSTI-2026-002', grades: [12], attendance: {} }
        ],
        'aplicaciones-web': [],
        arquitectura: []
    };
    var NEXT_STU_ID = 4;
    var currentStudentCourse = 'algoritmos';
    var currentWeek = 1;
    var SCHEDULE = [
        { id: 1, course: 'algoritmos', day: 'Lunes', start: '08:00', end: '10:00', room: 'Lab. 01' },
        { id: 2, course: 'algoritmos', day: 'Miércoles', start: '08:00', end: '10:00', room: 'Lab. 01' },
        { id: 3, course: 'aplicaciones-web', day: 'Martes', start: '10:00', end: '12:00', room: 'Lab. 02' },
        { id: 4, course: 'aplicaciones-web', day: 'Jueves', start: '10:00', end: '12:00', room: 'Lab. 02' },
        { id: 5, course: 'arquitectura', day: 'Viernes', start: '14:00', end: '16:00', room: 'Lab. 03' }
    ];
    var NEXT_SCH_ID = 6;
    var DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var ANNOUNCEMENTS = [
        { id: 1, title: 'Bienvenidos al periodo 2026-I', message: 'Revisen los sílabos y materiales de cada asignatura. Las clases se desarrollan según el horario publicado.', course: 'all', date: new Date().toISOString().slice(0, 10), pinned: true }
    ];
    var NEXT_ANN_ID = 2;
    // Fecha de clase por asignatura y semana: { curso: { semana: 'AAAA-MM-DD' } }
    var WEEK_DATES = { algoritmos: {}, 'aplicaciones-web': {}, arquitectura: {} };

    var PROJECTS = [
        { id: 1, title: 'Sistema de Gestión de Notas', type: 'aplicaciones-web', status: 'Completado', statusClass: 'success', description: 'Aplicación web fullstack para gestión académica de notas de estudiantes.', tags: ['React', 'Node.js', 'PostgreSQL'], members: 4, duration: '4 semanas' },
        { id: 2, title: 'Chatbot Educativo con IA', type: 'aplicaciones-web', status: 'En Progreso', statusClass: 'warning', description: 'Chatbot que responde dudas académicas usando modelos de lenguaje.', tags: ['Python', 'OpenAI API', 'React'], members: 3, duration: '6 semanas' },
        { id: 3, title: 'Dashboard de Rendimiento Académico', type: 'arquitectura', status: 'Completado', statusClass: 'success', description: 'Dashboard interactivo para visualización de métricas de aprendizaje.', tags: ['React', 'D3.js', 'Node.js'], members: 3, duration: '3 semanas' },
        { id: 4, title: 'Microservicios con Docker', type: 'arquitectura', status: 'En Progreso', statusClass: 'warning', description: 'Arquitectura de microservicios desplegada con Docker y Kubernetes.', tags: ['Docker', 'Kubernetes', 'Node.js'], members: 4, duration: '5 semanas' },
        { id: 5, title: 'Analizador Léxico en PSeInt', type: 'algoritmos', status: 'Completado', statusClass: 'success', description: 'Implementación de analizador léxico y sintáctico para el lenguaje PSeInt.', tags: ['Python', 'PSeInt', 'Compiladores'], members: 2, duration: '4 semanas' },
        { id: 6, title: 'Portafolio Docente Digital', type: 'aplicaciones-web', status: 'Planificado', statusClass: 'info', description: 'Sitio web institucional para presentación de recursos académicos.', tags: ['HTML', 'CSS', 'JavaScript'], members: 3, duration: '2 semanas' }
    ];

    var TECH_TAGS = ['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'PSeInt', 'UML'];

    var currentUser = null;

    function isStudent() { return !!(currentUser && currentUser.role === 'student'); }

    function normText(s) { return String(s || '').toLowerCase().replace(/\s+/g, ' ').trim(); }

    function findEnrollments(code, name) {
        var results = [];
        Object.keys(STUDENTS).forEach(function(course) {
            (STUDENTS[course] || []).forEach(function(st) {
                if (normText(st.code) === normText(code) && normText(st.name) === normText(name)) {
                    results.push({ course: course, student: st });
                }
            });
        });
        return results;
    }

    function applyRoleUI() {
        document.body.classList.toggle('student-mode', isStudent());
        var userBar = document.getElementById('headerUser');
        if (userBar) {
            if (isStudent() && currentUser) userBar.innerHTML = '👤 ' + currentUser.name + ' <span class="role-badge student">Estudiante</span>';
            else if (currentUser) userBar.innerHTML = '👤 ' + (currentUser.username || 'docente') + ' <span class="role-badge teacher">Docente</span>';
            else userBar.innerHTML = '';
        }
    }

    function $(sel) { return document.querySelector(sel); }
    function $$(sel) { return document.querySelectorAll(sel); }

    function showToast(type, message) {
        var container = $('#toastContainer');
        if (!container) return;
        var icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
        var toast = document.createElement('div');
        toast.className = 'toast ' + type;
        toast.innerHTML = '<span class="toast-icon">' + (icons[type] || 'ℹ️') + '</span><span class="toast-message">' + message + '</span><button class="toast-close" onclick="this.parentElement.remove()">&times;</button>';
        container.appendChild(toast);
        requestAnimationFrame(function() { toast.classList.add('show'); });
        setTimeout(function() { toast.classList.remove('show'); setTimeout(function() { toast.remove(); }, 300); }, 4000);
    }

    function closeModal(modalId) {
        var m = document.getElementById(modalId);
        if (!m) return;
        // Los modales estáticos (loginModal, courseModal) se ocultan con clase;
        // los dinámicos (editModal, deleteModal) se eliminan del DOM.
        if (m.classList.contains('modal')) {
            m.classList.remove('active');
        } else {
            m.classList.remove('active');
            setTimeout(function() { if (m.parentNode) m.parentNode.removeChild(m); }, 200);
        }
    }
    // Exponer globalmente: los botones inline onclick="closeModal(...)" lo necesitan
    window.closeModal = closeModal;

    function showMainContent() {
        var loginModal = $('#loginModal');
        var mainContent = $('#mainContent');
        if (loginModal) loginModal.classList.remove('active');
        if (mainContent) {
            mainContent.classList.remove('hidden');
            setTimeout(function() {
                $$('[data-count]').forEach(function(el) {
                    var target = parseInt(el.dataset.count);
                    var duration = 1500;
                    var start = performance.now();
                    function tick(now) {
                        var elapsed = now - start;
                        var progress = Math.min(elapsed / duration, 1);
                        var eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.round(eased * target);
                        if (progress < 1) requestAnimationFrame(tick);
                    }
                    requestAnimationFrame(tick);
                });
            }, 300);
        }
    }

    function setupLogin() {
        $$('.role-tab').forEach(function(tab) {
            tab.addEventListener('click', function() {
                $$('.role-tab').forEach(function(t) { t.classList.remove('active'); });
                tab.classList.add('active');
                var isTeacher = tab.dataset.role === 'teacher';
                var lf = $('#loginForm');
                var sf = $('#studentForm');
                if (lf) lf.classList.toggle('hidden', !isTeacher);
                if (sf) sf.classList.toggle('hidden', isTeacher);
            });
        });
        var form = $('#loginForm');
        if (form) form.addEventListener('submit', async function(e) {
            e.preventDefault();
            var user = document.getElementById('username').value.trim();
            var pass = document.getElementById('password').value.trim();
            if (window.ApiClient && ApiClient.useApi()) {
                try {
                    var tr = await ApiClient.loginTeacher(user, pass);
                    ApiClient.setToken(tr.token);
                    currentUser = { role: 'teacher', username: tr.username || user };
                    try { sessionStorage.setItem('portfolio_user', JSON.stringify(currentUser)); } catch(e2) {}
                    try { await loadState(); } catch(e3) {}
                    applyRoleUI();
                    renderCourses(); renderMaterials(); renderSessions(); renderStudents(); renderSchedule(); renderAnnouncements();
                    showMainContent();
                    showToast('success', '¡Bienvenido! Acceso concedido correctamente.');
                } catch(err) {
                    showToast('error', (err && err.message) || 'No se pudo ingresar.');
                }
                return;
            }
            if (user === LOGIN_USER && pass === LOGIN_PASS) {
                currentUser = { role: 'teacher', username: user };
                try { sessionStorage.setItem('portfolio_user', JSON.stringify(currentUser)); } catch(e) {}
                applyRoleUI();
                renderCourses(); renderMaterials(); renderSessions(); renderStudents(); renderAnnouncements();
                showMainContent();
                showToast('success', '¡Bienvenido! Acceso concedido correctamente.');
            } else {
                showToast('error', 'Usuario o contraseña incorrectos. Inténtalo de nuevo.');
            }
        });
        var sform = $('#studentForm');
        if (sform) sform.addEventListener('submit', async function(e) {
            e.preventDefault();
            var code = document.getElementById('studentCode').value.trim();
            var pass = document.getElementById('studentPass').value.trim().toUpperCase();
            if (!code || !pass) { showToast('error', 'Ingresa tu código y tu contraseña.'); return; }
            if (window.ApiClient && ApiClient.useApi()) {
                try {
                    var sr = await ApiClient.loginStudent(code, pass);
                    ApiClient.setToken(sr.token);
                    currentUser = { role: 'student', code: sr.code, name: sr.name };
                    try { sessionStorage.setItem('portfolio_user', JSON.stringify(currentUser)); } catch(e2) {}
                    try { await loadState(); } catch(e3) {}
                    applyRoleUI();
                    renderCourses(); renderMaterials(); renderSessions(); renderStudents(); renderSchedule(); renderAnnouncements();
                    showMainContent();
                    showToast('success', '¡Hola ' + currentUser.name.split(',')[0] + '! Este es tu avance académico.');
                } catch(err) {
                    showToast('error', (err && err.message) || 'No se pudo ingresar.');
                }
                return;
            }
            var found = null;
            Object.keys(STUDENTS).forEach(function(course) {
                (STUDENTS[course] || []).forEach(function(st) {
                    if (normText(st.code) === normText(code)) found = st;
                });
            });
            if (!found) { showToast('error', 'No se encontró el estudiante. Verifica tu código.'); return; }
            if (found.pass !== pass) { showToast('error', 'Contraseña incorrecta. Solicítala a tu docente.'); return; }
            currentUser = { role: 'student', code: found.code, name: found.name };
            try { sessionStorage.setItem('portfolio_user', JSON.stringify(currentUser)); } catch(e) {}
            applyRoleUI();
            renderCourses(); renderMaterials(); renderSessions(); renderStudents(); renderAnnouncements();
            showMainContent();
            showToast('success', '¡Hola ' + currentUser.name.split(',')[0] + '! Este es tu avance académico.');
        });
    }

    function setupLogout() {
        var btn = $('#logoutBtn');
        if (!btn) return;
        btn.addEventListener('click', function() {
            try { sessionStorage.removeItem('portfolio_user'); } catch(e) {}
            if (window.ApiClient) ApiClient.setToken(null);
            currentUser = null;
            document.body.classList.remove('student-mode');
            applyRoleUI();
            var mainContent = $('#mainContent');
            var loginModal = $('#loginModal');
            if (mainContent) mainContent.classList.add('hidden');
            if (loginModal) loginModal.classList.add('active');
            var u = document.getElementById('username');
            var p = document.getElementById('password');
            if (u) u.value = '';
            if (p) p.value = '';
            showToast('info', 'Sesión cerrada correctamente.');
        });
    }

    function checkSession() {
        try {
            var session = sessionStorage.getItem('portfolio_user');
            if (!session) return;
            if (window.ApiClient && ApiClient.useApi() && !ApiClient.getToken()) {
                sessionStorage.removeItem('portfolio_user');
                currentUser = null;
                return;
            }
            currentUser = JSON.parse(session);
            if (!currentUser.role) currentUser.role = 'teacher';
            applyRoleUI();
            showMainContent();
        } catch(e) {}
    }

    function setupNavigation() {
        $$('.nav-link').forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var section = link.dataset.section;
                var sec = document.getElementById(section);
                if (sec) sec.scrollIntoView({ behavior: 'smooth' });
                $$('.nav-link').forEach(function(l) { l.classList.remove('active'); });
                link.classList.add('active');
            });
        });
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.id;
                    $$('.nav-link').forEach(function(l) { l.classList.toggle('active', l.dataset.section === id); });
                }
            });
        }, { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });
        $$('section[id]').forEach(function(section) { observer.observe(section); });
    }

    function setupMobileMenu() {
        var btn = $('#mobileMenuBtn');
        if (!btn) return;
        btn.addEventListener('click', function() {
            var nav = $('#mainNav');
            if (nav) nav.classList.toggle('open');
        });
    }

    function setupFilters() {
        $$('#materialFilters .filter-tab').forEach(function(tab) {
            tab.addEventListener('click', function() {
                $$('#materialFilters .filter-tab').forEach(function(t) { t.classList.remove('active'); });
                tab.classList.add('active');
                filterMaterials(tab.dataset.filter);
            });
        });
        $$('#sessionFilters .filter-tab').forEach(function(tab) {
            tab.addEventListener('click', function() {
                $$('#sessionFilters .filter-tab').forEach(function(t) { t.classList.remove('active'); });
                tab.classList.add('active');
                filterSessions(tab.dataset.filter);
            });
        });
    }

    function renderCourses() {
        var grid = $('#coursesGrid');
        if (!grid) return;
        grid.innerHTML = COURSES.map(function(course) {
            return '<article class="course-card">' +
                '<div class="course-header"><div class="course-icon">' + course.icon + '</div><div class="course-info"><h3>' + course.title + '</h3><span class="course-code">' + course.code + '</span></div></div>' +
                '<p class="course-description">' + course.description + '</p>' +
                '<div class="course-meta"><span class="meta-item"><strong>Créditos:</strong> ' + course.credits + '</span><span class="meta-item"><strong>Horas:</strong> ' + course.hours + '</span><span class="meta-item"><strong>Semanas:</strong> ' + course.weeks + '</span></div>' +
                '<div class="course-topics"><h4>Temas Principales:</h4><ul>' + course.topics.map(function(t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>' +
                '<div class="course-actions"><button class="btn btn-secondary btn-sm" onclick="App.showCourseDetails(\'' + course.id + '\')">📖 Ver Detalles</button><button class="btn btn-primary btn-sm" onclick="App.navigateToSection(\'materiales\',\'' + course.id + '\')">📚 Materiales</button></div>' +
                '<div class="course-actions-bar"><button class="btn btn-edit-course btn-sm" onclick="App.openEditCourse(\'' + course.id + '\')">✏️ Editar</button><button class="btn btn-delete-course btn-sm" onclick="App.openDeleteCourse(\'' + course.id + '\')">🗑️ Eliminar</button></div>' +
                '</article>';
        }).join('');
    }

    function showCourseDetails(id) {
        var course = COURSES.find(function(c) { return c.id === id; });
        if (!course) return;
        var content = $('#courseModalContent');
        if (!content) return;
        content.innerHTML = '<div style="padding:1rem;"><div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;"><span style="font-size:3rem;">' + course.icon + '</span><div><h2 style="margin-bottom:0.25rem;">' + course.title + '</h2><span style="background:var(--bg-tertiary);padding:0.25rem 0.75rem;border-radius:9999px;font-size:0.8125rem;color:var(--text-muted);">' + course.code + '</span></div></div><p style="color:var(--text-secondary);margin-bottom:1.5rem;line-height:1.7;">' + course.description + '</p><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:1.5rem;"><div style="background:var(--bg-tertiary);padding:1rem;border-radius:var(--radius-md);text-align:center;"><strong style="font-size:1.5rem;color:var(--primary);">' + course.credits + '</strong><div style="font-size:0.75rem;color:var(--text-muted);">Créditos</div></div><div style="background:var(--bg-tertiary);padding:1rem;border-radius:var(--radius-md);text-align:center;"><strong style="font-size:1.5rem;color:var(--primary);">' + course.hours + '</strong><div style="font-size:0.75rem;color:var(--text-muted);">Horas</div></div><div style="background:var(--bg-tertiary);padding:1rem;border-radius:var(--radius-md);text-align:center;"><strong style="font-size:1.5rem;color:var(--primary);">' + course.weeks + '</strong><div style="font-size:0.75rem;color:var(--text-muted);">Semanas</div></div></div><h3 style="margin-bottom:1rem;color:var(--primary);">Temas Principales</h3><ul style="display:grid;gap:0.5rem;margin-bottom:1.5rem;">' + course.topics.map(function(t) { return '<li style="display:flex;align-items:center;gap:0.5rem;font-size:0.9375rem;color:var(--text-secondary);"><span style="color:var(--accent);">→</span>' + t + '</li>'; }).join('') + '</ul><div style="display:flex;gap:0.75rem;flex-wrap:wrap;"><button class="btn btn-primary" onclick="App.navigateToSection(\'materiales\',\'' + course.id + '\')">📚 Materiales</button><button class="btn btn-secondary" onclick="App.navigateToSection(\'sesiones\',\'' + course.id + '\')">📋 Sesiones</button><button class="btn btn-secondary" onclick="closeModal(\'courseModal\')">Cerrar</button></div></div>';
        var modal = $('#courseModal');
        if (modal) modal.classList.add('active');
    }

    function getActiveFilter(containerId) {
        var active = document.querySelector('#' + containerId + ' .filter-tab.active');
        return active ? active.dataset.filter : 'all';
    }

    function navigateToSection(sectionId, filter) {
        closeModal('courseModal');
        var sec = document.getElementById(sectionId);
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            if (filter) {
                var tabs = document.querySelectorAll('#' + (sectionId === 'materiales' ? 'materialFilters' : 'sessionFilters') + ' .filter-tab');
                tabs.forEach(function(t) { t.classList.toggle('active', t.dataset.filter === filter); });
                if (sectionId === 'materiales') filterMaterials(filter);
                else if (sectionId === 'sesiones') filterSessions(filter);
            }
        }, 600);
    }

    function getMaterialsForCourse(courseId) {
        return MATERIALS.filter(function(m) { return m.course === courseId; });
    }

    function renderMaterials(filter) {
        filter = filter || 'all';
        var grid = $('#materialsGrid');
        if (!grid) return;
        var filtered = [];
        MATERIALS.forEach(function(m) {
            if (filter === 'all' || m.course === filter) filtered.push(m);
        });
        if (filtered.length === 0) { grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted);"><p>No se encontraron materiales para este filtro.</p></div>'; return; }
        var typeIcons = { pdf: '📄', pptx: '📊', docx: '📝', video: '🎬', code: '💻', folder: '📁' };
        grid.innerHTML = filtered.map(function(mat) {
            var footer = isStudent()
                ? '<button class="btn btn-download btn-sm" onclick="App.downloadFile(\'' + mat.title + '\',\'' + mat.type + '\')">📥 Descargar</button>'
                : '<button class="btn btn-download btn-sm" onclick="App.downloadFile(\'' + mat.title + '\',\'' + mat.type + '\')">📥 Descargar</button><button class="btn btn-edit-material btn-sm" onclick="App.openEditMaterial(' + mat.id + ')">✏️ Editar</button><button class="btn btn-delete-material btn-sm" onclick="App.openDeleteMaterial(' + mat.id + ')">🗑️ Eliminar</button>';
            return '<article class="material-card animate-fade-in-up"><div class="material-header"><div class="material-icon ' + mat.type + '">' + (typeIcons[mat.type] || '📄') + '</div><div class="material-info"><h4>' + mat.title + '</h4><div class="material-meta"><span>📦 ' + mat.size + '</span><span>📂 ' + mat.courseTitle + '</span></div></div></div><div class="material-body"><p>' + mat.description + '</p><div class="material-tags">' + mat.tags.map(function(t) { return '<span class="material-tag">' + t + '</span>'; }).join('') + '</div></div><div class="material-footer">' + footer + '</div></article>';
        }).join('');
    }

    function filterMaterials(filter) { renderMaterials(filter); }

    function openEditMaterial(id) {
        var mat = MATERIALS.find(function(m) { return m.id === id; });
        if (!mat) return;
        closeModal('editModal');
        var modal = document.createElement('div');
        modal.id = 'editModal';
        modal.className = 'edit-modal';
        modal.innerHTML = '<div class="edit-modal-content"><div class="edit-modal-header"><h3>✏️ Editar Material</h3><p>Modifica los datos del material</p></div><div class="edit-modal-body"><form id="editMaterialForm"><div class="form-group"><label for="editMatTitle">Título</label><input type="text" id="editMatTitle" value="' + mat.title + '" required maxlength="100"></div><div class="form-group"><label for="editMatType">Tipo</label><select id="editMatType"><option value="pdf"' + (mat.type === 'pdf' ? ' selected' : '') + '>📄 PDF</option><option value="pptx"' + (mat.type === 'pptx' ? ' selected' : '') + '>📊 PPT</option><option value="docx"' + (mat.type === 'docx' ? ' selected' : '') + '>📝 Word</option><option value="video"' + (mat.type === 'video' ? ' selected' : '') + '>🎬 Video</option><option value="code"' + (mat.type === 'code' ? ' selected' : '') + '>💻 Código</option><option value="folder"' + (mat.type === 'folder' ? ' selected' : '') + '>📁 Carpeta</option></select></div><div class="form-group"><label for="editMatSize">Tamaño</label><input type="text" id="editMatSize" value="' + mat.size + '" required maxlength="20"></div><div class="form-group"><label for="editMatCourse">Curso</label><select id="editMatCourse">' + COURSES.map(function(c) { return '<option value="' + c.id + '"' + (mat.course === c.id ? ' selected' : '') + '>' + c.title + '</option>'; }).join('') + '</select></div><div class="form-group"><label for="editMatDesc">Descripción</label><textarea id="editMatDesc" required>' + mat.description + '</textarea></div><div class="form-group"><label for="editMatTags">Tags (separados por coma)</label><input type="text" id="editMatTags" value="' + mat.tags.join(', ') + '" required placeholder="Tag1, Tag2"></div></form></div><div class="edit-modal-footer"><button class="btn btn-secondary" onclick="closeModal(\'editModal\')">Cancelar</button><button class="btn btn-primary" onclick="App.saveEditMaterial(' + id + ')">💾 Guardar Cambios</button></div></div>';
        document.body.appendChild(modal);
        requestAnimationFrame(function() { modal.classList.add('active'); });
        modal.addEventListener('click', function(e) { if (e.target === modal) closeModal('editModal'); });
    }

    function saveEditMaterial(id) {
        var title = document.getElementById('editMatTitle')?.value.trim();
        var type = document.getElementById('editMatType')?.value;
        var size = document.getElementById('editMatSize')?.value.trim();
        var course = document.getElementById('editMatCourse')?.value;
        var desc = document.getElementById('editMatDesc')?.value.trim();
        var tags = document.getElementById('editMatTags')?.value.split(',').map(function(t) { return t.trim(); }).filter(function(t) { return t; });
        if (!title || !type || !size || !course || !desc || tags.length === 0) { showToast('error', 'Todos los campos son obligatorios.'); return; }
        var mat = MATERIALS.find(function(m) { return m.id === id; });
        if (mat) { mat.title = title; mat.type = type; mat.size = size; mat.course = course; mat.description = desc; mat.tags = tags; }
        var courseTitle = COURSES.find(function(c) { return c.id === course; });
        if (mat) mat.courseTitle = courseTitle ? courseTitle.title : course;
        closeModal('editModal');
        renderMaterials(getActiveFilter('materialFilters'));
        showToast('success', '✅ Material "' + title + '" actualizado.');
    }

    function openDeleteMaterial(id) {
        var mat = MATERIALS.find(function(m) { return m.id === id; });
        if (!mat) return;
        closeModal('deleteModal');
        var modal = document.createElement('div');
        modal.id = 'deleteModal';
        modal.className = 'delete-confirm';
        modal.innerHTML = '<div class="delete-confirm-content"><div class="delete-confirm-icon">⚠️</div><div class="delete-confirm-body"><h3>¿Eliminar Material?</h3><p>Se eliminará: "' + mat.title + '" (' + mat.size + ')</p><div class="action-buttons"><button class="btn btn-delete-material" onclick="App.confirmDeleteMaterial(' + id + ')">Sí, Eliminar</button><button class="btn btn-secondary" onclick="closeModal(\'deleteModal\')">Cancelar</button></div></div></div>';
        document.body.appendChild(modal);
        requestAnimationFrame(function() { modal.classList.add('active'); });
        modal.addEventListener('click', function(e) { if (e.target === modal) closeModal('deleteModal'); });
    }

    function confirmDeleteMaterial(id) {
        var index = MATERIALS.findIndex(function(m) { return m.id === id; });
        if (index === -1) return;
        MATERIALS.splice(index, 1);
        closeModal('deleteModal');
        renderMaterials(getActiveFilter('materialFilters'));
        showToast('warning', '🗑️ Material eliminado.');
    }

    function showAddMaterialForm() {
        var section = document.getElementById('addMaterialSection');
        if (section) section.classList.toggle('hidden');
    }

    function hideAddMaterialForm() {
        var section = document.getElementById('addMaterialSection');
        if (section) section.classList.add('hidden');
    }

    function addNewMaterial() {
        var title = document.getElementById('newMatTitle')?.value.trim();
        var type = document.getElementById('newMatType')?.value;
        var size = document.getElementById('newMatSize')?.value.trim();
        var course = document.getElementById('newMatCourse')?.value;
        var desc = document.getElementById('newMatDesc')?.value.trim();
        var tags = document.getElementById('newMatTags')?.value.split(',').map(function(t) { return t.trim(); }).filter(function(t) { return t; });
        if (!title || !type || !size || !course || !desc || tags.length === 0) { showToast('error', 'Todos los campos son obligatorios.'); return; }
        var courseTitle = COURSES.find(function(c) { return c.id === course; });
        MATERIALS.push({ id: NEXT_MAT_ID++, title: title, type: type, size: size, course: course, courseTitle: courseTitle ? courseTitle.title : course, description: desc, tags: tags });
        hideAddMaterialForm();
        renderMaterials(getActiveFilter('materialFilters'));
        showToast('success', '✅ Material "' + title + '" añadido.');
        var titleInput = document.getElementById('newMatTitle');
        var sizeInput = document.getElementById('newMatSize');
        var descInput = document.getElementById('newMatDesc');
        var tagsInput = document.getElementById('newMatTags');
        if (titleInput) titleInput.value = '';
        if (sizeInput) sizeInput.value = '';
        if (descInput) descInput.value = '';
        if (tagsInput) tagsInput.value = '';
    }

    function renderSessions(filter) {
        filter = filter || 'all';
        var container = $('#sessionsTimeline');
        if (!container) return;
        var filtered = filter === 'all' ? SESSIONS : SESSIONS.filter(function(s) { return s.course === filter; });
        if (filtered.length === 0) { container.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--text-muted);"><p>No se encontraron sesiones para este filtro.</p></div>'; return; }
        container.innerHTML = filtered.map(function(session, index) {
            var actions = isStudent()
                ? '<button class="btn btn-download btn-sm" onclick="App.downloadFile(\'Guía_Sesión_' + session.id + '.pdf\',\'sesion\')">📥 Descargar</button>'
                : '<button class="btn btn-download btn-sm" onclick="App.downloadFile(\'Guía_Sesión_' + session.id + '.pdf\',\'sesion\')">📥 Descargar</button><button class="btn btn-edit-session btn-sm" onclick="App.openEditSession(' + session.id + ')">✏️ Editar</button><button class="btn btn-delete-session btn-sm" onclick="App.openDeleteSession(' + session.id + ')">🗑️ Eliminar</button><button class="btn btn-upload-new-session btn-sm" onclick="App.showUploadNewSession(' + session.id + ')">📤 Subir Nueva</button>';
            return '<div class="session-item" data-session-id="' + session.id + '"><div class="session-marker"></div><div class="session-card animate-fade-in-up" style="animation-delay:' + (index * 0.1) + 's"><div class="session-header"><div><span class="session-number">Sesión ' + session.id + '</span><h4 class="session-title">' + session.title + '</h4></div><span class="session-date">📅 ' + session.date + '</span></div><p class="session-description">' + session.description + '</p><div class="session-topics">' + session.topics.map(function(t) { return '<span class="session-tag">' + t + '</span>'; }).join('') + '</div><div class="session-actions">' + actions + '</div></div></div>';
        }).join('');
    }

    function filterSessions(filter) { renderSessions(filter); }

    function openEditSession(id) {
        var session = SESSIONS.find(function(s) { return s.id === id; });
        if (!session) return;
        closeModal('editModal');
        var modal = document.createElement('div');
        modal.id = 'editModal';
        modal.className = 'edit-modal';
        modal.innerHTML = '<div class="edit-modal-content"><div class="edit-modal-header"><h3>✏️ Editar Sesión ' + id + '</h3><p>Modifica los datos de la sesión</p></div><div class="edit-modal-body"><form id="editSessionForm"><div class="form-group"><label for="editTitle">Título</label><input type="text" id="editTitle" value="' + session.title + '" required maxlength="150"><input type="hidden" id="editSessionId" value="' + id + '"></div><div class="form-group"><label for="editDate">Fecha (DD/MM/AAAA)</label><input type="text" id="editDate" value="' + session.date + '" required maxlength="10" placeholder="20/04/2026"></div><div class="form-group"><label for="editDescription">Descripción</label><textarea id="editDescription" required>' + session.description + '</textarea></div><div class="form-group"><label for="editTopics">Temas (separados por coma)</label><input type="text" id="editTopics" value="' + session.topics.join(', ') + '" required placeholder="Temas, separados por coma"></div><div class="form-group"><label for="editFile">Archivo (opcional)</label><div class="upload-area"><input type="file" id="editFile" accept=".pdf,.docx,.pptx,.doc,.ppt,.xls,.xlsx" onchange="App.handleEditFileUpload(this)"><div class="upload-icon">📎</div><div class="upload-text">Clic para <strong>subir archivo</strong> (opcional)</div><div class="upload-hint">PDF, DOC, PPT, Excel</div><div class="upload-file-name" id="editFileName"></div></div></div></form></div><div class="edit-modal-footer"><button class="btn btn-secondary" onclick="closeModal(\'editModal\')">Cancelar</button><button class="btn btn-primary" onclick="App.saveEditSession(' + id + ')">💾 Guardar Cambios</button></div></div>';
        document.body.appendChild(modal);
        requestAnimationFrame(function() { modal.classList.add('active'); });
        modal.addEventListener('click', function(e) { if (e.target === modal) closeModal('editModal'); });
    }

    function saveEditSession(id) {
        var title = document.getElementById('editTitle')?.value.trim();
        var date = document.getElementById('editDate')?.value.trim();
        var description = document.getElementById('editDescription')?.value.trim();
        var topics = document.getElementById('editTopics')?.value.split(',').map(function(t) { return t.trim(); }).filter(function(t) { return t; });
        var file = document.getElementById('editFile')?.files[0];
        if (!title || !date || !description || topics.length === 0) { showToast('error', 'Todos los campos son obligatorios.'); return; }
        if (file) { var maxSize = 100 * 1024 * 1024; var allowedTypes = ['.pdf', '.docx', '.pptx', '.doc', '.ppt', '.xls', '.xlsx']; var ext = '.' + file.name.split('.').pop().toLowerCase(); if (!allowedTypes.includes(ext)) { showToast('error', 'Formato no permitido.'); return; } if (file.size > maxSize) { showToast('error', 'Archivo demasiado grande (máx. 100MB).'); return; } }
        var s = SESSIONS.find(function(s) { return s.id === id; });
        if (s) { s.title = title; s.date = date; s.description = description; s.topics = topics; }
        closeModal('editModal');
        renderSessions(getActiveFilter('sessionFilters'));
        showToast('success', '✅ Sesión ' + id + ' actualizada.');
    }

    function handleEditFileUpload(input) {
        var file = input.files[0];
        if (!file) return;
        var nameEl = document.getElementById('editFileName');
        if (nameEl) { nameEl.textContent = '✓ "' + file.name + '" (' + formatFileSize(file.size) + ')'; nameEl.style.color = 'var(--success)'; }
    }

    function formatFileSize(bytes) {
        if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
        if (bytes >= 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return bytes + ' bytes';
    }

    function openDeleteSession(id) {
        var session = SESSIONS.find(function(s) { return s.id === id; });
        if (!session) return;
        closeModal('deleteModal');
        var modal = document.createElement('div');
        modal.id = 'deleteModal';
        modal.className = 'delete-confirm';
        modal.innerHTML = '<div class="delete-confirm-content"><div class="delete-confirm-icon">⚠️</div><div class="delete-confirm-body"><h3>¿Eliminar Sesión ' + id + '?</h3><p>Se eliminará: "' + session.title + '" (' + session.date + ')</p><div class="action-buttons"><button class="btn btn-delete-session" onclick="App.confirmDeleteSession(' + id + ')">Sí, Eliminar</button><button class="btn btn-secondary" onclick="closeModal(\'deleteModal\')">Cancelar</button></div></div></div>';
        document.body.appendChild(modal);
        requestAnimationFrame(function() { modal.classList.add('active'); });
        modal.addEventListener('click', function(e) { if (e.target === modal) closeModal('deleteModal'); });
    }

    function confirmDeleteSession(id) {
        var index = SESSIONS.findIndex(function(s) { return s.id === id; });
        if (index === -1) return;
        SESSIONS.splice(index, 1);
        closeModal('deleteModal');
        renderSessions(getActiveFilter('sessionFilters'));
        showToast('warning', '🗑️ Sesión ' + id + ' eliminada.');
    }

    function showUploadNewSession(id) {
        showToast('info', '📤 Para subir una nueva sesión, ve a la sección de Subida de Materiales.');
        setTimeout(function() { var area = document.getElementById('uploadSesion'); if (area) area.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 500);
    }

    function sortStudents(course) {
        STUDENTS[course].sort(function(a, b) { return a.name.localeCompare(b.name, 'es'); });
    }

    function genPass() {
        var chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
        var s = '';
        for (var i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
        return s;
    }

    function normalizeStudent(st) {
        if (!st.pass) st.pass = genPass();
        // grades: arreglo de 17 (una nota de trabajo por semana)
        var g = [];
        for (var i = 0; i < WEEK_COUNT; i++) {
            var v = (st.grades && st.grades[i] !== undefined) ? st.grades[i] : null;
            g.push((v === '' || v === undefined) ? null : v);
        }
        st.grades = g;
        // attendance: claves de semana 1..17 (se descartan formatos antiguos por fecha)
        var att = {};
        if (st.attendance) {
            Object.keys(st.attendance).forEach(function(k) {
                var w = parseInt(k, 10);
                if (w >= 1 && w <= WEEK_COUNT && 'PTF'.indexOf(st.attendance[k]) !== -1) att[w] = st.attendance[k];
            });
        }
        st.attendance = att;
        return st;
    }

    function saveStudents() {
        try { localStorage.setItem('portfolio_students_v2', JSON.stringify({ data: STUDENTS, nextId: NEXT_STU_ID, weekDates: WEEK_DATES })); } catch(e) {}
        queueStateSync();
    }

    function loadStudents() {
        try {
            var raw = localStorage.getItem('portfolio_students_v2') || localStorage.getItem('portfolio_students');
            if (raw) {
                var parsed = JSON.parse(raw);
                if (parsed && parsed.data) {
                    Object.keys(STUDENTS).forEach(function(course) {
                        if (parsed.data[course]) STUDENTS[course] = parsed.data[course].map(normalizeStudent);
                    });
                    if (parsed.nextId) NEXT_STU_ID = parsed.nextId;
                    if (parsed.weekDates) {
                        Object.keys(WEEK_DATES).forEach(function(course) {
                            if (parsed.weekDates[course]) WEEK_DATES[course] = parsed.weekDates[course];
                        });
                    }
                }
            }
        } catch(e) {}
        Object.keys(STUDENTS).forEach(function(course) {
            STUDENTS[course] = STUDENTS[course].map(normalizeStudent);
        });
        saveStudents();
    }

    function getWeekDate(course, week) {
        if (WEEK_DATES[course] && WEEK_DATES[course][week]) return WEEK_DATES[course][week];
        return '';
    }

    function formatShortDate(iso) {
        if (!iso) return '';
        var p = iso.split('-');
        if (p.length !== 3) return iso;
        return p[2] + '/' + p[1];
    }

    function formatLongDate(iso) {
        if (!iso) return 'sin fecha';
        var p = iso.split('-');
        if (p.length !== 3) return iso;
        return p[2] + '/' + p[1] + '/' + p[0];
    }

    function setWeekDate(value) {
        if (!WEEK_DATES[currentStudentCourse]) WEEK_DATES[currentStudentCourse] = {};
        if (value) WEEK_DATES[currentStudentCourse][currentWeek] = value;
        else delete WEEK_DATES[currentStudentCourse][currentWeek];
        saveStudents();
        renderStudents();
    }

    function getCurrentWeek() {
        var sel = document.getElementById('weekSelect');
        var w = sel ? parseInt(sel.value, 10) : currentWeek;
        if (isNaN(w) || w < 1 || w > WEEK_COUNT) w = 1;
        currentWeek = w;
        return w;
    }

    function riskInfo(st) {
        var reasons = [];
        var res = studentAverage(st);
        if (res.avg !== null && Number(res.avg) < RISK_AVG) reasons.push('Promedio ' + res.avg);
        var s = attendanceStats(st);
        if (s.pct !== null && s.pct < RISK_ATT) reasons.push('Asistencia ' + s.pct + '%');
        return { risk: reasons.length > 0, reasons: reasons, avg: res.avg, pct: s.pct };
    }

    function attendanceStats(student) {
        var weeks = Object.keys(student.attendance || {});
        if (weeks.length === 0) return { pct: null, count: 0 };
        var score = 0;
        weeks.forEach(function(w) {
            var v = student.attendance[w];
            if (v === 'P') score += 1;
            else if (v === 'T') score += 0.5;
        });
        return { pct: Math.round((score / weeks.length) * 100), count: weeks.length };
    }

    function studentAverage(student) {
        var valid = (student.grades || []).filter(function(g) { return g !== null && g !== undefined && g !== ''; });
        if (valid.length === 0) return { avg: null, count: 0 };
        var sum = valid.reduce(function(a, b) { return a + Number(b); }, 0);
        return { avg: (sum / valid.length).toFixed(1), count: valid.length };
    }

    function avgClass(avg) {
        if (avg === null) return '';
        var n = Number(avg);
        if (n >= 13) return 'avg-good';
        if (n >= 11) return 'avg-mid';
        return 'avg-low';
    }

    function renderStudents() {
        var body = document.getElementById('studentsBody');
        if (!body) return;
        sortStudents(currentStudentCourse);
        var list = STUDENTS[currentStudentCourse] || [];
        var q = getStudentSearch();
        if (q) {
            list = list.filter(function(st) {
                return normText(st.name).indexOf(q) !== -1 || normText(st.code).indexOf(q) !== -1;
            });
        }
        if (isStudent() && currentUser) {
            var myCode = normText(currentUser.code);
            list = list.filter(function(st) { return normText(st.code) === myCode; });
        }
        var week = getCurrentWeek();
        var weekDate = getWeekDate(currentStudentCourse, week);
        var dateInput = document.getElementById('weekDate');
        if (dateInput && document.activeElement !== dateInput) dateInput.value = weekDate;
        var suffix = weekDate ? ' · ' + formatShortDate(weekDate) : '';
        var attLabel = document.getElementById('attWeekLabel');
        if (attLabel) attLabel.textContent = '(S' + week + suffix + ')';
        var gradeLabel = document.getElementById('gradeWeekLabel');
        if (gradeLabel) gradeLabel.textContent = '(S' + week + suffix + ')';
        if (list.length === 0) {
            body.innerHTML = '<tr><td colspan="9" class="students-empty">' + (isStudent() ? 'No estás registrado en esta asignatura.' : 'No hay estudiantes registrados en esta asignatura. Usa el formulario superior para añadirlos manualmente.') + '</td></tr>';
        } else {
            body.innerHTML = list.map(function(st, i) {
                var mark = (st.attendance && st.attendance[week]) || '';
                var stats = attendanceStats(st);
                var res = studentAverage(st);
                var rk = riskInfo(st);
                var gv = (st.grades && st.grades[week - 1] !== null && st.grades[week - 1] !== undefined) ? st.grades[week - 1] : '';
                var attCell, noteCell, claveCell, actionCell;
                if (isStudent()) {
                    attCell = '<span class="att-static att-' + mark + '">' + (ATT_TEXT[mark] || '—') + '</span>';
                    noteCell = gv === '' ? '—' : '<strong>' + gv + '</strong>';
                    claveCell = (st.pass || '—');
                    actionCell = '<button class="btn btn-download btn-sm" title="Mi constancia" onclick="App.openConstancia(\'' + currentStudentCourse + '\')">🧾</button>';
                } else {
                    attCell = '<div class="att-btns">' +
                        '<button class="att-btn att-p' + (mark === 'P' ? ' active' : '') + '" onclick="App.markAttendance(' + st.id + ',\'P\')" title="Presente">P</button>' +
                        '<button class="att-btn att-t' + (mark === 'T' ? ' active' : '') + '" onclick="App.markAttendance(' + st.id + ',\'T\')" title="Tardanza">T</button>' +
                        '<button class="att-btn att-f' + (mark === 'F' ? ' active' : '') + '" onclick="App.markAttendance(' + st.id + ',\'F\')" title="Falta">F</button>' +
                        '</div>';
                    noteCell = '<input type="number" class="grade-input" min="0" max="20" value="' + gv + '" onchange="App.setGrade(' + st.id + ',this.value)" aria-label="Nota de trabajo semana ' + week + '">';
                    claveCell = '<span class="pass-badge" title="Clic para copiar" onclick="App.copyPass(' + st.id + ')">' + (st.pass || '—') + '</span> <button class="btn btn-secondary btn-sm" title="Regenerar clave" onclick="App.regenPass(' + st.id + ')">🔄</button>';
                    actionCell = '<button class="btn btn-delete-student btn-sm" onclick="App.deleteStudent(' + st.id + ')">🗑️</button> <button class="btn btn-edit-student btn-sm" title="Editar" onclick="App.openEditStudent(' + st.id + ')">✏️</button>';
                }
                return '<tr class="' + (rk.risk ? 'at-risk' : '') + '">' +
                    '<td>' + (i + 1) + '</td>' +
                    '<td class="student-name">' + st.name + (rk.risk ? ' <span class="risk-badge" title="' + rk.reasons.join(' · ') + '">⚠️ Riesgo</span>' : '') + '</td>' +
                    '<td>' + (st.code || '—') + '</td>' +
                    '<td>' + claveCell + '</td>' +
                    '<td>' + attCell + '</td>' +
                    '<td>' + (stats.pct === null ? '—' : stats.pct + '%') + '<div class="sub-count">' + stats.count + '/' + WEEK_COUNT + ' sem.</div></td>' +
                    '<td>' + noteCell + '</td>' +
                    '<td><span class="avg-badge ' + avgClass(res.avg) + '">' + (res.avg === null ? '—' : res.avg) + '</span><div class="sub-count">' + res.count + '/' + WEEK_COUNT + ' sem.</div></td>' +
                    '<td>' + actionCell + '</td>' +
                '</tr>';
            }).join('');
        }
        renderStudentsSummary(list);
        renderDashboard();
    }

    function getStudentSearch() {
        var input = document.getElementById('studentSearch');
        return input ? normText(input.value) : '';
    }

    function openEditStudent(id) {
        var list = STUDENTS[currentStudentCourse] || [];
        var st = list.find(function(s) { return s.id === id; });
        if (!st) return;
        closeModal('editModal');
        var modal = document.createElement('div');
        modal.id = 'editModal';
        modal.className = 'edit-modal';
        modal.innerHTML = '<div class="edit-modal-content"><div class="edit-modal-header"><h3>✏️ Editar Estudiante</h3><p>Modifica los datos del estudiante</p></div><div class="edit-modal-body"><form id="editStudentForm"><div class="form-group"><label for="editStudentName">Apellidos y Nombres</label><input type="text" id="editStudentName" value="' + st.name + '" required maxlength="100"></div><div class="form-group"><label for="editStudentCode">Código</label><input type="text" id="editStudentCode" value="' + (st.code || '') + '" required maxlength="20"></div><div class="form-group"><label>Contraseña actual</label><input type="text" value="' + (st.pass || '') + '" disabled></div></form></div><div class="edit-modal-footer"><button class="btn btn-secondary" onclick="closeModal(\'editModal\')">Cancelar</button><button class="btn btn-primary" onclick="App.saveEditStudent(' + id + ')">💾 Guardar Cambios</button></div></div>';
        document.body.appendChild(modal);
        requestAnimationFrame(function() { modal.classList.add('active'); });
        modal.addEventListener('click', function(e) { if (e.target === modal) closeModal('editModal'); });
    }

    function saveEditStudent(id) {
        var name = document.getElementById('editStudentName')?.value.trim();
        var code = document.getElementById('editStudentCode')?.value.trim();
        if (!name || !code) { showToast('error', 'Nombre y código son obligatorios.'); return; }
        var list = STUDENTS[currentStudentCourse] || [];
        var dup = list.find(function(s) { return s.id !== id && normText(s.code) === normText(code); });
        if (dup) { showToast('error', 'Ya existe otro estudiante con ese código.'); return; }
        var st = list.find(function(s) { return s.id === id; });
        if (st) { st.name = name; st.code = code; }
        sortStudents(currentStudentCourse);
        saveStudents();
        closeModal('editModal');
        renderStudents();
        showToast('success', '✅ Estudiante actualizado.');
    }

    function markAllPresent() {
        var list = STUDENTS[currentStudentCourse] || [];
        if (list.length === 0) { showToast('info', 'No hay estudiantes en esta asignatura.'); return; }
        var week = getCurrentWeek();
        list.forEach(function(st) {
            if (!st.attendance) st.attendance = {};
            st.attendance[week] = 'P';
        });
        saveStudents();
        renderStudents();
        showToast('success', '✅ Semana ' + week + ': todos marcados presentes.');
    }

    function renderStudentsSummary(list) {
        var el = document.getElementById('studentsSummary');
        if (!el) return;
        var withGrades = list.filter(function(s) { return studentAverage(s).avg !== null; }).length;
        var atRisk = list.filter(function(s) { return riskInfo(s).risk; }).length;
        el.innerHTML = '<span class="summary-chip">👥 ' + list.length + ' estudiantes</span>' +
            '<span class="summary-chip">📝 ' + withGrades + ' con notas</span>' +
            '<span class="summary-chip">📅 S' + currentWeek + '/' + WEEK_COUNT + ' · ' + formatLongDate(getWeekDate(currentStudentCourse, currentWeek)) + '</span>' +
            (atRisk ? '<span class="summary-chip risk-chip">🚨 ' + atRisk + ' en riesgo</span>' : '');
    }

    function setStudentCourse(filter) {
        currentStudentCourse = filter;
        renderStudents();
    }

    function setupStudentFilters() {
        $$('#studentFilters .filter-tab').forEach(function(tab) {
            tab.addEventListener('click', function() {
                $$('#studentFilters .filter-tab').forEach(function(t) { t.classList.remove('active'); });
                tab.classList.add('active');
                setStudentCourse(tab.dataset.filter);
            });
        });
        var weekSelect = document.getElementById('weekSelect');
        if (weekSelect) {
            var opts = '';
            for (var w = 1; w <= WEEK_COUNT; w++) {
                opts += '<option value="' + w + '"' + (w === currentWeek ? ' selected' : '') + '>Semana ' + w + '</option>';
            }
            weekSelect.innerHTML = opts;
            weekSelect.addEventListener('change', renderStudents);
        }
        var weekDateInput = document.getElementById('weekDate');
        if (weekDateInput) {
            weekDateInput.addEventListener('change', function() { setWeekDate(weekDateInput.value); });
        }
        var searchInput = document.getElementById('studentSearch');
        if (searchInput) {
            searchInput.addEventListener('input', function() { renderStudents(); });
        }
    }

    function addNewStudent() {
        var nameInput = document.getElementById('newStudentName');
        var codeInput = document.getElementById('newStudentCode');
        var name = nameInput ? nameInput.value.trim() : '';
        var code = codeInput ? codeInput.value.trim() : '';
        if (!name) { showToast('error', 'Ingresa los apellidos y nombres del estudiante.'); return; }
        var blank = [];
        for (var i = 0; i < WEEK_COUNT; i++) blank.push(null);
        var newPass = genPass();
        STUDENTS[currentStudentCourse].push({ id: NEXT_STU_ID++, name: name, code: code, pass: newPass, grades: blank, attendance: {} });
        sortStudents(currentStudentCourse);
        saveStudents();
        renderStudents();
        showToast('success', '✅ "' + name + '" añadido. Clave: ' + newPass);
        if (nameInput) nameInput.value = '';
        if (codeInput) codeInput.value = '';
        if (nameInput) nameInput.focus();
    }

    function clearStudentForm() {
        var nameInput = document.getElementById('newStudentName');
        var codeInput = document.getElementById('newStudentCode');
        if (nameInput) nameInput.value = '';
        if (codeInput) codeInput.value = '';
    }

    function markAttendance(id, status) {
        var list = STUDENTS[currentStudentCourse] || [];
        var st = list.find(function(s) { return s.id === id; });
        if (!st) return;
        if (!st.attendance) st.attendance = {};
        var week = getCurrentWeek();
        if (st.attendance[week] === status) delete st.attendance[week];
        else st.attendance[week] = status;
        saveStudents();
        renderStudents();
    }

    function setGrade(id, value) {
        var list = STUDENTS[currentStudentCourse] || [];
        var st = list.find(function(s) { return s.id === id; });
        if (!st) return;
        var week = getCurrentWeek();
        if (value === '' || value === null) { st.grades[week - 1] = null; }
        else {
            var n = Number(value);
            if (isNaN(n) || n < 0 || n > 20) { showToast('error', 'La nota debe estar entre 0 y 20.'); renderStudents(); return; }
            st.grades[week - 1] = n;
        }
        saveStudents();
        renderStudents();
        showToast('success', '✅ Nota de la semana ' + week + ' guardada.');
    }

    function copyPass(id) {
        var list = STUDENTS[currentStudentCourse] || [];
        var st = list.find(function(s) { return s.id === id; });
        if (!st || !st.pass) return;
        try {
            navigator.clipboard.writeText(st.pass).then(function() {
                showToast('success', '📋 Clave copiada: ' + st.pass);
            }, function() {
                showToast('info', '🔑 Clave de ' + st.name + ': ' + st.pass);
            });
        } catch(e) {
            showToast('info', '🔑 Clave de ' + st.name + ': ' + st.pass);
        }
    }

    function regenPass(id) {
        var list = STUDENTS[currentStudentCourse] || [];
        var st = list.find(function(s) { return s.id === id; });
        if (!st) return;
        st.pass = genPass();
        saveStudents();
        renderStudents();
        showToast('success', '🔑 Nueva clave para "' + st.name + '": ' + st.pass);
    }

    function deleteStudent(id) {
        var list = STUDENTS[currentStudentCourse] || [];
        var index = list.findIndex(function(s) { return s.id === id; });
        if (index === -1) return;
        var name = list[index].name;
        list.splice(index, 1);
        saveStudents();
        renderStudents();
        showToast('warning', '🗑️ Estudiante "' + name + '" eliminado.');
    }

    var reportView = 'week';
    var ATT_TEXT = { P: 'Presente', T: 'Tardanza', F: 'Falta' };

    function getCourseTitle(id) {
        var c = COURSES.find(function(x) { return x.id === id; });
        return c ? c.title : id;
    }

    function openReport() {
        reportView = 'week';
        var tabs = document.querySelector('#reportModal .report-tabs');
        if (tabs) tabs.style.display = '';
        var csvBtn = document.getElementById('csvBtn');
        if (csvBtn) csvBtn.style.display = '';
        renderReport();
        var m = document.getElementById('reportModal');
        if (m) m.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeReport() {
        var m = document.getElementById('reportModal');
        if (m) m.classList.remove('active');
        document.body.style.overflow = '';
        document.body.classList.remove('printing-report');
        var tabs = document.querySelector('#reportModal .report-tabs');
        if (tabs) tabs.style.display = '';
        var csvBtn = document.getElementById('csvBtn');
        if (csvBtn) csvBtn.style.display = '';
    }

    function switchReportTab(v) {
        reportView = v;
        renderReport();
    }

    function renderReport() {
        var body = document.getElementById('reportBody');
        if (!body) return;
        sortStudents(currentStudentCourse);
        var tw = document.getElementById('tabWeek');
        var ta = document.getElementById('tabAll');
        var tc = document.getElementById('tabActa');
        if (tw) tw.classList.toggle('active', reportView === 'week');
        if (ta) ta.classList.toggle('active', reportView === 'all');
        if (tc) tc.classList.toggle('active', reportView === 'acta');
        body.innerHTML = reportView === 'week' ? weekReportHTML() : reportView === 'all' ? allReportHTML() : actaHTML();
    }

    function conditionOf(avg) {
        if (avg === null) return { t: '—', c: '' };
        return Number(avg) >= 13 ? { t: 'APROBADO', c: 'avg-good' } : { t: 'DESAPROBADO', c: 'avg-low' };
    }

    function actaHTML() {
        var list = STUDENTS[currentStudentCourse] || [];
        var ap = 0, de = 0, sn = 0, sum = 0, nAvg = 0;
        var rows = list.map(function(st, i) {
            var res = studentAverage(st);
            var stats = attendanceStats(st);
            var cond = conditionOf(res.avg);
            if (res.avg === null) sn++;
            else { nAvg++; sum += Number(res.avg); if (cond.t === 'APROBADO') ap++; else de++; }
            return '<tr><td>' + (i + 1) + '</td><td class="name">' + st.name + '</td><td>' + (st.code || '—') + '</td>' +
                '<td><strong>' + (res.avg === null ? '—' : res.avg) + '</strong></td>' +
                '<td>' + (stats.pct === null ? '—' : stats.pct + '%') + '</td>' +
                '<td><span class="avg-badge ' + cond.c + '">' + cond.t + '</span></td></tr>';
        }).join('');
        var classAvg = nAvg ? (sum / nAvg).toFixed(1) : '—';
        var today = new Date().toLocaleDateString('es-PE');
        return '<div class="report-header"><h3>📜 Acta Final de Notas</h3>' +
            '<p><strong>IESTP Recuay</strong> · ' + getCourseTitle(currentStudentCourse) + '</p>' +
            '<p>Periodo 2026-I · Fecha: ' + today + '</p></div>' +
            '<div class="matrix-wrap"><table class="report-table"><thead><tr><th>N°</th><th>Estudiante</th><th>Código</th><th>Prom. Final</th><th>% Asist.</th><th>Condición</th></tr></thead><tbody>' +
            (rows || '<tr><td colspan="6">Sin estudiantes registrados.</td></tr>') + '</tbody></table></div>' +
            '<div class="report-summary"><span class="summary-chip">👥 Total: ' + list.length + '</span>' +
            '<span class="summary-chip">✅ Aprobados: ' + ap + '</span>' +
            '<span class="summary-chip">❌ Desaprobados: ' + de + '</span>' +
            '<span class="summary-chip">📝 Sin calificar: ' + sn + '</span>' +
            '<span class="summary-chip">📈 Promedio general: ' + classAvg + '</span></div>' +
            '<div class="acta-sign">_________________________<br>Firma del Docente</div>';
    }

    function weekReportHTML() {
        var list = STUDENTS[currentStudentCourse] || [];
        var week = currentWeek;
        var date = getWeekDate(currentStudentCourse, week);
        var p = 0, t = 0, f = 0, sum = 0, nAvg = 0;
        var rows = list.map(function(st, i) {
            var mark = (st.attendance && st.attendance[week]) || '';
            if (mark === 'P') p++;
            else if (mark === 'T') t++;
            else if (mark === 'F') f++;
            var res = studentAverage(st);
            if (res.avg !== null) { sum += Number(res.avg); nAvg++; }
            var g = (st.grades && st.grades[week - 1] !== null && st.grades[week - 1] !== undefined) ? st.grades[week - 1] : '—';
            return '<tr><td>' + (i + 1) + '</td><td class="name">' + st.name + '</td><td>' + (st.code || '—') + '</td>' +
                '<td class="cell-' + mark + '">' + (ATT_TEXT[mark] || '—') + '</td><td>' + g + '</td>' +
                '<td><strong>' + (res.avg === null ? '—' : res.avg) + '</strong></td></tr>';
        }).join('');
        var classAvg = nAvg ? (sum / nAvg).toFixed(1) : '—';
        return '<div class="report-header"><h3>📊 Reporte de Asistencia y Notas</h3>' +
            '<p><strong>IESTP Recuay</strong> · ' + getCourseTitle(currentStudentCourse) + '</p>' +
            '<p>Semana ' + week + ' de ' + WEEK_COUNT + ' · Fecha: ' + formatLongDate(date) + '</p></div>' +
            '<div class="matrix-wrap"><table class="report-table"><thead><tr><th>N°</th><th>Estudiante</th><th>Código</th><th>Asistencia</th><th>Nota S' + week + '</th><th>Prom.</th></tr></thead><tbody>' +
            (rows || '<tr><td colspan="6">Sin estudiantes registrados.</td></tr>') + '</tbody></table></div>' +
            '<div class="report-summary"><span class="summary-chip">👥 Total: ' + list.length + '</span>' +
            '<span class="summary-chip">✅ Presentes: ' + p + '</span>' +
            '<span class="summary-chip">⏰ Tardanzas: ' + t + '</span>' +
            '<span class="summary-chip">❌ Faltas: ' + f + '</span>' +
            '<span class="summary-chip">📈 Promedio general: ' + classAvg + '</span></div>';
    }

    function allReportHTML() {
        var list = STUDENTS[currentStudentCourse] || [];
        var head = '<tr><th>N°</th><th>Estudiante</th>';
        for (var w = 1; w <= WEEK_COUNT; w++) head += '<th>S' + w + '</th>';
        head += '<th>Prom.</th><th>% Asist.</th></tr>';
        var rows = list.map(function(st, i) {
            var cells = '';
            for (var w2 = 1; w2 <= WEEK_COUNT; w2++) {
                var m = (st.attendance && st.attendance[w2]) || '';
                var g = (st.grades && st.grades[w2 - 1] !== null && st.grades[w2 - 1] !== undefined) ? st.grades[w2 - 1] : '';
                cells += '<td><span class="cell-' + m + '">' + (m || '·') + '</span>' + (g === '' ? '' : ' ' + g) + '</td>';
            }
            var res = studentAverage(st);
            var stats = attendanceStats(st);
            return '<tr><td>' + (i + 1) + '</td><td class="name">' + st.name + '</td>' + cells +
                '<td><strong>' + (res.avg === null ? '—' : res.avg) + '</strong></td>' +
                '<td>' + (stats.pct === null ? '—' : stats.pct + '%') + '</td></tr>';
        }).join('');
        return '<div class="report-header"><h3>📊 Consolidado 17 Semanas</h3>' +
            '<p><strong>IESTP Recuay</strong> · ' + getCourseTitle(currentStudentCourse) + '</p>' +
            '<p>Celda: marca de asistencia (P/T/F) + nota de trabajo</p></div>' +
            '<div class="matrix-wrap"><table class="report-table matrix"><thead>' + head + '</thead><tbody>' +
            (rows || '<tr><td colspan="' + (WEEK_COUNT + 4) + '">Sin estudiantes registrados.</td></tr>') + '</tbody></table></div>';
    }

    function csvCell(v) {
        v = String(v === null || v === undefined ? '' : v);
        return '"' + v.replace(/"/g, '""') + '"';
    }

    function downloadReportCSV() {
        sortStudents(currentStudentCourse);
        var list = STUDENTS[currentStudentCourse] || [];
        var lines = [];
        var blob = null;
        var fname = '';
        if (reportView === 'acta') {
            var actaLines = [];
            actaLines.push('ACTA FINAL DE NOTAS - IESTP Recuay - ' + getCourseTitle(currentStudentCourse) + ' - ' + new Date().toLocaleDateString('es-PE'));
            actaLines.push(['N°', 'Apellidos y Nombres', 'Código', 'Promedio Final', '% Asistencia', 'Condición'].map(csvCell).join(';'));
            list.forEach(function(st, i) {
                var resA = studentAverage(st);
                var statsA = attendanceStats(st);
                actaLines.push([i + 1, st.name, st.code || '', resA.avg === null ? '' : resA.avg, statsA.pct === null ? '' : statsA.pct + '%', conditionOf(resA.avg).t].map(csvCell).join(';'));
            });
            blob = new Blob(['\ufeff' + actaLines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
            fname = 'acta_final_' + currentStudentCourse + '.csv';
        } else if (reportView === 'week') {
            var week = currentWeek;
            var date = getWeekDate(currentStudentCourse, week);
            lines.push('REPORTE DE ASISTENCIA Y NOTAS - IESTP Recuay');
            lines.push(getCourseTitle(currentStudentCourse) + ' - Semana ' + week + ' - Fecha: ' + formatLongDate(date));
            lines.push(['N°', 'Apellidos y Nombres', 'Código', 'Asistencia', 'Nota S' + week, 'Promedio', '% Asistencia'].map(csvCell).join(';'));
            list.forEach(function(st, i) {
                var mark = (st.attendance && st.attendance[week]) || '';
                var g = (st.grades && st.grades[week - 1] !== null && st.grades[week - 1] !== undefined) ? st.grades[week - 1] : '';
                var res = studentAverage(st);
                var stats = attendanceStats(st);
                lines.push([i + 1, st.name, st.code || '', ATT_TEXT[mark] || 'Sin marcar', g, res.avg === null ? '' : res.avg, stats.pct === null ? '' : stats.pct + '%'].map(csvCell).join(';'));
            });
        } else {
            var header = ['N°', 'Apellidos y Nombres', 'Código'];
            for (var w = 1; w <= WEEK_COUNT; w++) header.push('S' + w + ' (marca|nota)');
            header.push('Promedio', '% Asistencia');
            lines.push('CONSOLIDADO 17 SEMANAS - IESTP Recuay - ' + getCourseTitle(currentStudentCourse));
            lines.push(header.map(csvCell).join(';'));
            list.forEach(function(st, i) {
                var row = [i + 1, st.name, st.code || ''];
                for (var w2 = 1; w2 <= WEEK_COUNT; w2++) {
                    var m = (st.attendance && st.attendance[w2]) || '';
                    var gg = (st.grades && st.grades[w2 - 1] !== null && st.grades[w2 - 1] !== undefined) ? st.grades[w2 - 1] : '';
                    row.push(m + (gg === '' ? '' : '|' + gg));
                }
                var res2 = studentAverage(st);
                var stats2 = attendanceStats(st);
                row.push(res2.avg === null ? '' : res2.avg);
                row.push(stats2.pct === null ? '' : stats2.pct + '%');
                lines.push(row.map(csvCell).join(';'));
            });
        }
        if (!blob) {
            blob = new Blob(['\ufeff' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
            fname = 'reporte_' + currentStudentCourse + '_' + (reportView === 'week' ? ('S' + currentWeek) : 'consolidado17') + '.csv';
        }
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = fname;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() { URL.revokeObjectURL(a.href); a.remove(); }, 500);
        showToast('success', '⬇️ Reporte CSV descargado.');
    }

    function printReport() {
        document.body.classList.add('printing-report');
        window.print();
        setTimeout(function() { document.body.classList.remove('printing-report'); }, 800);
    }

    function setupReport() {
        var m = document.getElementById('reportModal');
        if (m) m.addEventListener('click', function(e) { if (e.target === m) closeReport(); });
        document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeReport(); });
    }

    function dashCourseStats(course) {
        var list = STUDENTS[course] || [];
        var p = 0, t = 0, f = 0, marks = 0, score = 0, sum = 0, n = 0;
        var weeks = {};
        list.forEach(function(st) {
            Object.keys(st.attendance || {}).forEach(function(w) {
                var v = st.attendance[w];
                marks++;
                if (v === 'P') { p++; score += 1; }
                else if (v === 'T') { t++; score += 0.5; }
                else if (v === 'F') { f++; }
                weeks[w] = true;
            });
            var r = studentAverage(st);
            if (r.avg !== null) { sum += Number(r.avg); n++; }
            (st.grades || []).forEach(function(g, idx) {
                if (g !== null && g !== undefined && g !== '') weeks[idx + 1] = true;
            });
        });
        if (WEEK_DATES[course]) Object.keys(WEEK_DATES[course]).forEach(function(w) { weeks[w] = true; });
        return {
            students: list.length, p: p, t: t, f: f, marks: marks,
            attPct: marks ? Math.round((score / marks) * 100) : null,
            avg: n ? (sum / n).toFixed(1) : null,
            weeksDone: Object.keys(weeks).length
        };
    }

    function renderDashboard() {
        if (!document.getElementById('dashStats')) return;
        var courses = Object.keys(STUDENTS);
        var tot = { students: 0, p: 0, t: 0, f: 0, marks: 0, score: 0, sum: 0, n: 0, prog: 0 };
        var perCourse = courses.map(function(c) {
            var s = dashCourseStats(c);
            tot.students += s.students; tot.p += s.p; tot.t += s.t; tot.f += s.f;
            tot.marks += s.marks; tot.prog += s.weeksDone / WEEK_COUNT;
            if (s.avg !== null) { tot.sum += Number(s.avg) * s.students; tot.n += s.students; }
            return { id: c, title: getCourseTitle(c), s: s };
        });
        var globalAtt = tot.marks ? Math.round(((tot.p + tot.t * 0.5) / tot.marks) * 100) : null;
        var globalAvg = tot.n ? (tot.sum / tot.n).toFixed(1) : null;
        var globalProg = Math.round((tot.prog / courses.length) * 100);

        document.getElementById('dashStats').innerHTML =
            statCard('👥', tot.students, 'Estudiantes') +
            statCard('✅', globalAtt === null ? '—' : globalAtt + '%', 'Asistencia global') +
            statCard('📈', globalAvg === null ? '—' : globalAvg, 'Promedio general') +
            statCard('🚀', globalProg + '%', 'Avance 17 sem.');

        document.getElementById('chartAvg').innerHTML = perCourse.map(function(c) {
            var pct = c.s.avg === null ? 0 : Math.round((Number(c.s.avg) / 20) * 100);
            return '<div class="bar-row"><div class="bar-top"><span>' + c.title + '</span><span>' + (c.s.avg === null ? 'Sin notas' : c.s.avg + ' / 20') + '</span></div>' +
                '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%"></div></div></div>';
        }).join('');

        var donut = document.getElementById('donutChart');
        if (donut) {
            if (!tot.marks) {
                donut.style.background = 'var(--border-light)';
                document.getElementById('donutLabel').textContent = '—';
            } else {
                var pp = (tot.p / tot.marks) * 100, tt = (tot.t / tot.marks) * 100;
                donut.style.background = 'conic-gradient(var(--success) 0 ' + pp + '%, var(--warning) ' + pp + '% ' + (pp + tt) + '%, var(--danger) ' + (pp + tt) + '% 100%)';
                document.getElementById('donutLabel').textContent = globalAtt + '%';
            }
        }
        document.getElementById('donutLegend').innerHTML =
            '<span><span class="dot" style="background:var(--success)"></span>Presentes: ' + tot.p + '</span>' +
            '<span><span class="dot" style="background:var(--warning)"></span>Tardanzas: ' + tot.t + '</span>' +
            '<span><span class="dot" style="background:var(--danger)"></span>Faltas: ' + tot.f + '</span>';

        var weekBars = '';
        for (var w = 1; w <= WEEK_COUNT; w++) {
            var wm = 0, ws = 0;
            courses.forEach(function(c) {
                (STUDENTS[c] || []).forEach(function(st) {
                    var v = st.attendance ? st.attendance[w] : undefined;
                    if (v === 'P') { wm++; ws += 1; }
                    else if (v === 'T') { wm++; ws += 0.5; }
                    else if (v === 'F') { wm++; }
                });
            });
            var wpct = wm ? Math.round((ws / wm) * 100) : 0;
            weekBars += '<div class="week-bar" title="S' + w + ': ' + (wm ? wpct + '%' : 'sin registro') + '">' +
                '<div class="week-col' + (wm ? '' : ' empty') + '" style="height:' + (wm ? Math.max(wpct, 4) : 4) + '%"></div><span>S' + w + '</span></div>';
        }
        document.getElementById('chartWeeks').innerHTML = weekBars;

        document.getElementById('chartProgress').innerHTML = perCourse.map(function(c) {
            var pct = Math.round((c.s.weeksDone / WEEK_COUNT) * 100);
            return '<div class="bar-row"><div class="bar-top"><span>' + c.title + '</span><span>' + c.s.weeksDone + '/' + WEEK_COUNT + ' sem. · ' + pct + '%</span></div>' +
                '<div class="bar-track"><div class="bar-fill orange" style="width:' + pct + '%"></div></div></div>';
        }).join('');

        var riskItems = [];
        courses.forEach(function(c) {
            (STUDENTS[c] || []).forEach(function(st) {
                var rk = riskInfo(st);
                if (rk.risk) riskItems.push({ course: getCourseTitle(c), name: st.name, code: st.code, rk: rk });
            });
        });
        riskItems.sort(function(a, b) { return a.name.localeCompare(b.name, 'es'); });
        document.getElementById('riskList').innerHTML = riskItems.length === 0
            ? '<div class="risk-ok">🎉 Sin alumnos en riesgo. Promedios ≥ ' + RISK_AVG + ' y asistencia ≥ ' + RISK_ATT + '%.</div>'
            : riskItems.map(function(r) {
                return '<div class="risk-item"><div><strong>' + r.name + '</strong><small>' + r.course + ' · ' + (r.code || 's/c') + '</small></div>' +
                    '<div class="risk-reasons">' + r.rk.reasons.map(function(x) { return '<span class="risk-badge">' + x + '</span>'; }).join('') + '</div></div>';
            }).join('');
    }

    function statCard(icon, num, lbl) {
        return '<div class="dash-stat"><div class="num">' + icon + ' ' + num + '</div><div class="lbl">' + lbl + '</div></div>';
    }

    function saveSchedule() {
        try { localStorage.setItem('portfolio_schedule', JSON.stringify({ data: SCHEDULE, nextId: NEXT_SCH_ID })); } catch(e) {}
        queueStateSync();
    }

    function loadSchedule() {
        try {
            var raw = localStorage.getItem('portfolio_schedule');
            if (!raw) return;
            var parsed = JSON.parse(raw);
            if (parsed && parsed.data) {
                SCHEDULE = parsed.data;
                if (parsed.nextId) NEXT_SCH_ID = parsed.nextId;
            }
        } catch(e) {}
    }

    function renderSchedule() {
        var grid = document.getElementById('scheduleGrid');
        if (!grid) return;
        var sel = document.getElementById('schCourse');
        if (sel && sel.options.length === 0) {
            sel.innerHTML = COURSES.map(function(c) { return '<option value="' + c.id + '">' + c.title + '</option>'; }).join('');
        }
        grid.innerHTML = DAYS.map(function(day) {
            var items = SCHEDULE.filter(function(s) { return s.day === day; })
                .sort(function(a, b) { return a.start.localeCompare(b.start); });
            var blocks = items.length ? items.map(function(s) {
                var c = COURSES.find(function(x) { return x.id === s.course; });
                var del = isStudent() ? '' : '<button class="sch-delete" title="Eliminar" onclick="App.deleteSchedule(' + s.id + ')">×</button>';
                return '<div class="sch-block">' + del +
                    '<div class="sch-time">🕐 ' + s.start + ' – ' + s.end + '</div>' +
                    '<div class="sch-course">' + (c ? c.title : s.course) + '</div>' +
                    '<div class="sch-room">📍 ' + (s.room || '—') + '</div></div>';
            }).join('') : '<div class="sch-empty">—</div>';
            return '<div class="sch-day"><div class="sch-day-header">' + day + '</div>' + blocks + '</div>';
        }).join('');
    }

    function addSchedule() {
        var course = document.getElementById('schCourse')?.value;
        var day = document.getElementById('schDay')?.value;
        var start = document.getElementById('schStart')?.value;
        var end = document.getElementById('schEnd')?.value;
        var room = document.getElementById('schRoom')?.value.trim() || '';
        if (!course || !day || !start || !end) { showToast('error', 'Completa asignatura, día y horas.'); return; }
        if (end <= start) { showToast('error', 'La hora de fin debe ser mayor que la de inicio.'); return; }
        SCHEDULE.push({ id: NEXT_SCH_ID++, course: course, day: day, start: start, end: end, room: room });
        saveSchedule();
        renderSchedule();
        showToast('success', '✅ Clase añadida al horario.');
        var roomInput = document.getElementById('schRoom');
        if (roomInput) roomInput.value = '';
    }

    function deleteSchedule(id) {
        var index = SCHEDULE.findIndex(function(s) { return s.id === id; });
        if (index === -1) return;
        SCHEDULE.splice(index, 1);
        saveSchedule();
        renderSchedule();
        showToast('warning', '🗑️ Clase eliminada del horario.');
    }

    function exportBackup() {
        var data = {
            app: 'portafolio-iestp-recuay', version: 1, date: new Date().toISOString(),
            STUDENTS: STUDENTS, WEEK_DATES: WEEK_DATES, NEXT_STU_ID: NEXT_STU_ID,
            COURSES: COURSES, MATERIALS: MATERIALS, NEXT_MAT_ID: NEXT_MAT_ID,
            SESSIONS: SESSIONS, PROJECTS: PROJECTS,
            SCHEDULE: SCHEDULE, NEXT_SCH_ID: NEXT_SCH_ID,
            ANNOUNCEMENTS: ANNOUNCEMENTS, NEXT_ANN_ID: NEXT_ANN_ID
        };
        var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'respaldo_portafolio_' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a);
        a.click();
        setTimeout(function() { URL.revokeObjectURL(a.href); a.remove(); }, 500);
        showToast('success', '💾 Respaldo descargado correctamente.');
    }

    function importBackup(input) {
        var f = input.files ? input.files[0] : null;
        if (!f) return;
        var reader = new FileReader();
        reader.onload = function() {
            try {
                var d = JSON.parse(reader.result);
                if (!d || !d.STUDENTS) throw new Error('invalid');
                STUDENTS = d.STUDENTS;
                WEEK_DATES = d.WEEK_DATES || WEEK_DATES;
                NEXT_STU_ID = d.NEXT_STU_ID || NEXT_STU_ID;
                if (d.COURSES) COURSES = d.COURSES;
                if (d.MATERIALS) MATERIALS = d.MATERIALS;
                if (d.NEXT_MAT_ID) NEXT_MAT_ID = d.NEXT_MAT_ID;
                if (d.SESSIONS) SESSIONS = d.SESSIONS;
                if (d.PROJECTS) PROJECTS = d.PROJECTS;
                if (d.SCHEDULE) SCHEDULE = d.SCHEDULE;
                if (d.NEXT_SCH_ID) NEXT_SCH_ID = d.NEXT_SCH_ID;
                if (d.ANNOUNCEMENTS) ANNOUNCEMENTS = d.ANNOUNCEMENTS;
                if (d.NEXT_ANN_ID) NEXT_ANN_ID = d.NEXT_ANN_ID;
                Object.keys(STUDENTS).forEach(function(course) {
                    STUDENTS[course] = STUDENTS[course].map(normalizeStudent);
                });
                saveStudents();
                saveSchedule();
                saveAnnouncements();
                renderCourses(); renderMaterials(); renderSessions(); renderStudents(); renderSchedule(); renderAnnouncements(); renderProjects();
                queueStateSync();
                showToast('success', '✅ Respaldo restaurado correctamente.');
            } catch(e) {
                showToast('error', 'Archivo de respaldo inválido.');
            }
            input.value = '';
        };
        reader.readAsText(f);
    }

    function saveAnnouncements() {
        try { localStorage.setItem('portfolio_announcements', JSON.stringify({ data: ANNOUNCEMENTS, nextId: NEXT_ANN_ID })); } catch(e) {}
        queueStateSync();
    }

    function loadAnnouncements() {
        try {
            var raw = localStorage.getItem('portfolio_announcements');
            if (!raw) return;
            var parsed = JSON.parse(raw);
            if (parsed && parsed.data) {
                ANNOUNCEMENTS = parsed.data;
                if (parsed.nextId) NEXT_ANN_ID = parsed.nextId;
            }
        } catch(e) {}
    }

    function myCourses() {
        if (!isStudent()) return Object.keys(STUDENTS);
        var set = {};
        findEnrollments(currentUser.code, currentUser.name).forEach(function(en) { set[en.course] = true; });
        return Object.keys(set);
    }

    function visibleAnnouncements() {
        var allowed = myCourses();
        return ANNOUNCEMENTS.filter(function(a) {
            return a.course === 'all' || allowed.indexOf(a.course) !== -1;
        }).sort(function(a, b) {
            if (!!b.pinned !== !!a.pinned) return b.pinned ? 1 : -1;
            return String(b.date).localeCompare(String(a.date));
        });
    }

    function renderAnnouncements() {
        var list = document.getElementById('announceList');
        if (!list) return;
        var sel = document.getElementById('annCourse');
        if (sel && sel.options.length === 0) {
            sel.innerHTML = '<option value="all">Todas las asignaturas</option>' +
                COURSES.map(function(c) { return '<option value="' + c.id + '">' + c.title + '</option>'; }).join('');
        }
        var items = visibleAnnouncements();
        if (items.length === 0) {
            list.innerHTML = '<div class="announce-empty">📌 No hay avisos publicados por el momento.</div>';
            return;
        }
        list.innerHTML = items.map(function(a) {
            var scope = a.course === 'all' ? 'Todas las asignaturas' : getCourseTitle(a.course);
            var del = isStudent() ? '' : '<button class="sch-delete ann-del" title="Eliminar" onclick="App.deleteAnnouncement(' + a.id + ')">×</button>';
            return '<article class="announce-card' + (a.pinned ? ' pinned' : '') + '">' + del +
                '<div class="announce-top"><span class="announce-icon">' + (a.pinned ? '📌' : '📢') + '</span>' +
                '<div><h4>' + a.title + '</h4><div class="announce-meta">📚 ' + scope + ' · 📅 ' + formatLongDate(a.date) + '</div></div></div>' +
                '<p>' + a.message + '</p></article>';
        }).join('');
    }

    function addAnnouncement() {
        var title = document.getElementById('annTitle')?.value.trim();
        var message = document.getElementById('annMessage')?.value.trim();
        var course = document.getElementById('annCourse')?.value || 'all';
        var pinned = document.getElementById('annPinned')?.checked || false;
        if (!title || !message) { showToast('error', 'Título y mensaje son obligatorios.'); return; }
        ANNOUNCEMENTS.push({ id: NEXT_ANN_ID++, title: title, message: message, course: course, date: new Date().toISOString().slice(0, 10), pinned: pinned });
        saveAnnouncements();
        renderAnnouncements();
        showToast('success', '📢 Aviso publicado.');
        document.getElementById('annTitle').value = '';
        document.getElementById('annMessage').value = '';
        document.getElementById('annPinned').checked = false;
    }

    function deleteAnnouncement(id) {
        var index = ANNOUNCEMENTS.findIndex(function(a) { return a.id === id; });
        if (index === -1) return;
        ANNOUNCEMENTS.splice(index, 1);
        saveAnnouncements();
        renderAnnouncements();
        showToast('warning', '🗑️ Aviso eliminado.');
    }

    function openConstancia(course) {
        if (!isStudent()) return;
        var en = findEnrollments(currentUser.code, currentUser.name).find(function(x) { return x.course === course; });
        if (!en) { showToast('error', 'No se encontró tu registro en esta asignatura.'); return; }
        var st = normalizeStudent(en.student);
        var res = studentAverage(st);
        var stats = attendanceStats(st);
        var cond = conditionOf(res.avg);
        var rows = '';
        for (var w = 1; w <= WEEK_COUNT; w++) {
            var m = (st.attendance && st.attendance[w]) || '';
            var g = (st.grades && st.grades[w - 1] !== null && st.grades[w - 1] !== undefined) ? st.grades[w - 1] : '—';
            var wd = getWeekDate(course, w);
            rows += '<tr><td>S' + w + '</td><td>' + formatLongDate(wd) + '</td><td class="cell-' + m + '">' + (ATT_TEXT[m] || '—') + '</td><td>' + g + '</td></tr>';
        }
        var body = document.getElementById('reportBody');
        if (!body) return;
        body.innerHTML = '<div class="report-header"><h3>🧾 Constancia de Notas</h3>' +
            '<p><strong>IESTP Recuay</strong> · Periodo 2026-I</p></div>' +
            '<div class="constancia-info"><div><strong>Estudiante:</strong> ' + st.name + '</div>' +
            '<div><strong>Código:</strong> ' + (st.code || '—') + '</div>' +
            '<div><strong>Asignatura:</strong> ' + getCourseTitle(course) + '</div>' +
            '<div><strong>Fecha de emisión:</strong> ' + new Date().toLocaleDateString('es-PE') + '</div></div>' +
            '<div class="matrix-wrap"><table class="report-table"><thead><tr><th>Semana</th><th>Fecha</th><th>Asistencia</th><th>Nota</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
            '<div class="report-summary"><span class="summary-chip">📈 Promedio: ' + (res.avg === null ? '—' : res.avg) + '</span>' +
            '<span class="summary-chip">✅ Asistencia: ' + (stats.pct === null ? '—' : stats.pct + '%') + '</span>' +
            '<span class="summary-chip">Condición: ' + cond.t + '</span></div>' +
            '<div class="acta-sign">_________________________<br>Firma del Docente<br><br>_________________________<br>Dirección Académica</div>';
        var tabs = document.querySelector('#reportModal .report-tabs');
        if (tabs) tabs.style.display = 'none';
        var csvBtn = document.getElementById('csvBtn');
        if (csvBtn) csvBtn.style.display = 'none';
        var m = document.getElementById('reportModal');
        if (m) m.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function renderProjects() {
        var grid = $('#projectsGrid');
        if (!grid) return;
        grid.innerHTML = PROJECTS.map(function(project) {
            return '<article class="project-card animate-fade-in-up"><div class="project-header"><div class="project-icon">' + (project.status === 'Completado' ? '🚀' : project.status === 'En Progreso' ? '⚙️' : '📝') + '</div><div class="project-info"><h4>' + project.title + '</h4><div class="project-meta"><span>' + project.status + '</span><span>👥 ' + project.members + ' miembros</span><span>⏱️ ' + project.duration + '</span></div></div></div><div class="project-body"><p>' + project.description + '</p><div class="project-tags">' + project.tags.map(function(t) { return '<span class="project-tag">' + t + '</span>'; }).join('') + '</div></div><div class="project-footer"><button class="btn btn-secondary btn-sm">📋 Ver Detalles</button><button class="btn btn-primary btn-sm">👉 Ir al Proyecto</button></div></article>';
        }).join('');
    }

    function renderTechTags() {
        var container = $('#techTags');
        if (!container) return;
        container.innerHTML = TECH_TAGS.map(function(tag) { return '<span class="tech-tag">' + tag + '</span>'; }).join('');
    }

    function downloadFile(filename, type) {
        showToast('info', 'Preparando descarga: ' + filename + '...');
        setTimeout(function() { showToast('success', '✅ Descarga de "' + filename + '" iniciada.'); }, 800);
    }

    function handleUpload(input, type) {
        var file = input.files[0];
        if (!file) return;
        var maxSizes = { silabo: 50 * 1024 * 1024, sesion: 100 * 1024 * 1024, material: 200 * 1024 * 1024 };
        var allowedTypes = { silabo: ['.pdf', '.docx', '.pptx', '.doc', '.ppt'], sesion: ['.pdf', '.docx', '.pptx', '.doc', '.ppt', '.xls', '.xlsx'], material: ['.pdf', '.docx', '.pptx', '.doc', '.ppt', '.xls', '.xlsx', '.mp4', '.mp3', '.zip'] };
        var ext = '.' + file.name.split('.').pop().toLowerCase();
        if (!allowedTypes[type] || allowedTypes[type].indexOf(ext) === -1) { showToast('error', 'Formato no permitido.'); input.value = ''; return; }
        if (file.size > maxSizes[type]) { showToast('error', 'Archivo demasiado grande.'); input.value = ''; return; }
        var nameEl = document.getElementById(type + 'FileName');
        if (nameEl) { nameEl.textContent = '✓ "' + file.name + '"'; nameEl.style.color = 'var(--success)'; }
        addUploadHistory(file.name, type);
        showToast('success', '✅ "' + file.name + '" subido correctamente.');
        input.value = '';
    }

    function addUploadHistory(filename, type) {
        var history = document.getElementById('uploadHistory');
        if (!history) return;
        var list = document.getElementById('uploadHistoryList');
        if (!list) {
            history.innerHTML = '<h5>📋 Historial de Subidas</h5><div id="uploadHistoryList"></div>';
            list = document.getElementById('uploadHistoryList');
        }
        var item = document.createElement('div');
        item.className = 'upload-history-item';
        item.innerHTML = '<span class="file-status success">Subido</span><span>' + filename + '</span><small>' + new Date().toLocaleString('es-PE') + '</small>';
        list.insertBefore(item, list.firstChild);
    }

    function showAddLinkForm() {
        var form = document.getElementById('addLinkForm');
        if (form) form.classList.toggle('hidden');
    }

    function hideAddLinkForm() {
        var form = document.getElementById('addLinkForm');
        if (form) form.classList.add('hidden');
    }

    function addWebLink() {
        var nameInput = document.getElementById('newLinkName');
        var urlInput = document.getElementById('newLinkUrl');
        var name = nameInput?.value.trim();
        var url = urlInput?.value.trim();
        if (!name || !url) { showToast('error', 'Completa nombre y URL.'); return; }
        if (!url.startsWith('http://') && !url.startsWith('https://')) { showToast('error', 'La URL debe comenzar con http:// o https://'); return; }
        var icon = url.includes('pdf') ? '📄' : url.includes('video') ? '🎬' : '🔗';
        var list = document.getElementById('linksList');
        if (!list) return;
        var newItem = document.createElement('div');
        newItem.className = 'link-item';
        newItem.innerHTML = '<span class="link-icon">' + icon + '</span><div class="link-info"><h5>' + name + '</h5><span>' + url + '</span></div><div class="link-action"><a href="' + url + '" target="_blank" class="btn btn-link btn-sm" rel="noopener noreferrer">Ir →</a></div>';
        list.insertBefore(newItem, list.firstChild);
        nameInput.value = '';
        urlInput.value = '';
        hideAddLinkForm();
        showToast('success', '✅ Enlace "' + name + '" añadido.');
    }

    function showAddCourseForm() {
        var section = document.getElementById('addCourseSection');
        if (section) section.classList.toggle('hidden');
    }

    function hideAddCourseForm() {
        var section = document.getElementById('addCourseSection');
        if (section) section.classList.add('hidden');
    }

    function addNewCourse() {
        var icon = document.getElementById('newCourseIcon')?.value || '📚';
        var code = document.getElementById('newCourseCode')?.value.trim();
        var title = document.getElementById('newCourseTitle')?.value.trim();
        var credits = parseInt(document.getElementById('newCourseCredits')?.value) || 4;
        var hours = parseInt(document.getElementById('newCourseHours')?.value) || 64;
        var weeks = parseInt(document.getElementById('newCourseWeeks')?.value) || 16;
        var desc = document.getElementById('newCourseDesc')?.value.trim();
        var topics = document.getElementById('newCourseTopics')?.value.split(',').map(function(t) { return t.trim(); }).filter(function(t) { return t; });
        if (!code || !title || !desc || topics.length === 0) { showToast('error', 'Código, nombre, descripción y temas son obligatorios.'); return; }
        var newCourse = { id: code.toLowerCase().replace(/\s+/g, '-'), icon: icon, code: code, title: title, credits: credits, hours: hours, weeks: weeks, description: desc, topics: topics, materials: [] };
        COURSES.push(newCourse);
        hideAddCourseForm();
        renderCourses();
        showToast('success', '✅ Curso "' + title + '" añadido.');
        var codeInput = document.getElementById('newCourseCode');
        var titleInput = document.getElementById('newCourseTitle');
        var descInput = document.getElementById('newCourseDesc');
        var topicsInput = document.getElementById('newCourseTopics');
        if (codeInput) codeInput.value = '';
        if (titleInput) titleInput.value = '';
        if (descInput) descInput.value = '';
        if (topicsInput) topicsInput.value = '';
    }

    function openEditCourse(id) {
        var course = COURSES.find(function(c) { return c.id === id; });
        if (!course) return;
        closeModal('editModal');
        var modal = document.createElement('div');
        modal.id = 'editModal';
        modal.className = 'edit-modal';
        modal.innerHTML = '<div class="edit-modal-content"><div class="edit-modal-header"><h3>✏️ Editar Curso</h3><p>Modifica los datos del curso</p></div><div class="edit-modal-body"><form id="editCourseForm"><div class="form-group"><label for="editCourseIcon">Icono</label><select id="editCourseIcon"><option value="📚"' + (course.icon === '📚' ? ' selected' : '') + '>📚 Curso General</option><option value="🧮"' + (course.icon === '🧮' ? ' selected' : '') + '>🧮 Algoritmos</option><option value="🌐"' + (course.icon === '🌐' ? ' selected' : '') + '>🌐 Aplicaciones Web</option><option value="🏗️"' + (course.icon === '🏗️' ? ' selected' : '') + '>🏗️ Arquitectura</option><option value="⚙️"' + (course.icon === '⚙️' ? ' selected' : '') + '>⚙️ DevOps</option><option value="🔒"' + (course.icon === '🔒' ? ' selected' : '') + '>🔒 Seguridad</option></select></div><div class="form-group"><label for="editCourseCode">Código</label><input type="text" id="editCourseCode" value="' + course.code + '" required maxlength="20"></div><div class="form-group"><label for="editCourseTitle">Nombre del Curso</label><input type="text" id="editCourseTitle" value="' + course.title + '" required maxlength="100"></div><div class="form-group"><label for="editCourseCredits">Créditos</label><input type="number" id="editCourseCredits" value="' + course.credits + '" min="1" max="10" required></div><div class="form-group"><label for="editCourseHours">Horas</label><input type="number" id="editCourseHours" value="' + course.hours + '" min="1" max="200" required></div><div class="form-group"><label for="editCourseWeeks">Semanas</label><input type="number" id="editCourseWeeks" value="' + course.weeks + '" min="1" max="30" required></div><div class="form-group"><label for="editCourseDesc">Descripción</label><textarea id="editCourseDesc" required>' + course.description + '</textarea></div><div class="form-group"><label for="editCourseTopics">Temas (separados por coma)</label><input type="text" id="editCourseTopics" value="' + course.topics.join(', ') + '" required></div></form></div><div class="edit-modal-footer"><button class="btn btn-secondary" onclick="closeModal(\'editModal\')">Cancelar</button><button class="btn btn-primary" onclick="App.saveEditCourse(\'' + id + '\')">💾 Guardar Cambios</button></div></div>';
        document.body.appendChild(modal);
        requestAnimationFrame(function() { modal.classList.add('active'); });
        modal.addEventListener('click', function(e) { if (e.target === modal) closeModal('editModal'); });
    }

    function saveEditCourse(id) {
        var icon = document.getElementById('editCourseIcon')?.value;
        var code = document.getElementById('editCourseCode')?.value.trim();
        var title = document.getElementById('editCourseTitle')?.value.trim();
        var credits = parseInt(document.getElementById('editCourseCredits')?.value);
        var hours = parseInt(document.getElementById('editCourseHours')?.value);
        var weeks = parseInt(document.getElementById('editCourseWeeks')?.value);
        var desc = document.getElementById('editCourseDesc')?.value.trim();
        var topics = document.getElementById('editCourseTopics')?.value.split(',').map(function(t) { return t.trim(); }).filter(function(t) { return t; });
        if (!code || !title || !desc || topics.length === 0 || !credits || !hours || !weeks) { showToast('error', 'Todos los campos son obligatorios.'); return; }
        var course = COURSES.find(function(c) { return c.id === id; });
        if (course) { course.icon = icon; course.code = code; course.title = title; course.credits = credits; course.hours = hours; course.weeks = weeks; course.description = desc; course.topics = topics; }
        closeModal('editModal');
        renderCourses();
        showToast('success', '✅ Curso actualizado.');
    }

    function openDeleteCourse(id) {
        var course = COURSES.find(function(c) { return c.id === id; });
        if (!course) return;
        closeModal('deleteModal');
        var modal = document.createElement('div');
        modal.id = 'deleteModal';
        modal.className = 'delete-confirm';
        modal.innerHTML = '<div class="delete-confirm-content"><div class="delete-confirm-icon">⚠️</div><div class="delete-confirm-body"><h3>¿Eliminar Curso "' + course.title + '"?</h3><p>Se eliminará el curso ' + course.code + ' y todo su contenido.</p><div class="action-buttons"><button class="btn btn-delete-course" onclick="App.confirmDeleteCourse(\'' + id + '\')">Sí, Eliminar</button><button class="btn btn-secondary" onclick="closeModal(\'deleteModal\')">Cancelar</button></div></div></div>';
        document.body.appendChild(modal);
        requestAnimationFrame(function() { modal.classList.add('active'); });
        modal.addEventListener('click', function(e) { if (e.target === modal) closeModal('deleteModal'); });
    }

    function confirmDeleteCourse(id) {
        var index = COURSES.findIndex(function(c) { return c.id === id; });
        if (index === -1) return;
        COURSES.splice(index, 1);
        closeModal('deleteModal');
        renderCourses();
        showToast('warning', '🗑️ Curso eliminado.');
    }

    function setupContactForm() {
        var form = $('#contactForm');
        if (!form) return;
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('contactName').value.trim();
            var email = document.getElementById('contactEmail').value.trim();
            var subject = document.getElementById('contactSubject').value;
            var message = document.getElementById('contactMessage').value.trim();
            if (!name || !email || !subject || !message) { showToast('error', 'Completa todos los campos.'); return; }
            showToast('success', '¡Gracias ' + name + '! Mensaje enviado.');
            form.reset();
        });
    }

    function setupScrollAnimations() {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) { if (entry.isIntersecting) { entry.target.classList.add('animate-fade-in-up'); } });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        $$('.course-card, .material-card, .project-card, .session-card, .about-card, .dash-card, .dash-stat').forEach(function(el) { observer.observe(el); });
    }

    function setupModalClose() {
        var closeBtn = document.getElementById('closeCourseModal');
        if (closeBtn) closeBtn.addEventListener('click', function() { closeModal('courseModal'); });
        var courseModal = $('#courseModal');
        if (courseModal) courseModal.addEventListener('click', function(e) { if (e.target === courseModal) closeModal('courseModal'); });
    }

    function setupSmoothScroll() {
        $$('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    // ---------- Sincronización con backend (Opción A) ----------
    function buildFullState() {
        return {
            COURSES: COURSES, MATERIALS: MATERIALS, NEXT_MAT_ID: NEXT_MAT_ID,
            SESSIONS: SESSIONS, STUDENTS: STUDENTS, WEEK_DATES: WEEK_DATES, NEXT_STU_ID: NEXT_STU_ID,
            PROJECTS: PROJECTS, SCHEDULE: SCHEDULE, NEXT_SCH_ID: NEXT_SCH_ID,
            ANNOUNCEMENTS: ANNOUNCEMENTS, NEXT_ANN_ID: NEXT_ANN_ID
        };
    }

    function applyFullState(s) {
        if (!s) return;
        if (s.COURSES) COURSES = s.COURSES;
        if (s.MATERIALS) MATERIALS = s.MATERIALS;
        if (s.NEXT_MAT_ID) NEXT_MAT_ID = s.NEXT_MAT_ID;
        if (s.SESSIONS) SESSIONS = s.SESSIONS;
        if (s.STUDENTS) STUDENTS = s.STUDENTS;
        if (s.WEEK_DATES) WEEK_DATES = s.WEEK_DATES;
        if (s.NEXT_STU_ID) NEXT_STU_ID = s.NEXT_STU_ID;
        if (s.PROJECTS) PROJECTS = s.PROJECTS;
        if (s.SCHEDULE) SCHEDULE = s.SCHEDULE;
        if (s.NEXT_SCH_ID) NEXT_SCH_ID = s.NEXT_SCH_ID;
        if (s.ANNOUNCEMENTS) ANNOUNCEMENTS = s.ANNOUNCEMENTS;
        if (s.NEXT_ANN_ID) NEXT_ANN_ID = s.NEXT_ANN_ID;
        Object.keys(STUDENTS).forEach(function(course) {
            if (Array.isArray(STUDENTS[course])) STUDENTS[course] = STUDENTS[course].map(normalizeStudent);
        });
    }

    var syncTimer = null;
    function queueStateSync() {
        if (!window.ApiClient || !ApiClient.useApi()) return;
        if (isStudent() || !currentUser) return;
        clearTimeout(syncTimer);
        syncTimer = setTimeout(async function() {
            try {
                await ApiClient.saveState(buildFullState());
            } catch (e) {
                if (e && e.code === 401) forceLogout('Sesión expirada. Ingresa de nuevo.');
                else showToast('error', 'No se pudo sincronizar con el servidor.');
            }
        }, 600);
    }

    async function loadState() {
        if (window.ApiClient && ApiClient.useApi()) {
            const s = await ApiClient.loadState();
            applyFullState(s);
            return;
        }
        loadStudents(); loadSchedule(); loadAnnouncements();
    }

    function forceLogout(msg) {
        try { sessionStorage.removeItem('portfolio_user'); } catch(e) {}
        if (window.ApiClient) ApiClient.setToken(null);
        currentUser = null;
        document.body.classList.remove('student-mode');
        applyRoleUI();
        var mainContent = $('#mainContent');
        var loginModal = $('#loginModal');
        if (mainContent) mainContent.classList.add('hidden');
        if (loginModal) loginModal.classList.add('active');
        if (msg) showToast('error', msg);
    }

    window.App = {
        init: async function() {
            setupLogin(); setupLogout(); setupNavigation(); setupMobileMenu(); setupFilters(); setupStudentFilters(); setupContactForm(); setupReport();
            try {
                await loadState();
            } catch (e) {
                if (e && e.code === 401) {
                    forceLogout('Sesión expirada. Ingresa de nuevo.');
                } else {
                    if (window.ApiClient && ApiClient.useApi()) showToast('error', 'Servidor no disponible. Verifica tu conexión.');
                    loadStudents(); loadSchedule(); loadAnnouncements();
                }
            }
            checkSession();
            renderCourses(); renderMaterials(); renderSessions(); renderStudents(); renderSchedule(); renderAnnouncements(); renderProjects(); renderTechTags(); setupScrollAnimations(); setupModalClose(); setupSmoothScroll();
        },
        showCourseDetails: showCourseDetails,
        navigateToSection: navigateToSection,
        filterMaterials: filterMaterials,
        filterSessions: filterSessions,
        downloadFile: downloadFile,
        handleUpload: handleUpload,
        showToast: showToast,
        showAddLinkForm: showAddLinkForm,
        hideAddLinkForm: hideAddLinkForm,
        addWebLink: addWebLink,
        showAddCourseForm: showAddCourseForm,
        hideAddCourseForm: hideAddCourseForm,
        addNewCourse: addNewCourse,
        openEditCourse: openEditCourse,
        saveEditCourse: saveEditCourse,
        openDeleteCourse: openDeleteCourse,
        confirmDeleteCourse: confirmDeleteCourse,
        openEditSession: openEditSession,
        saveEditSession: saveEditSession,
        handleEditFileUpload: handleEditFileUpload,
        openDeleteSession: openDeleteSession,
        confirmDeleteSession: confirmDeleteSession,
        showUploadNewSession: showUploadNewSession,
        openEditMaterial: openEditMaterial,
        saveEditMaterial: saveEditMaterial,
        openDeleteMaterial: openDeleteMaterial,
        confirmDeleteMaterial: confirmDeleteMaterial,
        showAddMaterialForm: showAddMaterialForm,
        hideAddMaterialForm: hideAddMaterialForm,
        addNewMaterial: addNewMaterial,
        setStudentCourse: setStudentCourse,
        setWeekDate: setWeekDate,
        addNewStudent: addNewStudent,
        clearStudentForm: clearStudentForm,
        markAttendance: markAttendance,
        setGrade: setGrade,
        deleteStudent: deleteStudent,
        copyPass: copyPass,
        regenPass: regenPass,
        openEditStudent: openEditStudent,
        saveEditStudent: saveEditStudent,
        markAllPresent: markAllPresent,
        addSchedule: addSchedule,
        deleteSchedule: deleteSchedule,
        exportBackup: exportBackup,
        importBackup: importBackup,
        addAnnouncement: addAnnouncement,
        deleteAnnouncement: deleteAnnouncement,
        openConstancia: openConstancia,
        openReport: openReport,
        closeReport: closeReport,
        switchReportTab: switchReportTab,
        printReport: printReport,
        downloadReportCSV: downloadReportCSV
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { window.App.init(); });
    } else {
        window.App.init();
    }
})();