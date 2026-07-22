export interface Project {
  titulo: string;
  descripcion: string;
  stack: string[];
  github: string;
  destacado: boolean;
}

export const projects: Project[] = [
  {
    titulo: 'GeekZone — E-commerce',
    descripcion: 'Marketplace de coleccionables (Marvel, Stray Kids, Fútbol). Plataforma completa con catálogo, carrito, favoritos, panel admin y API REST documentada con Swagger. Proyecto intermodular de 2º DAW.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Nginx', 'JWT', 'Swagger'],
    github: 'https://github.com/IzanKing2/geekzone-ecommerce',
    destacado: true,
  },
  {
    titulo: 'Tienda de Muebles Híbrida',
    descripcion: 'Arquitectura orientada a servicios con 3 proyectos Laravel independientes: API de productos, API de usuarios y tienda principal que los consume. Enfoque en desacoplamiento y escalabilidad.',
    stack: ['Laravel', 'PHP', 'MySQL', 'API REST', 'Arquitectura SOA'],
    github: 'https://github.com/IzanKing2/03-tienda-muebles-hibrido',
    destacado: false,
  },
  {
    titulo: 'API REST de Notas',
    descripcion: 'API REST en Java + Spring Boot para gestión de usuarios y notas con relaciones 1:N. Incluye validación con Jakarta, manejo global de excepciones, tests con JUnit y Mockito, y colección Postman.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'JUnit', 'Mockito', 'Postman'],
    github: 'https://github.com/IzanKing2/API-Notas',
    destacado: false,
  },
];
