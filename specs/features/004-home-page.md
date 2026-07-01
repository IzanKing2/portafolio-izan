# Feature 004: Vista de la Página Principal (Home)

## Objetivo

Desarrollar la página de inicio unificada (`src/pages/index.astro`) integrando componentes de sección modulares para proyectar un perfil profesional transparente, honesto y directo.

## Plan de Acción

1. Desarrollar `src/components/sections/Hero.astro`: Texto claro sobre tu perfil (22 años, titulado en DAW, beca Cataliza en ServiByte).
2. Desarrollar `src/components/sections/AboutMe.astro`: Enfocado en adaptabilidad y capacidad de aprendizaje continuo.
3. Desarrollar `src/components/sections/SkillsGrid.astro`: Grid clasificado por categorías de tecnologías que dominas o estás aprendiendo.
4. Integrar todas las secciones dentro de `src/pages/index.astro` envueltas por el `MainLayout`.

## 🛠️ Especificaciones Técnicas

- **Componente `Hero`:** Tono profesional real. Queda estrictamente prohibido usar términos corporativos inflados o exagerados ("gurú", "experto", "senior").
- **Componente `SkillsGrid`:** Dividido en: Frontend (HTML, CSS, JS, Astro, Tailwind, TS), Backend (PHP, Laravel, Python), DB (SQL), DevOps/Entorno (Docker, Ubuntu, Git, GitHub), y Metodologías (Spec-Driven Development, IA aplicada).

## ✅ Criterios de Aceptación

- El texto se ajusta estrictamente al perfil real definido en el `AGENT.md`.
- Todas las secciones se muestran de forma armónica respetando el sistema de diseño visual responsivo.
