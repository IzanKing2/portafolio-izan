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
  { numero: 8, sufijo: '+', label: 'Technologies' },
  { numero: 3, sufijo: '', label: 'Real Projects' },
  { numero: 1, sufijo: '+', label: 'Year of Experience' },
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
    title: 'Systems & Tools',
    items: ['Docker', 'Ubuntu', 'Git', 'GitHub'],
  },
];
