import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import ProjectPreview from './ProjectPreview'
import styles from '../styles/Proyectos.module.css'
import { getProjects, matchesFilter, projectFilters } from '../data/projects'
import { useTranslation } from '../i18n/I18nProvider'

const ALL = 'all'

/**
 * Column span of each visible card. The flagship (first project) always leads:
 * big when there are enough projects around it, otherwise just wider.
 */
function spanClass(index: number, count: number, flagshipVisible: boolean): string {
  if (flagshipVisible) {
    if (index === 0) return count >= 3 ? styles.spanHero : styles.spanHero1
    if (index <= 2) return styles.spanSide
  }
  return styles.spanHalf
}

function Projects() {
  const { t, locale } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(ALL)
  const projects = getProjects(locale)
  const flagshipId = projects[0].id

  const filters = [
    { id: ALL, label: t('projects.filterAll'), count: projects.length },
    ...projectFilters
      .map((f) => ({ id: f.id, label: f.label, count: projects.filter((p) => matchesFilter(p, f)).length }))
      .filter((f) => f.count > 0),
  ]

  const activeFilter = projectFilters.find((f) => f.id === active)
  const visible = activeFilter ? projects.filter((p) => matchesFilter(p, activeFilter)) : projects
  const flagshipVisible = visible[0]?.id === flagshipId
  const resultText =
    visible.length === 1 ? t('projects.resultOne') : `${visible.length} ${t('projects.resultMany')}`

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>{t('projects.eyebrow')}</span>
            <h2 className={styles.title}>{t('projects.title')}</h2>
          </div>

          <div className={styles.filterBar}>
            <div className={styles.filters} role="group" aria-label={t('projects.filterLabel')}>
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active === f.id}
                  className={`${styles.filterBtn} ${active === f.id ? styles.filterActive : ''}`}
                  onClick={() => setActive(f.id)}
                >
                  {active === f.id && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className={styles.filterPill}
                      transition={{ type: 'spring', stiffness: 520, damping: 40 }}
                    />
                  )}
                  <span className={styles.filterLabel}>{f.label}</span>
                  <span className={styles.filterCount}>{f.count}</span>
                </button>
              ))}
            </div>
            <p className={styles.resultCount} aria-live="polite">
              {resultText}
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => {
              const isFlagship = project.id === flagshipId
              return (
                <motion.article
                  layout="position"
                  key={project.id}
                  className={`${styles.card} ${spanClass(index, visible.length, flagshipVisible)} ${
                    isFlagship ? styles.flagship : ''
                  }`}
                  initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={
                    reduceMotion
                      ? { opacity: 0, transition: { duration: 0.1 } }
                      : { opacity: 0, scale: 0.94, transition: { duration: 0.18 } }
                  }
                  whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.2, delay: 0 } }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    layout: { type: 'spring', stiffness: 420, damping: 38, mass: 0.9 },
                    default: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 },
                  }}
                >
                  {isFlagship && (
                    <div className={styles.preview}>
                      {project.imagen ? (
                        <img src={project.imagen} alt={project.titulo} className={styles.image} />
                      ) : (
                        <ProjectPreview variant={project.preview} addressBar={project.addressBar} />
                      )}
                      <span className={styles.flagshipTag}>{t('projects.flagship')}</span>
                      {project.demo && <span className={styles.liveTag}>{t('projects.live')}</span>}
                    </div>
                  )}

                  <div className={styles.body}>
                    {!isFlagship && (
                      <div className={styles.bar}>
                        <span className={project.demo ? styles.barDotLive : styles.barDot} />
                        {project.addressBar}
                      </div>
                    )}
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
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                          <FiExternalLink /> {t('projects.liveDemo')}
                        </a>
                      )}
                      <a href={`/${locale}/projects#${project.id}`} className={styles.link}>
                        {t('projects.viewDetails')} <FiArrowRight />
                      </a>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                          <FaGithub /> {t('projects.viewCode')}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>

        <a href={`/${locale}/projects`} className={styles.allDetails}>
          {t('projects.allDetails')} <FiArrowRight />
        </a>
      </div>
    </section>
  )
}

export default Projects
