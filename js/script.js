lucide.createIcons();

/* ==========================================================================
   1. MODO CLARO / OSCURO
   ========================================================================== */
const themeBtn  = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlEl    = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

themeBtn.addEventListener('click', () => {
    const current  = htmlEl.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
    lucide.createIcons();
}

/* ==========================================================================
   2. ANIMACIONES AL HACER SCROLL
   ========================================================================== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ==========================================================================
   3. FILTRADO DE PROYECTOS
   ========================================================================== */
const filterBtns   = document.querySelectorAll('.filter-btn');
// Solo seleccionamos tarjetas dentro de la sección de proyectos
const projectCards = document.querySelectorAll('#proyectos .project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const show = filter === 'all' || filter === category;

            if (show) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity   = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.opacity   = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => { card.style.display = 'none'; }, 300);
            }
        });
    });
});

/* ==========================================================================
   4. MENÚ HAMBURGUESA
   ========================================================================== */
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinksList = document.querySelector('.nav-links');

function closeMenu() {
    navLinksList.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}

hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinksList.classList.toggle('open');
    hamburgerBtn.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
});

navLinksList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
    if (!hamburgerBtn.contains(e.target) && !navLinksList.contains(e.target)) {
        closeMenu();
    }
});

/* ==========================================================================
   5. FORMULARIO DE CONTACTO (Formspree)
   ========================================================================== */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqvpkpd';

async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn  = form.querySelector('[type="submit"]');
    const original = btn.innerHTML;

    btn.innerHTML = 'Enviando... <i data-lucide="loader-2"></i>';
    btn.disabled  = true;
    lucide.createIcons();

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                name:    form.querySelector('#name').value,
                email:   form.querySelector('#email').value,
                message: form.querySelector('#message').value,
            }),
        });

        if (response.ok) {
            btn.innerHTML = 'Enviado <i data-lucide="check"></i>';
            lucide.createIcons();
            setTimeout(() => {
                btn.innerHTML = original;
                btn.disabled  = false;
                lucide.createIcons();
                form.reset();
            }, 2500);
        } else {
            const data = await response.json();
            throw new Error(data?.errors?.[0]?.message || 'Error al enviar');
        }
    } catch (err) {
        btn.innerHTML = 'Error al enviar. Inténtalo de nuevo.';
        btn.disabled  = false;
        setTimeout(() => {
            btn.innerHTML = original;
            lucide.createIcons();
        }, 3000);
    }
}
