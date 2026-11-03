import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import styles from '../styles/Experiencia.module.css'
import { getExperiences } from '../data/experience'
import { getProjectDetails } from '../data/projectDetails'
import { useTranslation } from '../i18n/I18nProvider'

function Experiencia() {
  const { t, locale } = useTranslation()
  const experiences = getExperiences(locale)
  const details = getProjectDetails(locale)

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('experience.eyebrow')}</span>
          <h2 className={styles.title}>{t('experience.title')}</h2>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.item}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <span className={styles.period}>{exp.periodo.replace('Present', t('experience.present'))}</span>

              <div className={styles.rail}>
                <span className={`${styles.dot} ${index === 0 ? styles.dotActive : ''}`} />
              </div>

              <div className={styles.content}>
                <h3 className={styles.role}>{exp.rol}</h3>
                <p className={styles.company}>
                  {exp.empresa}
                  {exp.ubicacion && (
                    <>
                      {' '}
                      <span className={styles.sep}>·</span> {exp.ubicacion}
                    </>
                  )}
                </p>
                <ul className={styles.description}>
                  {exp.descripcion.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                {exp.detalle && (
                  <a href={`/${locale}/projects#${exp.detalle}`} className={styles.detailLink}>
                    {t('experience.viewDetails')} · {details.find((d) => d.id === exp.detalle)?.titulo}
                    <FiArrowRight />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiencia
