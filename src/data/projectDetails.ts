import type { Locale } from '../i18n/config';
import { mergeLocalized } from '../i18n/utils';

/** Order here is the order on the technical write-ups page. */
export type ProjectDetailId =
  | 'betweengame'
  | 'gesticab'
  | 'saborsemanal'
  | 'geekzone'
  | 'hybrid-furniture'
  | 'notes-api';

export type ProjectKind = 'product' | 'professional' | 'academic';

interface ProjectDetailBase {
  kind: ProjectKind;
  stack: string[];
  demo?: string;
  github?: string;
}

interface Metric {
  value: string;
  label: string;
}

interface Decision {
  title: string;
  text: string;
}

interface ProjectDetailTranslations {
  titulo: string;
  subtitulo: string;
  resumen: string;
  rol: string;
  metricas: Metric[];
  decisiones: Decision[];
  calidad: string[];
}

export interface ProjectDetail extends ProjectDetailBase, ProjectDetailTranslations {
  id: ProjectDetailId;
}

export const projectDetailsBase: Record<ProjectDetailId, ProjectDetailBase> = {
  betweengame: {
    kind: 'product',
    demo: 'https://betweengame.com',
    stack: [
      'Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'Supabase', 'PostgreSQL', 'RLS',
      'pg_cron', 'Edge Functions', 'Web Push', 'PWA', 'Stripe', 'Vitest', 'Playwright', 'Vercel',
    ],
  },
  gesticab: {
    kind: 'professional',
    stack: ['PHP 8.3', 'Laravel 13', 'Vue', 'MySQL 8.0', 'PHPUnit 12', 'GitHub Actions', 'Docker'],
  },
  saborsemanal: {
    kind: 'product',
    demo: 'https://saborsemanal.vercel.app/',
    stack: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'pgTAP', 'PWA'],
  },
  geekzone: {
    kind: 'academic',
    github: 'https://github.com/IzanKing2/geekzone-ecommerce',
    stack: ['Laravel', 'PHP 8.2', 'MySQL 8.0', 'JWT', 'Blade', 'JavaScript', 'Nginx', 'Docker', 'Swagger'],
  },
  'hybrid-furniture': {
    kind: 'academic',
    github: 'https://github.com/IzanKing2/03-tienda-muebles-hibrido',
    stack: ['PHP 8.3', 'Laravel', 'Composer', 'API REST'],
  },
  'notes-api': {
    kind: 'academic',
    github: 'https://github.com/IzanKing2/API-Notas',
    stack: ['Java 17', 'Spring Boot 3.5', 'MySQL', 'Hibernate / JPA', 'Lombok', 'JUnit 5', 'Mockito', 'Postman'],
  },
};

export const projectDetailsI18n: Record<Locale, Record<ProjectDetailId, ProjectDetailTranslations>> = {
  es: {
    betweengame: {
      titulo: 'Between',
      subtitulo: 'Juego privado para parejas — producto en producción',
      resumen:
        'Juego privado y persistente para parejas, instalable como PWA: retos, misiones diarias y semanales, minijuegos en tiempo real y a distancia, partidas asíncronas, recompensas, logros y rachas. Está en producción con usuarios reales.',
      rol: 'Autor único de todo el producto: especificación, diseño, código, despliegue, aspectos legales y marketing.',
      metricas: [
        { value: '800+', label: 'tests unitarios' },
        { value: '25', label: 'tests e2e' },
        { value: '185', label: 'migraciones SQL' },
        { value: '13', label: 'ADRs' },
      ],
      decisiones: [
        {
          title: 'Privacidad y consentimiento como reglas estructurales',
          text: 'Cada pareja es un espacio aislado con Row Level Security en todas las tablas. Los límites de cada persona se aplican en el motor de selección de contenido y nunca se revelan a la otra.',
        },
        {
          title: 'Lógica de negocio en PostgreSQL',
          text: 'Funciones security definer, triggers y tareas pg_cron para misiones, cofres semanales, economía de puntos, rachas y recordatorios.',
        },
        {
          title: 'Tiempo real y partidas asíncronas',
          text: 'Supabase Realtime sincroniza los dos móviles, y las partidas «sin prisa» funcionan de forma asíncrona.',
        },
        {
          title: 'Notificaciones sin filtrar datos',
          text: 'Web Push y email mediante Edge Functions (Deno), con texto genérico en la pantalla de bloqueo y deduplicado.',
        },
        {
          title: 'Motor de juego separado del contenido',
          text: 'El catálogo de retos, por niveles de intensidad, tiene esquema propio: no hay texto hardcodeado en la lógica.',
        },
        {
          title: 'Pagos con un único punto de control',
          text: 'Planes opcionales con Stripe (Checkout y Billing Portal) detrás de un único punto de control de acceso.',
        },
        {
          title: 'Cumplimiento RGPD / LOPDGDD',
          text: 'Registro de tratamientos, evaluación de impacto (DPIA) y protocolo de brechas.',
        },
      ],
      calidad: [
        'Más de 800 tests unitarios con Vitest y 25 tests e2e con Playwright.',
        '53 scripts de integración SQL que prueban RLS actuando como cada miembro de la pareja y como un extraño.',
        'Spec de producto de más de 100 secciones, 26 specs técnicas por servicio y 13 ADRs para las decisiones transversales.',
      ],
    },
    gesticab: {
      titulo: 'GestiCAB V4',
      subtitulo: 'Plataforma multi-tenant de inscripciones y aforo — Servibyte S.L.',
      resumen:
        'Plataforma multi-tenant de inscripciones y control de aforo de eventos municipales. Se refactoriza hacia una arquitectura desacoplada con DTOs y servicios de dominio, y se lleva de PHP 7.4 y Laravel 7 (ambos sin soporte) a PHP 8.3 y Laravel 13.',
      rol: 'Desarrollador web en el equipo de Servibyte S.L. (Beca Cataliza, desde junio de 2026). Rediseñé la plataforma a la nueva versión, erradiqué los god controllers, depuré el código, creé tests y añadí funcionalidades nuevas. También hice la actualización de PHP 7.4 a 8.3 y de Laravel 7 a 13.',
      metricas: [
        { value: '189', label: 'tests automáticos' },
        { value: '601', label: 'verificaciones' },
        { value: '31 → 0', label: 'avisos de seguridad' },
        { value: '62', label: 'migraciones' },
      ],
      decisiones: [
        {
          title: 'Actualización por fases con la suite en verde',
          text: 'Primero PHP 8.3 manteniendo Laravel 7 y después Laravel 7 → 13 en seis pasos, uno por versión, cada uno en su commit y con la suite completa en verde.',
        },
        {
          title: 'Regresión contra una copia de la base de datos',
          text: 'En cada paso, además de los tests, comparé las respuestas con las de Laravel 7 sobre una copia de la base de datos de trabajo: mismas respuestas salvo el nuevo visor de logs y ningún error 5xx.',
        },
        {
          title: 'Problemas que solo salían al migrar',
          text: 'Se destaparon 9 problemas que habrían llegado a producción sin error al desplegar: rutas duplicadas que desviaban 8 enlaces y formularios, una caché de permisos que daba error 500 tras desplegar y una restricción de plazas que se perdía en SQLite.',
        },
        {
          title: 'Control de concurrencia',
          text: 'Bloqueos pesimistas (lockForUpdate) y un servicio de heartbeat lock para proteger el aforo de cada evento.',
        },
        {
          title: 'Seguridad por capas',
          text: 'CSP con nonces dinámicos, HSTS y autorización RBAC con más de 20 middlewares. Los avisos de seguridad de Composer bajaron de 31 en 10 paquetes a 0.',
        },
        {
          title: 'Arquitectura desacoplada',
          text: 'Erradiqué los god controllers: la lógica vive en servicios de dominio y los DTOs fijan los contratos, en lugar de estar repartida por controladores y modelos.',
        },
        {
          title: 'Rediseño y funcionalidades nuevas',
          text: 'Rediseño de la interfaz a la nueva versión y funcionalidades nuevas, como la exportación a Excel y la creación de plantillas, entre otras.',
        },
        {
          title: 'Despliegue con vuelta atrás',
          text: 'Imagen Docker con php:8.3-apache y plan de despliegue con copia de la base de datos y la imagen anterior etiquetada para poder volver atrás.',
        },
      ],
      calidad: [
        '189 tests con 601 verificaciones en verde (13 nuevos durante la migración), y las 62 migraciones probadas desde cero sobre MySQL.',
        'Depuración del código heredado y creación de tests.',
        'CI/CD con GitHub Actions sobre MySQL y SQLite.',
        'Estado: migración terminada y verificada en local; pendiente de probar con datos reales en un servidor de pruebas y de desplegar.',
      ],
    },
    saborsemanal: {
      titulo: 'SaborSemanal',
      subtitulo: 'Planificador semanal de comidas',
      resumen:
        'PWA de planificación semanal de comidas: recetas con alérgenos y porciones, lista de la compra automática y modo offline.',
      rol: 'Proyecto personal en solitario, hecho sobre un stack ajeno a mi formación (Next.js y Supabase) y guiado por especificación desde la primera línea.',
      metricas: [],
      decisiones: [
        {
          title: 'Operaciones atómicas con RPC',
          text: 'Las operaciones que tocan varias tablas se exponen como funciones RPC transaccionales de PostgreSQL.',
        },
        {
          title: 'Seguridad a nivel de fila',
          text: 'Row Level Security para que cada persona solo acceda a sus propios datos.',
        },
        {
          title: 'Uso sin conexión',
          text: 'Al ser una PWA con modo offline, el plan semanal sigue disponible sin red.',
        },
      ],
      calidad: ['Tests de base de datos con pgTAP.'],
    },
    geekzone: {
      titulo: 'GeekZone',
      subtitulo: 'Plataforma de e-commerce',
      resumen:
        'E-commerce de coleccionables de Marvel, Stray Kids y fútbol, con catálogo, carrito, favoritos y panel de administración, respaldado por una API REST documentada.',
      rol: 'Proyecto intermodular de 2º DAW (curso 2025/2026) hecho en un equipo de tres personas.',
      metricas: [],
      decisiones: [
        {
          title: 'API REST con autenticación JWT',
          text: 'Autenticación con JWT mediante php-open-source-saver/jwt-auth.',
        },
        {
          title: 'API documentada',
          text: 'Documentación interactiva con Swagger UI generada con l5-swagger.',
        },
        {
          title: 'Entorno reproducible',
          text: 'Docker Compose con Nginx, PHP 8.2 y MySQL 8.0 para levantar el proyecto con un comando.',
        },
        {
          title: 'Seguridad adicional',
          text: 'Google reCAPTCHA v2 en el login y el registro.',
        },
      ],
      calidad: [
        'Documentación completa: memoria del proyecto, diagrama E/R, diagrama UML de clases y script SQL de la base de datos.',
      ],
    },
    'hybrid-furniture': {
      titulo: 'Tienda de muebles híbrida',
      subtitulo: 'Arquitectura orientada a servicios',
      resumen:
        'Tres proyectos Laravel independientes: api_muebles (catálogo e inventario), api_usuarios (registro, autenticación y perfiles) y tienda_principal, el frontend que consume ambas APIs.',
      rol: 'Proyecto académico para practicar una arquitectura orientada a servicios.',
      metricas: [],
      decisiones: [
        {
          title: 'Separación de responsabilidades',
          text: 'Cada API gestiona un único dominio, así el código de muebles no interfiere con el de usuarios.',
        },
        {
          title: 'Escalado independiente',
          text: 'Si el catálogo recibe mucho tráfico y pocas personas se registran, solo hay que escalar api_muebles.',
        },
        {
          title: 'Tolerancia a fallos',
          text: 'Si la API de usuarios cae, el catálogo sigue disponible en la tienda, aunque no se pueda iniciar sesión ni comprar.',
        },
      ],
      calidad: [],
    },
    'notes-api': {
      titulo: 'API REST de notas',
      subtitulo: 'Servicio backend en Java',
      resumen:
        'API REST en Java y Spring Boot para gestionar usuarios y sus notas con una relación 1:N, persistida en MySQL con JPA.',
      rol: 'Proyecto de práctica de backend en Java.',
      metricas: [],
      decisiones: [
        {
          title: 'Arquitectura por capas',
          text: 'Controladores, servicios, repositorios y modelo, cada uno con una única responsabilidad.',
        },
        {
          title: 'CRUD reutilizable',
          text: 'Servicios basados en una clase base genérica (AbstractCrudService) para no repetir el CRUD en cada entidad.',
        },
        {
          title: 'Validación y errores',
          text: 'Jakarta Validation en la entrada y un manejador global de excepciones para respuestas de error coherentes.',
        },
      ],
      calidad: [
        'Pruebas unitarias y de integración con JUnit 5 y Mockito.',
        'Colección de Postman con las peticiones de cada endpoint.',
      ],
    },
  },
  en: {
    betweengame: {
      titulo: 'Between',
      subtitulo: 'Private game for couples — live product',
      resumen:
        'A private, persistent game for couples, installable as a PWA: challenges, daily and weekly missions, real-time and long-distance minigames, asynchronous matches, rewards, achievements and streaks. Live with real users.',
      rol: 'Sole author of the whole product: specification, design, code, deployment, legal and marketing.',
      metricas: [
        { value: '800+', label: 'unit tests' },
        { value: '25', label: 'e2e tests' },
        { value: '185', label: 'SQL migrations' },
        { value: '13', label: 'ADRs' },
      ],
      decisiones: [
        {
          title: 'Privacy and consent as structural rules',
          text: "Every couple is an isolated space with Row Level Security on all tables. Each person's limits are applied in the content-selection engine and never revealed to the other.",
        },
        {
          title: 'Business logic in PostgreSQL',
          text: 'security definer functions, triggers and pg_cron jobs for missions, weekly chests, the points economy, streaks and reminders.',
        },
        {
          title: 'Real time and asynchronous matches',
          text: 'Supabase Realtime keeps both phones in sync, and "no rush" matches work asynchronously.',
        },
        {
          title: 'Notifications that do not leak data',
          text: 'Web Push and email through Edge Functions (Deno), with generic text on the lock screen and deduplication.',
        },
        {
          title: 'Game engine separated from content',
          text: 'The challenge catalog, organised by intensity levels, has its own schema: no hardcoded text in the logic.',
        },
        {
          title: 'Payments behind a single control point',
          text: 'Optional plans with Stripe (Checkout and Billing Portal) behind a single access-control point.',
        },
        {
          title: 'GDPR / LOPDGDD compliance',
          text: 'Record of processing activities, data protection impact assessment (DPIA) and breach protocol.',
        },
      ],
      calidad: [
        '800+ unit tests with Vitest and 25 e2e tests with Playwright.',
        '53 SQL integration scripts that test RLS acting as each member of the couple and as a stranger.',
        'A 100+ section product spec, 26 technical specs per service and 13 ADRs for cross-cutting decisions.',
      ],
    },
    gesticab: {
      titulo: 'GestiCAB V4',
      subtitulo: 'Multi-tenant registration and capacity platform — Servibyte S.L.',
      resumen:
        'A multi-tenant platform for registration and capacity control of municipal events. It is being refactored towards a decoupled architecture with DTOs and domain services, and moved from PHP 7.4 and Laravel 7 (both unsupported) to PHP 8.3 and Laravel 13.',
      rol: 'Web developer on the Servibyte S.L. team (Cataliza Scholarship, since June 2026). I redesigned the platform for the new version, eradicated the god controllers, debugged the code, wrote tests and added new features. I also did the upgrade from PHP 7.4 to 8.3 and from Laravel 7 to 13.',
      metricas: [
        { value: '189', label: 'automated tests' },
        { value: '601', label: 'assertions' },
        { value: '31 → 0', label: 'security advisories' },
        { value: '62', label: 'migrations' },
      ],
      decisiones: [
        {
          title: 'Phased upgrade with the suite green',
          text: 'PHP 8.3 first while staying on Laravel 7, then Laravel 7 → 13 in six steps, one per version, each in its own commit with the full suite green.',
        },
        {
          title: 'Regression against a copy of the database',
          text: 'At every step, besides the tests, I compared responses with Laravel 7 on a copy of the working database: same responses except the new log viewer, and no 5xx errors.',
        },
        {
          title: 'Problems that only showed up while migrating',
          text: 'Nine problems surfaced that would have reached production without any error at deploy time: duplicated routes that sent 8 links and forms elsewhere, a permissions cache that returned 500 right after deploying, and a seat restriction that was lost on SQLite.',
        },
        {
          title: 'Concurrency control',
          text: "Pessimistic locks (lockForUpdate) and a heartbeat-lock service to protect each event's capacity.",
        },
        {
          title: 'Layered security',
          text: 'CSP with dynamic nonces, HSTS and RBAC authorisation with 20+ middlewares. Composer security advisories went from 31 across 10 packages to 0.',
        },
        {
          title: 'Decoupled architecture',
          text: 'I eradicated the god controllers: logic lives in domain services and DTOs set the contracts, instead of being scattered across controllers and models.',
        },
        {
          title: 'Redesign and new features',
          text: 'Interface redesigned for the new version, plus new features such as Excel export and template creation, among others.',
        },
        {
          title: 'Deployment with a way back',
          text: 'A php:8.3-apache Docker image and a rollout plan with a database backup and the previous image tagged so it can be rolled back.',
        },
      ],
      calidad: [
        '189 tests with 601 assertions green (13 new during the migration), and all 62 migrations tested from scratch on MySQL.',
        'Debugging of the legacy code and creation of tests.',
        'CI/CD with GitHub Actions on MySQL and SQLite.',
        'Status: migration finished and verified locally; still to be tested with real data on a staging server and deployed.',
      ],
    },
    saborsemanal: {
      titulo: 'SaborSemanal',
      subtitulo: 'Weekly meal planner',
      resumen:
        'A PWA for weekly meal planning: recipes with allergens and portions, an automatic shopping list and offline mode.',
      rol: 'Solo personal project, built on a stack outside my formal training (Next.js and Supabase) and spec-driven from the first line.',
      metricas: [],
      decisiones: [
        {
          title: 'Atomic operations with RPC',
          text: 'Operations that touch several tables are exposed as transactional PostgreSQL RPC functions.',
        },
        {
          title: 'Row-level security',
          text: 'Row Level Security so each person can only reach their own data.',
        },
        {
          title: 'Offline use',
          text: 'As a PWA with offline mode, the weekly plan stays available without a connection.',
        },
      ],
      calidad: ['Database tests with pgTAP.'],
    },
    geekzone: {
      titulo: 'GeekZone',
      subtitulo: 'E-commerce platform',
      resumen:
        'A collectibles e-commerce site for Marvel, Stray Kids and football, with catalog, cart, favorites and an admin panel, backed by a documented REST API.',
      rol: 'Intermodular 2nd-year DAW project (2025/2026 course) built by a team of three.',
      metricas: [],
      decisiones: [
        {
          title: 'REST API with JWT authentication',
          text: 'JWT authentication through php-open-source-saver/jwt-auth.',
        },
        {
          title: 'Documented API',
          text: 'Interactive documentation with Swagger UI generated with l5-swagger.',
        },
        {
          title: 'Reproducible environment',
          text: 'Docker Compose with Nginx, PHP 8.2 and MySQL 8.0 to bring the project up with one command.',
        },
        {
          title: 'Extra security',
          text: 'Google reCAPTCHA v2 on login and registration.',
        },
      ],
      calidad: ['Full documentation: project report, E/R diagram, UML class diagram and database SQL script.'],
    },
    'hybrid-furniture': {
      titulo: 'Hybrid Furniture Store',
      subtitulo: 'Service-oriented architecture',
      resumen:
        'Three independent Laravel projects: api_muebles (catalog and inventory), api_usuarios (registration, authentication and profiles) and tienda_principal, the frontend that consumes both APIs.',
      rol: 'Academic project to practise a service-oriented architecture.',
      metricas: [],
      decisiones: [
        {
          title: 'Separation of concerns',
          text: 'Each API owns a single domain, so furniture code does not interfere with user code.',
        },
        {
          title: 'Independent scaling',
          text: 'If the catalog gets a lot of traffic and few people sign up, only api_muebles needs to scale.',
        },
        {
          title: 'Fault tolerance',
          text: 'If the users API goes down, the catalog stays available in the storefront, although nobody can log in or buy.',
        },
      ],
      calidad: [],
    },
    'notes-api': {
      titulo: 'Notes REST API',
      subtitulo: 'Java backend service',
      resumen:
        'A REST API in Java and Spring Boot to manage users and their notes with a 1:N relationship, persisted in MySQL with JPA.',
      rol: 'Java backend practice project.',
      metricas: [],
      decisiones: [
        {
          title: 'Layered architecture',
          text: 'Controllers, services, repositories and model, each with a single responsibility.',
        },
        {
          title: 'Reusable CRUD',
          text: 'Services built on a generic base class (AbstractCrudService) so CRUD is not repeated per entity.',
        },
        {
          title: 'Validation and errors',
          text: 'Jakarta Validation on input and a global exception handler for consistent error responses.',
        },
      ],
      calidad: [
        'Unit and integration tests with JUnit 5 and Mockito.',
        'A Postman collection with the requests for every endpoint.',
      ],
    },
  },
};

export function getProjectDetails(locale: Locale): ProjectDetail[] {
  return mergeLocalized(projectDetailsBase, projectDetailsI18n, locale);
}
