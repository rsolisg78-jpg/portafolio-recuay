'use strict';

// Datos iniciales: espejo de los seeds del frontend (js/app.js).
// Las claves de estudiantes demo se generan aquí y se muestran una sola vez
// en consola + seed-passwords.json (el docente las distribuye).

function genPass() {
    const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    let s = '';
    for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
}

function buildSeed() {
    const passwords = [];
    const mkStudent = (id, name, code, grades) => {
        const pass = genPass();
        passwords.push({ code, name, pass });
        return { id, name, code, pass, grades, attendance: {} };
    };

    const state = {
        COURSES: [
            { id: 'algoritmos', icon: '🧮', code: 'APSTI-101', title: 'Algoritmos y Estructuras de Datos', credits: 4, hours: 64, weeks: 16, description: 'Fundamentos de lógica de programación, algoritmos, estructuras de datos lineales y no lineales. Uso de PSeInt y Python para implementación.', topics: ['Variables, tipos de datos, operadores', 'Estructuras condicionales y repetitivas', 'Arreglos, matrices, listas, pilas, colas', 'Algoritmos de búsqueda y ordenamiento', 'Recursividad y programación dinámica'], materials: [] },
            { id: 'aplicaciones-web', icon: '🌐', code: 'APSTI-201', title: 'Aplicaciones Web', credits: 5, hours: 80, weeks: 16, description: 'Desarrollo fullstack de aplicaciones web modernas. Frontend con HTML5, CSS3, JavaScript ES6+, React. Backend con Node.js, Express, bases de datos.', topics: ['HTML5 semántico, CSS3, Flexbox, Grid', 'JavaScript moderno, DOM, Fetch API', 'React: Componentes, Hooks, Router, State', 'Node.js, Express, REST APIs, JWT', 'Bases de datos: PostgreSQL, MongoDB', 'Despliegue: Docker, CI/CD, Cloud'], materials: [] },
            { id: 'arquitectura', icon: '🏗️', code: 'APSTI-301', title: 'Arquitectura de Plataformas y Servicios', credits: 4, hours: 64, weeks: 16, description: 'Principios de arquitectura de software, patrones de diseño, microservicios, contenedores, orquestación, cloud computing y prácticas DevOps.', topics: ['Patrones de arquitectura: MVC, Clean, Hexagonal', 'Microservicios vs Monolito, Comunicación', 'Docker, Kubernetes, Service Mesh', 'Cloud: AWS/Azure/GCP, Serverless', 'CI/CD, Observabilidad, SRE', 'Seguridad, Escalabilidad, Resiliencia'], materials: [] }
        ],
        MATERIALS: [
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
        ],
        NEXT_MAT_ID: 13,
        SESSIONS: [
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
        ],
        STUDENTS: {
            algoritmos: [
                mkStudent(3, 'Quispe Rojas, Ana María', 'APSTI-2026-003', [15, 14]),
                mkStudent(1, 'Castillo Vega, Luis Fernando', 'APSTI-2026-001', [16, 13, 15]),
                mkStudent(2, 'Mendoza Torres, Rosa Elena', 'APSTI-2026-002', [12])
            ],
            'aplicaciones-web': [],
            arquitectura: []
        },
        NEXT_STU_ID: 4,
        WEEK_DATES: { algoritmos: {}, 'aplicaciones-web': {}, arquitectura: {} },
        PROJECTS: [
            { id: 1, title: 'Sistema de Gestión de Notas', type: 'aplicaciones-web', status: 'Completado', statusClass: 'success', description: 'Aplicación web fullstack para gestión académica de notas de estudiantes.', tags: ['React', 'Node.js', 'PostgreSQL'], members: 4, duration: '4 semanas' },
            { id: 2, title: 'Chatbot Educativo con IA', type: 'aplicaciones-web', status: 'En Progreso', statusClass: 'warning', description: 'Chatbot que responde dudas académicas usando modelos de lenguaje.', tags: ['Python', 'OpenAI API', 'React'], members: 3, duration: '6 semanas' },
            { id: 3, title: 'Dashboard de Rendimiento Académico', type: 'arquitectura', status: 'Completado', statusClass: 'success', description: 'Dashboard interactivo para visualización de métricas de aprendizaje.', tags: ['React', 'D3.js', 'Node.js'], members: 3, duration: '3 semanas' },
            { id: 4, title: 'Microservicios con Docker', type: 'arquitectura', status: 'En Progreso', statusClass: 'warning', description: 'Arquitectura de microservicios desplegada con Docker y Kubernetes.', tags: ['Docker', 'Kubernetes', 'Node.js'], members: 4, duration: '5 semanas' },
            { id: 5, title: 'Analizador Léxico en PSeInt', type: 'algoritmos', status: 'Completado', statusClass: 'success', description: 'Implementación de analizador léxico y sintáctico para el lenguaje PSeInt.', tags: ['Python', 'PSeInt', 'Compiladores'], members: 2, duration: '4 semanas' },
            { id: 6, title: 'Portafolio Docente Digital', type: 'aplicaciones-web', status: 'Planificado', statusClass: 'info', description: 'Sitio web institucional para presentación de recursos académicos.', tags: ['HTML', 'CSS', 'JavaScript'], members: 3, duration: '2 semanas' }
        ],
        SCHEDULE: [
            { id: 1, course: 'algoritmos', day: 'Lunes', start: '08:00', end: '10:00', room: 'Lab. 01' },
            { id: 2, course: 'algoritmos', day: 'Miércoles', start: '08:00', end: '10:00', room: 'Lab. 01' },
            { id: 3, course: 'aplicaciones-web', day: 'Martes', start: '10:00', end: '12:00', room: 'Lab. 02' },
            { id: 4, course: 'aplicaciones-web', day: 'Jueves', start: '10:00', end: '12:00', room: 'Lab. 02' },
            { id: 5, course: 'arquitectura', day: 'Viernes', start: '14:00', end: '16:00', room: 'Lab. 03' }
        ],
        NEXT_SCH_ID: 6,
        ANNOUNCEMENTS: [
            { id: 1, title: 'Bienvenidos al periodo 2026-I', message: 'Revisen los sílabos y materiales de cada asignatura. Las clases se desarrollan según el horario publicado.', course: 'all', date: new Date().toISOString().slice(0, 10), pinned: true }
        ],
        NEXT_ANN_ID: 2
    };

    return { state, passwords };
}

module.exports = { buildSeed };
