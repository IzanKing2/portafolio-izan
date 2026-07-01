# Feature 002: Sistema Visual Global y Layout Base

## Objetivo

Establecer la base visual, la paleta de colores y el envoltorio estructural común (`MainLayout.astro`) para garantizar consistencia estética, diseño responsive intuitivo y accesibilidad semántica.

## Plan de Acción

1. Configurar la paleta de colores (tema oscuro tecnológico con acentos profesionales como azul, amarillo, esmeralda o violeta) en `tailwind.config.mjs`.
2. Crear el archivo `src/styles/global.css` e importar las directivas de Tailwind.
3. Desarrollar `src/layouts/MainLayout.astro` con soporte para inyección de metadatos SEO en el `<head>`.
4. Implementar los componentes estructurales globales: `Navbar.astro` y `Footer.astro` dentro de `src/components/layout/`.
5. Crear componentes atómicos reutilizables en `src/components/ui/` (`Button.astro` y `Badge.astro`).

## 🛠️ Especificaciones Técnicas

- **Estructura HTML semántica obligatoria en `MainLayout`:**
  - Elementos `<header>`, `<main>` y `<footer>`.
- **Diseño Responsivo:** Enfoque _Mobile-First_. Clases de Tailwind usando prefijos de pantalla (`sm:`, `md:`, `lg:`).
- **Tipografía:** Sans-serif moderna y legible, declarada globalmente en el sistema de Tailwind.

## ✅ Criterios de Aceptación

- El diseño se adapta de forma fluida a pantallas móviles (390px), tablets y escritorios sin generar scroll horizontal (_overflow_).
- Los elementos interactivos (`Navbar`, enlaces) cuentan con estados `:hover` y `:focus` claramente visibles y accesibles por teclado.
