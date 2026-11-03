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
        'Every feature starts as a written specification: scope, data model, states and acceptance criteria. Between has a product spec of 100+ sections, a technical spec per service and an ADR for every cross-cutting decision. The AI implements against that spec, not against a vague idea.',
      tags: ['Specification', 'ADRs', 'Acceptance criteria'],
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
        'Generated code is a draft, not a delivery. Everything goes through review, type checks, tests and a check in the browser before it merges — and in Between, SQL scripts against the local stack too. Agents work with skills I wrote and MCP connections, inside project rules. AI multiplies throughput; the engineering judgment stays mine.',
      tags: ['Code review', 'Automated tests', 'Agent skills', 'MCP'],
    },
  },
  es: {
    'spec-first': {
      titulo: 'Primero la especificación, luego el código',
      descripcion:
        'Cada funcionalidad empieza como una especificación escrita: alcance, modelo de datos, estados y criterios de aceptación. Between tiene una spec de producto de más de 100 secciones, una spec técnica por servicio y un ADR por cada decisión transversal. La IA implementa contra esa spec, no contra una idea vaga.',
      tags: ['Especificación', 'ADRs', 'Criterios de aceptación'],
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
        'El código generado es un borrador, no una entrega. Todo pasa por revisión, comprobación de tipos, tests y una comprobación en el navegador antes de fusionarse — y en Between, además, scripts SQL contra el stack local. Los agentes trabajan con skills que escribo yo y conexiones MCP, dentro de las reglas del proyecto. La IA multiplica el ritmo; el criterio de ingeniería sigue siendo mío.',
      tags: ['Revisión de código', 'Tests automatizados', 'Agent skills', 'MCP'],
    },
  },
};

export function getMethodSteps(locale: Locale): MethodStep[] {
  return mergeLocalized(methodStepsBase, methodStepsI18n, locale);
}
