export interface MethodStep {
  index: string;
  titulo: string;
  descripcion: string;
  tags: string[];
}

/**
 * The "AI-augmented delivery" pillars. Kept as data so the copy can be
 * tuned without touching the component.
 */
export const methodSteps: MethodStep[] = [
  {
    index: '01',
    titulo: 'Spec first, code second',
    descripcion:
      'Every project starts as a written specification: scope, data model, states and acceptance criteria. The spec becomes the contract the implementation is measured against — so AI works inside explicit boundaries instead of guessing at intent.',
    tags: ['Specification', 'Acceptance criteria', 'Scoped iterations'],
  },
  {
    index: '02',
    titulo: 'Unfamiliar stacks, production output',
    descripcion:
      'My formal training is PHP/Laravel and Java. SaborSemanal runs on Next.js, Supabase and TailwindCSS — none of which were part of it. A tight spec plus AI-assisted research closed the gap, and the result is live in production.',
    tags: ['Next.js', 'Supabase', 'Shipped to production'],
  },
  {
    index: '03',
    titulo: 'AI accelerates, I sign off',
    descripcion:
      'Generated code is a draft, not a delivery. Everything goes through review, type checks, tests and manual verification before it merges. AI multiplies throughput; the engineering judgment stays mine.',
    tags: ['Code review', 'Automated tests', 'CI pipeline'],
  },
];
