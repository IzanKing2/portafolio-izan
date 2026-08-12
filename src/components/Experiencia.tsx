import { motion } from 'framer-motion'
import styles from '../styles/Experiencia.module.css'
import { experiences } from '../data/experience'

function Experiencia() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>04 — Career</span>
          <h2 className={styles.title}>Experience</h2>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.periodo}
              className={styles.item}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <span className={styles.period}>{exp.periodo}</span>

              <div className={styles.rail}>
                <span className={`${styles.dot} ${index === 0 ? styles.dotActive : ''}`} />
              </div>

              <div className={styles.content}>
                <h3 className={styles.role}>{exp.rol}</h3>
                <p className={styles.company}>
                  {exp.empresa} <span className={styles.sep}>·</span> {exp.ubicacion}
                </p>
                <ul className={styles.description}>
                  {exp.descripcion.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiencia
