import type { Locale } from '../i18n/config';
import { mergeLocalized } from '../i18n/utils';
import betweengamePreview from '../assets/betweengame-preview.png';

export type PreviewVariant = 'grid' | 'list' | 'api' | 'mobile';

export type ProjectId = 'betweengame' | 'saborsemanal' | 'geekzone' | 'hybrid-furniture' | 'notes-api';

interface ProjectBase {
  stack: string[];
  github?: string;
  destacado: boolean;
  imagen?: string;
  demo?: string;
  /** Shape of the generated preview shown on the card. */
  preview: PreviewVariant;
  /** Text rendered in the mock browser address bar. */
  addressBar: string;
}

interface ProjectTranslations {
  titulo: string;
  subtitulo: string;
  descripcion: string;
}

export interface Project extends ProjectBase, ProjectTranslations {
  id: ProjectId;
}

export const projectsBase: Record<ProjectId, ProjectBase> = {
  betweengame: {
    stack: ['React', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'PWA'],
    demo: 'https://betweengame.com',
    destacado: true,
    imagen: betweengamePreview,
    preview: 'mobile',
    addressBar: 'betweengame.com',
  },
  saborsemanal: {
    stack: ['React', 'Next.js', 'Supabase', 'PostgreSQL', 'TailwindCSS', 'PWA'],
    demo: 'https://saborsemanal.vercel.app/',
    destacado: true,
    preview: 'grid',
    addressBar: 'saborsemanal.vercel.app',
  },
  geekzone: {
    stack: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Nginx', 'JWT', 'Swagger'],
    github: 'https://github.com/IzanKing2/geekzone-ecommerce',
    destacado: false,
    preview: 'grid',
    addressBar: 'geekzone.local',
  },
  'hybrid-furniture': {
    stack: ['Laravel', 'PHP', 'MySQL', 'API REST', 'SOA Architecture'],
    github: 'https://github.com/IzanKing2/03-tienda-muebles-hibrido',
    destacado: false,
    preview: 'list',
    addressBar: 'muebles.local',
  },
  'notes-api': {
    stack: ['Java', 'Spring Boot', 'MySQL', 'JUnit', 'Mockito', 'Postman'],
    github: 'https://github.com/IzanKing2/API-Notas',
    destacado: false,
    preview: 'api',
    addressBar: 'GET /api/notes',
  },
};

/**
 * Filters shown above the project grid. A project matches a filter when any
 * of its stack items is listed in `match`; filters with no matches are hidden.
 */
export interface ProjectFilter {
  id: string;
  label: string;
  match: string[];
}

export const projectFilters: ProjectFilter[] = [
  { id: 'react', label: 'React', match: ['React', 'Next.js'] },
  { id: 'laravel', label: 'Laravel', match: ['Laravel'] },
  { id: 'java', label: 'Java', match: ['Java', 'Spring Boot'] },
];

export function matchesFilter(project: { stack: string[] }, filter: ProjectFilter): boolean {
  return project.stack.some((item) => filter.match.includes(item));
}

export const projectsI18n: Record<Locale, Record<ProjectId, ProjectTranslations>> = {
  en: {
    betweengame: {
      titulo: 'Between',
      subtitulo: 'Private game for couples — live product',
      descripcion:
        'A complete product designed, built and shipped solo: a PWA with challenges, daily and weekly missions, real-time and long-distance minigames, streaks and achievements. Privacy is structural — per-couple isolation with Row Level Security and consent enforced in the content-selection engine — backed by 800+ unit tests and 185 SQL migrations. Live with real users.',
    },
    saborsemanal: {
      titulo: 'SaborSemanal',
      subtitulo: 'Weekly meal planner',
      descripcion:
        'A PWA to plan the week of meals: recipes with allergens and portions, an automatic shopping list and offline mode. Business logic lives in transactional PostgreSQL RPCs with RLS and pgTAP tests. Built on a stack outside my formal training — spec-driven from the first line.',
    },
    geekzone: {
      titulo: 'GeekZone',
      subtitulo: 'E-commerce platform',
      descripcion:
        'Intermodular 2nd-year DAW project built by a team of three: a collectibles marketplace with catalog, cart, favorites and an admin panel, backed by a JWT REST API documented with Swagger, reCAPTCHA, and a Docker + Nginx setup.',
    },
    'hybrid-furniture': {
      titulo: 'Hybrid Furniture Store',
      subtitulo: 'Service-oriented architecture',
      descripcion:
        'Three independent Laravel services — Products API, Users API and the storefront that consumes them — designed around decoupling and independent scaling.',
    },
    'notes-api': {
      titulo: 'Notes REST API',
      subtitulo: 'Java backend service',
      descripcion:
        'Spring Boot REST API for users and notes with 1:N relationships, Jakarta validation, global exception handling, JUnit and Mockito coverage, and a Postman collection.',
    },
  },
  es: {
    betweengame: {
      titulo: 'Between',
      subtitulo: 'Juego privado para parejas — producto en producción',
      descripcion:
        'Producto completo diseñado, construido y desplegado en solitario: una PWA con retos, misiones diarias y semanales, minijuegos en tiempo real y a distancia, rachas y logros. La privacidad es estructural — aislamiento por pareja con Row Level Security y consentimiento aplicado en el motor de selección de contenido — respaldada por más de 800 tests unitarios y 185 migraciones SQL. En producción con usuarios reales.',
    },
    saborsemanal: {
      titulo: 'SaborSemanal',
      subtitulo: 'Planificador semanal de comidas',
      descripcion:
        'PWA para planificar la semana de comidas: recetas con alérgenos y porciones, lista de la compra automática y modo offline. La lógica vive en RPC transaccionales de PostgreSQL con RLS y tests pgTAP. Construido sobre un stack ajeno a mi formación — guiado por especificación desde la primera línea.',
    },
    geekzone: {
      titulo: 'GeekZone',
      subtitulo: 'Plataforma de e-commerce',
      descripcion:
        'Proyecto intermodular de 2º DAW hecho en un equipo de tres: marketplace de coleccionables con catálogo, carrito, favoritos y panel de administración, respaldado por una API REST con JWT documentada con Swagger, reCAPTCHA y un entorno Docker + Nginx.',
    },
    'hybrid-furniture': {
      titulo: 'Tienda de muebles híbrida',
      subtitulo: 'Arquitectura orientada a servicios',
      descripcion:
        'Tres servicios Laravel independientes — API de productos, API de usuarios y la tienda que los consume — diseñados en torno al desacoplamiento y el escalado independiente.',
    },
    'notes-api': {
      titulo: 'API REST de notas',
      subtitulo: 'Servicio backend en Java',
      descripcion:
        'API REST en Spring Boot para usuarios y notas con relaciones 1:N, validación con Jakarta, manejo global de excepciones, cobertura con JUnit y Mockito, y una colección de Postman.',
    },
  },
};

export function getProjects(locale: Locale): Project[] {
  return mergeLocalized(projectsBase, projectsI18n, locale);
}
