# Despliegue — Portafolio IESTP Recuay (Opción A)

Arquitectura:

```
Navegador (docente/estudiantes)
   │  https
   ▼
Azure Static Web Apps  →  frontend (carpeta portfolio/)
   │  fetch + JWT
   ▼
Railway → backend Node (carpeta backend/) + PostgreSQL
```

## 1. Subir el código a GitHub

```powershell
cd "C:\Users\LENOVO\Documents\Default Project"
git init
git add portfolio backend
git commit -m "Portafolio IESTP Recuay + API (Opción A)"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portafolio-recuay.git
git push -u origin main
```

> `.gitignore` del backend ya excluye `node_modules/`, `.env` y `seed-passwords.json`.

## 2. Backend en Railway

1. Entra a https://railway.app → **New Project → Deploy from GitHub repo** y elige el repositorio.
   - **Root Directory:** `backend` (Settings → Service → Root Directory).
   - Railway detecta Node y usa `npm start`.
2. **Añade PostgreSQL:** en el proyecto → **+ New → Database → PostgreSQL**.
3. **Variables** (pestaña Variables del servicio API):
   | Variable | Valor |
   |---|---|
   | `DATABASE_URL` | `${{Postgres.DATABASE_URL}}` |
   | `JWT_SECRET` | genera con `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
   | `TEACHER_USER` | `docente` |
   | `TEACHER_PASS` | `recuay26` (cámbiala) |
   | `FRONTEND_URL` | `*` temporal; luego el dominio de Azure |
4. Haz **Deploy**. En los logs verás el seed inicial con las **claves de los
   estudiantes demo** (guárdalas para distribuirlas una sola vez).
5. Copia el dominio público, ej: `https://portafolio-api.up.railway.app`.
   Verifica: `https://TU-DOMINIO/api/health` → `{"ok":true,...}`.

## 3. Conectar el frontend

En `portfolio/js/api.js`:

```js
window.API_BASE_URL = 'https://TU-DOMINIO.up.railway.app';
```

- Con URL → **modo API** (login y datos vía backend, token JWT en sesión).
- Vacío (`''`) → **modo LOCAL** (localStorage, como antes, para desarrollo).

Haz commit + push del cambio.

## 4. Frontend en Azure Static Web Apps

Portal de Azure → **Static Web Apps → Crear**, vinculado a tu GitHub:

| Campo | Valor |
|---|---|
| App location | `/portfolio` |
| Api location | *(vacío)* |
| Output location | *(vacío)* |
| Build preset | Custom |

O por CLI:

```powershell
az group create -n rg-portafolio -l eastus
az staticwebapp create -n swa-portafolio-recuay -g rg-portafolio `
  --source https://github.com/TU-USUARIO/portafolio-recuay `
  --location eastus --branch main `
  --app-location "/portfolio" --output-location "" --login-with-github
```

1. Copia la URL del frontend (ej: `https://xxx.azurestaticapps.net`).
2. Vuelve a Railway y fija `FRONTEND_URL` con ese dominio (CORS estricto). Redeploy.

## 5. Verificación

- [ ] `GET /api/health` responde `ok:true`
- [ ] Login docente (`docente` / tu clave) carga cursos y estudiantes
- [ ] Añadir un estudiante → recargar → persiste (viene del servidor)
- [ ] Login estudiante (código + clave del seed) → ve solo su avance
- [ ] En otro navegador/dispositivo se ven los mismos datos ✅ (dato compartido)

## Notas

- Las claves de estudiantes viajan en el estado sincronizado (texto plano en la
  BD privada). Para un instituto es aceptable; si se requiere más seguridad se
  puede migrar a hash + entrega única (pedirlo como mejora).
- El respaldo JSON del frontend sigue funcionando como copia adicional.
- Pruebas locales del backend: `cd backend` → `npm install` → `node test-api.js`.
