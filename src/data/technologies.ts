export interface Stat {
  numero: number;
  sufijo: string;
  label: string;
}

export interface TechGroup {
  title: string;
  items: string[];
}

export const stats: Stat[] = [
  { numero: 16, sufijo: '+', label: 'Technologies' },
  { numero: 4, sufijo: '', label: 'Shipped Projects' },
  { numero: 1, sufijo: '+', label: 'Year of Experience' },
];

export const groups: TechGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'TailwindCSS'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'Java', 'Spring Boot', 'Python', 'Supabase', 'REST APIs'],
  },
  {
    title: 'Systems & Tools',
    items: ['Docker', 'Ubuntu', 'Nginx', 'MySQL', 'PostgreSQL', 'Git', 'GitHub Actions', 'Vercel'],
  },
  {
    title: 'AI & Method',
    items: [
      'Claude Code',
      'Spec-Driven Development',
      'AI-Assisted Refactoring',
      'Automated Test Loops',
      'Context Engineering',
    ],
  },
];
