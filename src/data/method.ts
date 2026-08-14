import type { Locale } from '../i18n/config';
import { mergeLocalized } from '../i18n/utils';

export type MethodStepId = 'spec-first' | 'unfamiliar-stacks' | 'ai-signoff';

interface MethodStepBase {
  index: string;
}

interface MethodStepTranslations {
  titulo: string;
  descripcion: string;
  tags: string[];
}

export interface MethodStep extends MethodStepBase, MethodStepTranslations {
  id: MethodStepId;
}

/**
 * The "AI-augmented delivery" pillars. Kept as data so the copy can be
 * tuned without touching the component.
 */
export const methodStepsBase: Record<MethodStepId, MethodStepBase> = {
  'spec-first': { index: '01' },
  'unfamiliar-stacks': { index: '02' },
  'ai-signoff': { index: '03' },
};

export const methodStepsI18n: Record<Locale, Record<MethodStepId, MethodStepTranslations>> = {
  en: {
    'spec-first': {
      titulo: 'Spec first, code second',
      descripcion:
        'Every project starts as a written specification: scope, data model, states and acceptance criteria. The spec becomes the contract the implementation is measured against — so AI works inside explicit boundaries instead of guessing at intent.',
      tags: ['Specification', 'Acceptance criteria', 'Scoped iterations'],
    },
    'unfamiliar-stacks': {
      titulo: 'Unfamiliar stacks, production output',
      descripcion:
        'My formal training is PHP/Laravel and Java. SaborSemanal runs on Next.js, Supabase and TailwindCSS — none of which were part of it. A tight spec plus AI-assisted research closed the gap, and the result is live in production.',
      tags: ['Next.js', 'Supabase', 'Shipped to production'],
    },
    'ai-signoff': {
      titulo: 'AI accelerates, I sign off',
      descripcion:
        'Generated code is a draft, not a delivery. Everything goes through review, type checks, tests and manual verification before it merges. AI multiplies throughput; the engineering judgment stays mine.',
      tags: ['Code review', 'Automated tests', 'CI pipeline'],
    },
  },
  es: {
    'spec-first': {
      titulo: 'Primero la especificación, luego el código',
      descripcion:
        'Cada proyecto empieza como una especificación escrita: alcance, modelo de datos, estados y criterios de aceptación. Esa especificación es el contrato con el que se mide la implementación, así que la IA trabaja dentro de límites explícitos en vez de adivinar la intención.',
      tags: ['Especificación', 'Criterios de aceptación', 'Iteraciones acotadas'],
    },
    'unfamiliar-stacks': {
      titulo: 'Stacks nuevos, resultado en producción',
      descripcion:
        'Mi formación es PHP/Laravel y Java. SaborSemanal corre sobre Next.js, Supabase y TailwindCSS, ninguno de ellos parte de esa formación. Una especificación ajustada más investigación asistida por IA cerraron la brecha, y el resultado está en producción.',
      tags: ['Next.js', 'Supabase', 'En producción'],
    },
    'ai-signoff': {
      titulo: 'La IA acelera, yo doy el visto bueno',
      descripcion:
        'El código generado es un borrador, no una entrega. Todo pasa por revisión, comprobación de tipos, tests y verificación manual antes de fusionarse. La IA multiplica el ritmo; el criterio de ingeniería sigue siendo mío.',
      tags: ['Revisión de código', 'Tests automatizados', 'Pipeline de CI'],
    },
  },
};

export function getMethodSteps(locale: Locale): MethodStep[] {
  return mergeLocalized(methodStepsBase, methodStepsI18n, locale);
}
