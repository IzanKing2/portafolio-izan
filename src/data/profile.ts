export interface Profile {
  readonly name: string;
  readonly age: number;
  readonly title: string;
  readonly education: {
    readonly degree: string;
    readonly institution: string;
    readonly status: string;
  };
  readonly currentJob: {
    readonly company: string;
    readonly location: string;
    readonly contractType: string;
    readonly description: string;
  };
  readonly email: string;
  readonly github: string;
  readonly linkedin: string;
  readonly siteUrl: string;
  readonly locale: string;
}

export const profile = {
  name: "Izan Carlo Celis Afonso",
  age: 22,
  title: "Desarrollador Web",
  education: {
    degree: "Ciclo Superior de Desarrollo de Aplicaciones Web",
    institution: "CIFP Villa de Agüimes",
    status: "Recién titulado"
  },
  currentJob: {
    company: "ServiByte",
    location: "San Fernando",
    contractType: "Beca Cataliza",
    description: "Desarrollador web en etapa de crecimiento profesional y aprendizaje activo."
  },
  email: "izanwork2@gmail.com",
  github: "https://github.com/IzanKing2",
  linkedin: "https://www.linkedin.com/in/izan-celis-afonso-4a4a1036b/",
  siteUrl: "https://portafolio-izan.dev",
  locale: "es"
} as const satisfies Profile;
