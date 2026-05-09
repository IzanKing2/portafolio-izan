// Inicializamos los iconos de Lucide (hace que las etiquetas <i data-lucide="..."> se conviertan en SVG reales)
lucide.createIcons();

/* ==========================================================================
   1. MODO CLARO / OSCURO (THEME TOGGLE)
   ========================================================================== */
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
// Guardamos el elemento <html> para cambiarle el atributo data-theme
const htmlElement = document.documentElement; 

// Comprobamos si el usuario ya tenía una preferencia guardada de antes
const savedTheme = localStorage.getItem('theme');

// Si hay un tema guardado, lo aplicamos. Si no, dejamos el que está por defecto en el HTML (dark)
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    actualizarIcono(savedTheme);
}

// Escuchamos el evento de clic en el botón
themeBtn.addEventListener('click', () => {
    // Obtenemos el tema actual
    const currentTheme = htmlElement.getAttribute('data-theme');
    // Si es dark, cambiamos a light, y viceversa
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Aplicamos el nuevo tema al HTML
    htmlElement.setAttribute('data-theme', newTheme);
    // Guardamos la decisión en localStorage para la próxima vez
    localStorage.setItem('theme', newTheme);
    
    // Cambiamos el icono (sol o luna)
    actualizarIcono(newTheme);
});

// Función auxiliar para cambiar el icono dependiendo del tema
function actualizarIcono(theme) {
    if (theme === 'dark') {
        // En modo oscuro mostramos un sol (para que el usuario sepa que puede ir al claro)
        themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        // En modo claro mostramos una luna
        themeIcon.setAttribute('data-lucide', 'moon');
    }
    // Volvemos a renderizar el icono
    lucide.createIcons();
}

/* ==========================================================================
   2. ANIMACIONES AL HACER SCROLL (INTERSECTION OBSERVER)
   ========================================================================== */
// Seleccionamos todos los elementos que queremos animar
const fadeElements = document.querySelectorAll('.fade-in');

// Creamos el "Observador". Este vigila si un elemento entra en la pantalla
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Si el elemento está visible en la pantalla (isIntersecting)
        if (entry.isIntersecting) {
            // Le añadimos la clase 'visible' que activa la animación CSS
            entry.target.classList.add('visible');
            // Dejamos de observarlo para que la animación solo ocurra la primera vez
            observer.unobserve(entry.target);
        }
    });
}, {
    // El elemento debe estar un 10% visible antes de que salte la animación
    threshold: 0.1 
});

// Le decimos al observador que vigile cada uno de los elementos
fadeElements.forEach(element => {
    observer.observe(element);
});

/* ==========================================================================
   3. FILTRADO DE PROYECTOS
   ========================================================================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// A cada botón de filtro le añadimos un evento de clic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 1. Quitar la clase 'active' de todos los botones
        filterBtns.forEach(b => b.classList.remove('active'));
        // 2. Añadir la clase 'active' solo al botón clickeado
        btn.classList.add('active');

        // 3. Saber qué filtro hemos seleccionado (ej: 'all', 'frontend', 'backend')
        const filterValue = btn.getAttribute('data-filter');

        // 4. Recorrer todas las tarjetas de proyectos
        projectCards.forEach(card => {
            // Saber a qué categoría pertenece esta tarjeta
            const category = card.getAttribute('data-category');

            // Si el filtro es 'all' o si la categoría de la tarjeta coincide con el filtro
            if (filterValue === 'all' || filterValue === category) {
                // Mostramos la tarjeta (la devolvemos a block)
                card.style.display = 'block';
                // Añadimos una pequeña animación para que no sea tan brusco
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                // Ocultamos la tarjeta
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300); // Esperamos a que termine la animación de opacidad CSS (aunque aquí es manual, 300ms es seguro)
            }
        });
    });
});
