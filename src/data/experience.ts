export interface Experience {
  empresa: string;
  ubicacion: string;
  rol: string;
  periodo: string;
  descripcion: string[];
}

export const experiences: Experience[] = [
  {
    empresa: 'Servibyte S.L.',
    ubicacion: 'San Fernando',
    rol: 'Web Developer — Cataliza Scholarship',
    periodo: '2026 — Present',
    descripcion: [
      'End-to-end web application development focusing on scalable solutions.',
      'Collaborative teamwork and rapid adaptation to project requirements.',
    ],
  },
  {
    empresa: 'Servibyte S.L.',
    ubicacion: 'San Fernando',
    rol: 'Web Developer — FP Dual Internship',
    periodo: '2025 — 2026',
    descripcion: [
      'Full software development lifecycle, encompassing frontend and backend.',
      'Version control, project deployment, and agile methodologies.',
    ],
  },
];
