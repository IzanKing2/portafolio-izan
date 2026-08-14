import type { Locale } from '../i18n/config';
import { mergeLocalized } from '../i18n/utils';

export type StatId = 'technologies' | 'projects' | 'experience';
export type TechGroupId = 'frontend' | 'backend' | 'systems' | 'ai-method';

interface StatBase {
  numero: number;
  sufijo: string;
}

interface StatTranslations {
  label: string;
}

export interface Stat extends StatBase, StatTranslations {
  id: StatId;
}

interface TechGroupBase {
  items: string[];
}

interface TechGroupTranslations {
  title: string;
}

export interface TechGroup extends TechGroupBase, TechGroupTranslations {
  id: TechGroupId;
}

export const statsBase: Record<StatId, StatBase> = {
  technologies: { numero: 16, sufijo: '+' },
  projects: { numero: 4, sufijo: '' },
  experience: { numero: 1, sufijo: '+' },
};

export const statsI18n: Record<Locale, Record<StatId, StatTranslations>> = {
  en: {
    technologies: { label: 'Technologies' },
    projects: { label: 'Shipped Projects' },
    experience: { label: 'Year of Experience' },
  },
  es: {
    technologies: { label: 'Tecnologías' },
    projects: { label: 'Proyectos entregados' },
    experience: { label: 'Año de experiencia' },
  },
};

export const techGroupsBase: Record<TechGroupId, TechGroupBase> = {
  frontend: {
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'TailwindCSS'],
  },
  backend: {
    items: ['PHP', 'Laravel', 'Java', 'Spring Boot', 'Python', 'Supabase', 'REST APIs'],
  },
  systems: {
    items: ['Docker', 'Ubuntu', 'Nginx', 'MySQL', 'PostgreSQL', 'Git', 'GitHub Actions', 'Vercel'],
  },
  'ai-method': {
    items: [
      'Claude Code',
      'Spec-Driven Development',
      'AI-Assisted Refactoring',
      'Automated Test Loops',
      'Context Engineering',
    ],
  },
};

export const techGroupsI18n: Record<Locale, Record<TechGroupId, TechGroupTranslations>> = {
  en: {
    frontend: { title: 'Frontend' },
    backend: { title: 'Backend' },
    systems: { title: 'Systems & Tools' },
    'ai-method': { title: 'AI & Method' },
  },
  es: {
    frontend: { title: 'Frontend' },
    backend: { title: 'Backend' },
    systems: { title: 'Sistemas y herramientas' },
    'ai-method': { title: 'IA y metodología' },
  },
};

export function getStats(locale: Locale): Stat[] {
  return mergeLocalized(statsBase, statsI18n, locale);
}

export function getTechGroups(locale: Locale): TechGroup[] {
  return mergeLocalized(techGroupsBase, techGroupsI18n, locale);
}
