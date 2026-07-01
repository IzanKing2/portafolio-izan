# Constitution.md - El Corazón del Proyecto

## 1. Misión
El objetivo de este proyecto es construir un portafolio web personal, moderno, ultra rápido y accesible para **Izan**, un desarrollador web de 22 años recién titulado en el CIFP Villa de Agüimes (DAW) y actualmente trabajando en ServiByte mediante la beca Cataliza. 

Este sitio no es solo una carta de presentación para empresas y clientes; es un **ejemplo real y funcional de la metodología Spec-Driven Development (SDD)**. Demuestra la capacidad del desarrollador para trabajar bajo especificaciones estrictas, controlar la calidad del código y colaborar de manera eficiente con agentes de IA de última generación.

---

## 2. Roadmap de Desarrollo

Para avanzar de forma ordenada y sin código improvisado, el desarrollo se dividirá en las siguientes fases:

*   **Fase 1: Configuración e Infraestructura Base**
    *   Inicialización de Astro + TypeScript + Tailwind CSS[cite: 1].
    *   Configuración de linters y formateadores (ESLint, Prettier)[cite: 1].
    *   Estructuración del sistema de carpetas según el `AGENT.md`[cite: 1].
*   **Fase 2: Diseño del Sistema Visual (Design System)**
    *   Definición de paleta de colores, tipografías y componentes atómicos UI (botones, badges, tarjetas)[cite: 1].
*   **Fase 3: Core de la Página Principal (Home)**
    *   Implementación de las secciones principales: Hero, Sobre Mí, Tecnologías[cite: 1].
*   **Fase 4: Content Collections (Datos Dinámicos Estáticos)**
    *   Creación de esquemas Zod e integración de Markdown/MDX para las secciones de Experiencia (ServiByte), Formación (Villa de Agüimes) y Proyectos[cite: 1].
*   **Fase 5: Página de Proyectos y Contacto**
    *   Desarrollo de la vista detallada de proyectos y el formulario de contacto accesible[cite: 1].
*   **Fase 6: SEO, Accesibilidad y Optimización**
    *   Auditoría de rendimiento (Lighthouse), etiquetas Open Graph y navegación por teclado[cite: 1].
*   **Fase 7: Despliegue**
    *   Configuración del pipeline de CI/CD en Vercel o Netlify[cite: 1].

---

## 🛠️ 3. Stack Tecnológico Exhaustivo

*   **Core:** Astro (generación estática optimizada)[cite: 1].
*   **Lenguaje:** TypeScript (tipado estricto, prohibido el uso de `any`)[cite: 1].
*   **Estilos:** Tailwind CSS (diseño responsivo enfocado en *Mobile-First*)[cite: 1].
*   **Manejo de Contenido:** Astro Content Collections + MDX (para inyectar componentes en textos si fuera necesario)[cite: 1].
*   **Calidad de Código:** ESLint, Prettier, TypeScript `typecheck`[cite: 1].
*   **Validación de Datos:** Zod (para validar de forma estricta los campos de los archivos Markdown de proyectos y experiencia)[cite: 1].
*   **Control de Versiones:** Git & GitHub (ramas descriptivas y commits semánticos: `feat:`, `fix:`, `style:`)[cite: 1].