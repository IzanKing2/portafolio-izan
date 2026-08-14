import type { Locale } from '../i18n/config';
import { mergeLocalized } from '../i18n/utils';

export type PreviewVariant = 'grid' | 'list' | 'api';

export type ProjectId = 'saborsemanal' | 'geekzone' | 'hybrid-furniture' | 'notes-api';

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
  saborsemanal: {
    stack: ['React', 'Next.js', 'Supabase', 'TailwindCSS'],
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

export const projectsI18n: Record<Locale, Record<ProjectId, ProjectTranslations>> = {
  en: {
    saborsemanal: {
      titulo: 'SaborSemanal',
      subtitulo: 'Weekly meal planner',
      descripcion:
        'Plan a week of meals, add and edit recipes, publish them, and generate the shopping list automatically. Built on a stack outside my formal training — spec-driven from the first line.',
    },
    geekzone: {
      titulo: 'GeekZone',
      subtitulo: 'E-commerce platform',
      descripcion:
        'Collectibles marketplace with catalog, cart, favorites and an admin panel, backed by a REST API documented with Swagger and containerised for deployment.',
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
    saborsemanal: {
      titulo: 'SaborSemanal',
      subtitulo: 'Planificador semanal de comidas',
      descripcion:
        'Planifica una semana de comidas, añade y edita recetas, publícalas y genera la lista de la compra automáticamente. Construido sobre un stack ajeno a mi formación — guiado por especificación desde la primera línea.',
    },
    geekzone: {
      titulo: 'GeekZone',
      subtitulo: 'Plataforma de e-commerce',
      descripcion:
        'Marketplace de coleccionables con catálogo, carrito, favoritos y panel de administración, respaldado por una API REST documentada con Swagger y containerizada para su despliegue.',
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
