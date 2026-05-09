<div align="center">

# Izan — Portafolio Personal

**Desarrollador Web Full-Stack**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/)
[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

[Ver Demo](https://portafolio-iz.netlify.app/) · [Descargar CV](public/Izan-CV.pdf) · [Contacto](#contacto)

</div>

---

## Vista previa

> Portafolio profesional construido con HTML, CSS y JavaScript vanilla — sin frameworks, sin dependencias innecesarias. Diseño minimalista con tema oscuro/claro, animaciones suaves y código decorativo en la hero section.

---

## Caracteristicas

- **Modo oscuro / claro** — Cambia entre temas con persistencia en `localStorage`
- **Hero con video de fondo** — Experiencia visual inmersiva con overlay y código decorativo
- **Animaciones al scroll** — Elementos que aparecen con `IntersectionObserver` al hacer scroll
- **Filtrado de proyectos** — Filtra por categoria: Frontend, Backend o Full-Stack
- **Formulario de contacto** — Envio real de mensajes via [Formspree](https://formspree.io/) con feedback visual
- **Menu hamburguesa** — Navegacion responsive para dispositivos moviles
- **Descarga de CV** — Boton para descargar el curriculum en PDF
- **Diseno responsivo** — Adaptado a movil, tablet y escritorio
- **Sin dependencias de build** — Abre `index.html` en el navegador y listo

---

## Estructura del proyecto

```
portafolio-izan/
├── index.html          # Estructura principal y secciones
├── css/
│   └── styles.css      # Estilos globales, variables CSS, componentes
├── js/
│   └── script.js       # Logica: tema, animaciones, filtros, formulario
└── public/
    ├── Izan-CV.pdf     # Curriculum vitae descargable
    └── video/
        └── hero-bg.mp4 # Video de fondo de la hero section
```

---

## Secciones

| Seccion | Descripcion |
|---|---|
| **Inicio** | Hero con video, bloque de codigo decorativo y CTA |
| **Sobre mi** | Descripcion personal y estadisticas clave |
| **Formacion** | Timeline con estudios academicos |
| **Habilidades** | Grid de tecnologias y herramientas |
| **Proyectos** | Tarjetas filtrables por categoria con links |
| **Contacto** | Formulario funcional via Formspree |

---

## Stack tecnologico

**Frontend**
- HTML5 semantico
- CSS3 con variables personalizadas y glassmorphism
- JavaScript ES6+ vanilla (sin frameworks)
- [Lucide Icons](https://lucide.dev/) para iconografia
- Google Fonts: Inter + Fira Code

**Integraciones**
- [Formspree](https://formspree.io/) — envio de formulario sin backend propio
- `IntersectionObserver` API — animaciones al scroll
- `localStorage` — persistencia del tema elegido

---

## Como ejecutarlo localmente

No necesitas instalar nada. Solo clona el repositorio y abre el archivo:

```bash
git clone https://github.com/IzanKing2/portafolio-izan.git
cd portafolio-izan
```

Luego abre `index.html` directamente en tu navegador, o usa la extension **Live Server** de VS Code para recarga automatica.

> **Nota:** El video `hero-bg.mp4` no esta incluido en el repositorio por su tamano. Coloca tu propio video en `public/video/hero-bg.mp4` o elimina el elemento `<video>` del HTML.

---

## Proyectos destacados

### E-Commerce API
Plataforma de comercio electronico con carrito de compras, autenticacion de usuarios y panel de administracion.  
`PHP` `Laravel` `MySQL` — [Ver codigo](https://github.com/IzanKing2/geekzone-ecommerce)

### AlTimon Web
Panel de control con graficos interactivos y modo oscuro, consumiendo datos de una API externa en tiempo real.  
`HTML` `Tailwind CSS` `JavaScript` — [Ver demo](https://altimon.netlify.app/)

### Portafolio Personal
Este mismo portafolio, disenado y desarrollado desde cero.  
`HTML` `CSS` `JavaScript` — [Ver codigo](https://github.com/IzanKing2/portafolio-izan)

---

## Autor

**Izan** — Desarrollador Web Full-Stack  
Estudiante de DAW en CIFP Villa de Aguimes, Espana.  
Apasionado por la automatizacion, la inteligencia artificial y la ciberseguridad.

[![GitHub](https://img.shields.io/badge/GitHub-IzanKing2-181717?style=flat-square&logo=github)](https://github.com/IzanKing2)

---

<div align="center">

&copy; 2025 Izan. Todos los derechos reservados.

</div>
