export interface Project {
  titulo: string;
  descripcion: string;
  stack: string[];
  github: string;
  destacado: boolean;
  imagen?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    titulo: 'GeekZone — E-commerce',
    descripcion: 'Collectibles marketplace (Marvel, Stray Kids, Football). Full platform with catalog, cart, favorites, admin panel, and REST API documented with Swagger. Intermodular DAW project.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Nginx', 'JWT', 'Swagger'],
    github: 'https://github.com/IzanKing2/geekzone-ecommerce',
    destacado: true,
  },
  {
    titulo: 'Hybrid Furniture Store',
    descripcion: 'Service-oriented architecture with 3 independent Laravel projects: Products API, Users API, and the main store consuming them. Focused on decoupling and scalability.',
    stack: ['Laravel', 'PHP', 'MySQL', 'API REST', 'SOA Architecture'],
    github: 'https://github.com/IzanKing2/03-tienda-muebles-hibrido',
    destacado: false,
  },
  {
    titulo: 'Notes REST API',
    descripcion: 'Java + Spring Boot REST API for user and note management with 1:N relationships. Includes Jakarta validation, global exception handling, JUnit & Mockito tests, and Postman collection.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'JUnit', 'Mockito', 'Postman'],
    github: 'https://github.com/IzanKing2/API-Notas',
    destacado: false,
  },
];
