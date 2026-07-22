import { useInView } from '../hooks/useInView'
import styles from '../styles/Proyectos.module.css'

const projects = [
  {
    titulo: 'GeekZone — E-commerce',
    descripcion:
      'Marketplace de coleccionables (Marvel, Stray Kids, Fútbol). Plataforma completa con catálogo, carrito, favoritos, panel admin y API REST documentada con Swagger. Proyecto intermodular de 2º DAW.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Nginx', 'JWT', 'Swagger'],
    github: 'https://github.com/IzanKing2/geekzone-ecommerce',
    destacado: true,
  },
  {
    titulo: 'Tienda de Muebles Híbrida',
    descripcion:
      'Arquitectura orientada a servicios con 3 proyectos Laravel independientes: API de productos, API de usuarios y tienda principal que los consume. Enfoque en desacoplamiento y escalabilidad.',
    stack: ['Laravel', 'PHP', 'MySQL', 'API REST', 'Arquitectura SOA'],
    github: 'https://github.com/IzanKing2/03-tienda-muebles-hibrido',
    destacado: false,
  },
  {
    titulo: 'API REST de Notas',
    descripcion:
      'API REST en Java + Spring Boot para gestión de usuarios y notas con relaciones 1:N. Incluye validación con Jakarta, manejo global de excepciones, tests con JUnit y Mockito, y colección Postman.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'JUnit', 'Mockito', 'Postman'],
    github: 'https://github.com/IzanKing2/API-Notas',
    destacado: false,
  },
]

function Proyectos() {
  const [ref, inView] = useInView()

  return (
    <section id="proyectos" ref={ref} className={`${styles.section} fade-in ${inView ? 'visible' : ''}`}>
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.decorativeLine}></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.titulo}
              className={`fade-in-delay-${index + 1} fade-in ${inView ? 'visible' : ''} ${styles.card} ${project.destacado ? styles.cardDestacado : ''}`}
            >
              <h3 className={styles.cardTitle}>{project.titulo}</h3>
              <p className={styles.cardDescription}>{project.descripcion}</p>
              <div className={styles.stack}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.pill}>{tech}</span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos
