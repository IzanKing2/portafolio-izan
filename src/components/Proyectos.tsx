import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import ProjectPreview from './ProjectPreview'
import styles from '../styles/Proyectos.module.css'
import { projects } from '../data/projects'

const categories = ['All', 'React', 'Laravel', 'Java']

function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.stack.includes(filter)
  )

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>01 — Portfolio</span>
            <h2 className={styles.title}>Selected Work</h2>
          </div>

          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.activeFilter : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.titulo}
                className={`${styles.card} ${index === 0 ? styles.featured : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={styles.preview}>
                  {project.imagen ? (
                    <img src={project.imagen} alt={project.titulo} className={styles.image} />
                  ) : (
                    <ProjectPreview
                      variant={project.preview}
                      addressBar={project.addressBar}
                    />
                  )}
                  {project.demo && <span className={styles.liveTag}>Live</span>}
                </div>

                <div className={styles.body}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.cardTitle}>{project.titulo}</h3>
                    <span className={styles.cardSubtitle}>{project.subtitulo}</span>
                  </div>

                  <p className={styles.description}>{project.descripcion}</p>

                  <div className={styles.stack}>
                    {project.stack.map((tech) => (
                      <span key={tech} className={styles.pill}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} ${styles.linkPrimary}`}
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
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
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
