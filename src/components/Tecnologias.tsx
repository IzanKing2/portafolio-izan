import { motion } from 'framer-motion'
import styles from '../styles/Tecnologias.module.css'
import { groups } from '../data/technologies'

function Tecnologias() {
  return (
    <section id="tech" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>03 — Stack</span>
          <h2 className={styles.title}>Technical Toolkit</h2>
        </div>

        <div className={styles.rows}>
          {groups.map((group, i) => {
            const highlighted = group.title === 'AI & Method'
            return (
              <motion.div
                key={group.title}
                className={`${styles.row} ${highlighted ? styles.highlight : ''}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <span className={styles.rowLabel}>{group.title}</span>
                <div className={styles.pills}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.pill}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Tecnologias
