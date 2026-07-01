# Feature 007: Canales de Contacto, SEO Final y Accesibilidad

## Objetivo
Culminar el portafolio implementando los enlaces de contacto profesional definitivos y realizando los ajustes de optimización finales para el despliegue de producción.

## Plan de Acción
1. Diseñar el componente `src/components/sections/Contact.astro` con enlaces limpios a LinkedIn, GitHub y tu correo profesional (usando placeholders limpios para seguridad).
2. Completar los metadatos globales del Layout (títulos, meta-descripciones únicas por página y etiquetas Open Graph para previsualizaciones de tarjetas en redes sociales).
3. Asegurar que no hay credenciales, rutas privadas de ServiByte ni contraseñas hardcodeadas.
4. Ejecutar las pruebas finales de linters (`npm run lint`, `npm run typecheck`).

## 🛠️ Especificaciones Técnicas
* **Seguridad:** Ningún secreto en el repositorio. Si se requiere manejo dinámico en el futuro, preparar un `.env.example`.
* **SEO:** Tags indispensables: `<title>`, `<meta name="description">`, `<meta property="og:title">`, `<meta property="og:description">`.

## ✅ Criterios de Aceptación
* El portafolio pasa el build final sin un solo error de linter o compilador.
* El portafolio se encuentra listo para ser desplegado de manera directa en Vercel, Netlify o Cloudflare Pages.