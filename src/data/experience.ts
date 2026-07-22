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
    rol: 'Desarrollador Web — Beca Cataliza',
    periodo: '2026 — Actual',
    descripcion: [
      'Desarrollo integral de aplicaciones web con soluciones escalables.',
      'Trabajo en equipo colaborativo y adaptación a requisitos del proyecto.',
    ],
  },
  {
    empresa: 'Servibyte S.L.',
    ubicacion: 'San Fernando',
    rol: 'Desarrollador Web — Prácticas FP Dual',
    periodo: '2025 — 2026',
    descripcion: [
      'Ciclo completo de desarrollo software, backend y frontend.',
      'Control de versiones, despliegue de proyectos y metodologías ágiles.',
    ],
  },
];
