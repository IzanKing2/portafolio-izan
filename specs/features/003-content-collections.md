# Feature 003: Arquitectura de Datos de Contenido (Content Collections)

## 🎯 Objetivo

Centralizar e independizar los datos que componen el portafolio (Proyectos, Experiencia y Formación) utilizando las Content Collections nativas de Astro y la validación de tipados con Zod, asegurando que no se usen datos inventados.

## 🗺️ Plan de Acción

1. Crear el archivo de configuración `src/content/config.ts`.
2. Definir mediante `zod` los esquemas estrictos de validación para tres colecciones: `experience`, `education` y `projects`.
3. Crear las carpetas físicas correspondientes en `src/content/`.
4. Rellenar los primeros archivos Markdown/MDX con datos reales: **ServiByte (beca Cataliza)** en experiencia y **CIFP Villa de Agüimes (DAW)** en educación.

## 🛠️ Especificaciones Técnicas

- **Esquema de `experience` (Zod):**
  - `company` (string), `role` (string), `startDate` (string), `endDate` (string/optional), `current` (boolean), `description` (array de strings).
- **Esquema de `education` (Zod):**
  - `institution` (string), `degree` (string), `status` (string), `highlights` (array de strings).
- **Esquema de `projects` (Zod):**
  - `title` (string), `description` (string), `tags` (array de strings), `githubUrl` (string/optional), `liveUrl` (string/optional), `featured` (boolean).

## ✅ Criterios de Aceptación

- El proyecto compila con éxito y el comando `npm run typecheck` valida que los esquemas de Zod coinciden con los archivos `.md/.mdx`.
- No se permiten campos vacíos o sin tipar (`any`) en las colecciones.
