export interface Technology {
  readonly name: string;
  readonly category: 'frontend' | 'backend' | 'database' | 'devops' | 'methodology';
}

export const technologies: readonly Technology[] = [
  // Frontend
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Astro', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  // Backend
  { name: 'PHP', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'Python', category: 'backend' },
  // Database
  { name: 'SQL', category: 'database' },
  // DevOps/Entorno
  { name: 'Docker', category: 'devops' },
  { name: 'Ubuntu', category: 'devops' },
  { name: 'Git', category: 'devops' },
  { name: 'GitHub', category: 'devops' },
  // Metodologías
  { name: 'Spec-Driven Development', category: 'methodology' },
  { name: 'IA aplicada al desarrollo', category: 'methodology' },
] as const;
