import { motion } from 'framer-motion'
import styles from '../styles/Tecnologias.module.css'
import { getTechGroups } from '../data/technologies'
import { useTranslation } from '../i18n/I18nProvider'

function Tecnologias() {
  const { t, locale } = useTranslation()
  const groups = getTechGroups(locale)

  return (
    <section id="tech" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('tech.eyebrow')}</span>
          <h2 className={styles.title}>{t('tech.title')}</h2>
        </div>

        <div className={styles.rows}>
          {groups.map((group, i) => {
            const highlighted = group.id === 'ai-method'
            return (
              <motion.div
                key={group.id}
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
