export type PreviewVariant = 'grid' | 'list' | 'api';

export interface Project {
  titulo: string;
  subtitulo: string;
  descripcion: string;
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

export const projects: Project[] = [
  {
    titulo: 'SaborSemanal',
    subtitulo: 'Weekly meal planner',
    descripcion:
      'Plan a week of meals, add and edit recipes, publish them, and generate the shopping list automatically. Built on a stack outside my formal training — spec-driven from the first line.',
    stack: ['React', 'Next.js', 'Supabase', 'TailwindCSS'],
    demo: 'https://saborsemanal.vercel.app/',
    destacado: true,
    preview: 'grid',
    addressBar: 'saborsemanal.vercel.app',
  },
  {
    titulo: 'GeekZone',
    subtitulo: 'E-commerce platform',
    descripcion:
      'Collectibles marketplace with catalog, cart, favorites and an admin panel, backed by a REST API documented with Swagger and containerised for deployment.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Nginx', 'JWT', 'Swagger'],
    github: 'https://github.com/IzanKing2/geekzone-ecommerce',
    destacado: false,
    preview: 'grid',
    addressBar: 'geekzone.local',
  },
  {
    titulo: 'Hybrid Furniture Store',
    subtitulo: 'Service-oriented architecture',
    descripcion:
      'Three independent Laravel services — Products API, Users API and the storefront that consumes them — designed around decoupling and independent scaling.',
    stack: ['Laravel', 'PHP', 'MySQL', 'API REST', 'SOA Architecture'],
    github: 'https://github.com/IzanKing2/03-tienda-muebles-hibrido',
    destacado: false,
    preview: 'list',
    addressBar: 'muebles.local',
  },
  {
    titulo: 'Notes REST API',
    subtitulo: 'Java backend service',
    descripcion:
      'Spring Boot REST API for users and notes with 1:N relationships, Jakarta validation, global exception handling, JUnit and Mockito coverage, and a Postman collection.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'JUnit', 'Mockito', 'Postman'],
    github: 'https://github.com/IzanKing2/API-Notas',
    destacado: false,
    preview: 'api',
    addressBar: 'GET /api/notes',
  },
];
