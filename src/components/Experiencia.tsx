import { MdWork } from 'react-icons/md'
import styles from '../styles/Experiencia.module.css'
import { motion } from 'framer-motion'

import { experiences } from '../data/experience'

function Experiencia() {

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>EXPERIENCE</h2>
        </div>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.periodo} 
              className={styles.item}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`${styles.dot} ${index === 0 ? styles.activeDot : ''}`}></div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.rol}</h3>
                    <p className={styles.company}>{exp.empresa} · {exp.ubicacion}</p>
                  </div>
                  <span className={styles.period}>{exp.periodo}</span>
                </div>
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
