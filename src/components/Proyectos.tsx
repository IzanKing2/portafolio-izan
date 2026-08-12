import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { AnimatePresence } from 'framer-motion'
import styles from '../styles/Proyectos.module.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function Projects() {
  const [ref, inView] = useInView()
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'React', 'Laravel', 'Java', 'API REST']

  const filteredProjects = projects.filter(project => 
    filter === 'All' || project.stack.includes(filter)
  )

  return (
    <section id="projects" ref={ref} className={`${styles.section} fade-in ${inView ? 'visible' : ''}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Selected Work</h2>
        </div>
        <div className={styles.filterContainer}>
          {categories.map(cat => (
            <button 
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.activeFilter : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
              key={project.titulo}
              className={`${styles.card} ${index === 0 ? styles.largeCard : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.imagePlaceholder}>
                {project.imagen ? (
                  <img src={project.imagen} alt={project.titulo} className={styles.image} />
                ) : (
                  <div className={styles.placeholderGradient}></div>
                )}
                <span className={styles.floatingPill}>{project.stack[0]}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.titulo}</h3>
                <p className={styles.cardDescription}>{project.descripcion}</p>
                <div className={styles.stack}>
                  {project.stack.slice(1).map((tech) => (
                    <span key={tech} className={styles.pill}>{tech}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
