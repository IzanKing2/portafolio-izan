import type { Locale } from '../i18n/config';
import { mergeLocalized } from '../i18n/utils';
import type { ProjectDetailId } from './projectDetails';

export type ExperienceId = 'fulp' | 'cataliza' | 'fp-dual';

interface ExperienceBase {
  empresa: string;
  /** Omitted when it is not confirmed yet. */
  ubicacion?: string;
  periodo: string;
  /** Technical write-up (on /projects) of the work done in this position. */
  detalle?: ProjectDetailId;
}

interface ExperienceTranslations {
  rol: string;
  descripcion: string[];
}

export interface Experience extends ExperienceBase, ExperienceTranslations {
  id: ExperienceId;
}

/** Display order = insertion order: most recent / upcoming first. */
export const experienceBase: Record<ExperienceId, ExperienceBase> = {
  fulp: {
    empresa: 'FULP',
    periodo: '12/2026 — 12/2027',
  },
  cataliza: {
    empresa: 'Servibyte S.L.',
    ubicacion: 'San Fernando',
    periodo: '2026 — Present',
    detalle: 'gesticab',
  },
  'fp-dual': {
    empresa: 'Servibyte S.L.',
    ubicacion: 'San Fernando',
    periodo: '2025 — 2026',
  },
};

export const experienceI18n: Record<Locale, Record<ExperienceId, ExperienceTranslations>> = {
  en: {
    fulp: {
      rol: 'One-year contract',
      descripcion: ['Joining in December 2026 on a one-year contract to work on a FULP project.'],
    },
    cataliza: {
      rol: 'Web Developer — Cataliza Scholarship',
      descripcion: [
        'GestiCAB V4: redesign for the new version of the multi-tenant platform for registration and capacity control of municipal events. I eradicated the god controllers (decoupled architecture with DTOs and domain services), debugged the code, wrote tests and added features such as Excel export and template creation.',
        'Upgraded it from PHP 7.4 to 8.3 and from Laravel 7 to 13 in six steps, with 189 automated tests green and dependency security advisories down from 31 to 0.',
        'Pessimistic locking for concurrency, CSP with nonces, HSTS and RBAC with 20+ middlewares, and CI/CD with GitHub Actions.',
      ],
    },
    'fp-dual': {
      rol: 'Web Developer — FP Dual Internship',
      descripcion: [
        'Full Stack development of modules for production applications over 466 hours of dual vocational training.',
        'Legacy code optimisation and integration of AI assistants into the delivery workflow.',
      ],
    },
  },
  es: {
    fulp: {
      rol: 'Contrato de un año',
      descripcion: ['Incorporación en diciembre de 2026 con un contrato de un año para trabajar en un proyecto de la FULP.'],
    },
    cataliza: {
      rol: 'Desarrollador Web — Beca Cataliza',
      descripcion: [
        'GestiCAB V4: rediseño a la nueva versión de la plataforma multi-tenant de inscripciones y control de aforo de eventos municipales. Erradiqué los god controllers (arquitectura desacoplada con DTOs y servicios de dominio), depuré el código, creé tests y añadí funcionalidades como la exportación a Excel y la creación de plantillas.',
        'Actualización de PHP 7.4 a 8.3 y de Laravel 7 a 13 en seis pasos, con 189 tests automáticos en verde y los avisos de seguridad de dependencias de 31 a 0.',
        'Bloqueos pesimistas para la concurrencia, CSP con nonces, HSTS y RBAC con más de 20 middlewares, y CI/CD con GitHub Actions.',
      ],
    },
    'fp-dual': {
      rol: 'Desarrollador Web — FP Dual',
      descripcion: [
        'Desarrollo Full Stack de módulos para aplicaciones en producción durante 466 horas de FP Dual.',
        'Optimización de código heredado e integración de asistentes de IA en el flujo de entrega.',
      ],
    },
  },
};

export function getExperiences(locale: Locale): Experience[] {
  return mergeLocalized(experienceBase, experienceI18n, locale);
}
