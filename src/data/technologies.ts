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
  { numero: 8, sufijo: '+', label: 'Tecnologías' },
  { numero: 3, sufijo: '', label: 'Proyectos reales' },
  { numero: 1, sufijo: '+', label: 'Año de experiencia' },
];

export const groups: TechGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Angular'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'Java', 'Python'],
  },
  {
    title: 'Sistemas y Herramientas',
    items: ['Docker', 'Ubuntu', 'Git', 'GitHub'],
  },
];
