import type { Locale } from '../i18n/config';
import { mergeLocalized } from '../i18n/utils';

export type ExperienceId = 'cataliza' | 'fp-dual';

interface ExperienceBase {
  empresa: string;
  ubicacion: string;
  periodo: string;
}

interface ExperienceTranslations {
  rol: string;
  descripcion: string[];
}

export interface Experience extends ExperienceBase, ExperienceTranslations {
  id: ExperienceId;
}

export const experienceBase: Record<ExperienceId, ExperienceBase> = {
  cataliza: {
    empresa: 'Servibyte S.L.',
    ubicacion: 'San Fernando',
    periodo: '2026 — Present',
  },
  'fp-dual': {
    empresa: 'Servibyte S.L.',
    ubicacion: 'San Fernando',
    periodo: '2025 — 2026',
  },
};

export const experienceI18n: Record<Locale, Record<ExperienceId, ExperienceTranslations>> = {
  en: {
    cataliza: {
      rol: 'Web Developer — Cataliza Scholarship',
      descripcion: [
        'End-to-end web application development focusing on scalable solutions.',
        'Collaborative teamwork and rapid adaptation to project requirements.',
      ],
    },
    'fp-dual': {
      rol: 'Web Developer — FP Dual Internship',
      descripcion: [
        'Full software development lifecycle, encompassing frontend and backend.',
        'Version control, project deployment, and agile methodologies.',
      ],
    },
  },
  es: {
    cataliza: {
      rol: 'Desarrollador Web — Beca Cataliza',
      descripcion: [
        'Desarrollo de aplicaciones web de extremo a extremo con foco en soluciones escalables.',
        'Trabajo colaborativo en equipo y adaptación rápida a los requisitos del proyecto.',
      ],
    },
    'fp-dual': {
      rol: 'Desarrollador Web — FP Dual',
      descripcion: [
        'Ciclo completo de desarrollo de software, abarcando frontend y backend.',
        'Control de versiones, despliegue de proyectos y metodologías ágiles.',
      ],
    },
  },
};

export function getExperiences(locale: Locale): Experience[] {
  return mergeLocalized(experienceBase, experienceI18n, locale);
}
