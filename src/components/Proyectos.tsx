import { useInView } from '../hooks/useInView'
import styles from '../styles/Proyectos.module.css'

import { projects } from '../data/projects'

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
