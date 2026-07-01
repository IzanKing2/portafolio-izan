# Feature 005: Galería de Proyectos y Enlaces

## Objetivo
Crear una estructura limpia y accesible para que los reclutadores visualicen tus proyectos de desarrollo, consumiendo los datos directamente desde la Content Collection correspondiente.

## Plan de Acción
1. Crear la página `src/pages/projects/index.astro`.
2. Consumir la colección estática de `projects` filtrando o destacando los proyectos principales en base al campo `featured`.
3. Diseñar un componente reutilizable de tarjeta (`ProjectCard.astro`) en `src/components/ui/`.
4. Mapear la colección para renderizar dinámicamente las tarjetas en un grid responsivo.

## 🛠️ Especificaciones Técnicas
* **Componente `ProjectCard`:** Debe mostrar el título, una descripción corta del problema resuelto, badges con las tecnologías usadas y enlaces de redirección externos (GitHub / Demo en vivo).
* **Accesibilidad:** Uso de etiquetas descriptivas e imágenes con atributos `alt` contextuales correctos.

## ✅ Criterios de Aceptación
* La página carga los proyectos de forma 100% estática en el build.
* Todos los enlaces se pueden navegar perfectamente mediante el teclado (`Tab`) y son legibles para lectores de pantalla.