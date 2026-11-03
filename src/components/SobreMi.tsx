import { motion } from 'framer-motion'
import styles from '../styles/SobreMi.module.css'
import { useTranslation } from '../i18n/I18nProvider'

/** Wraps every occurrence of the product name in <strong>. */
function highlightProduct(text: string, name: string) {
  return text.split(name).flatMap((part, i, parts) =>
    i < parts.length - 1 ? [part, <strong key={i}>{name}</strong>] : [part]
  )
}

function SobreMi() {
  const { t } = useTranslation()
  const values = [t('about.value1'), t('about.value2'), t('about.value3'), t('about.value4'), t('about.value5')]

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>{t('about.eyebrow')}</span>
        <h2 className={styles.title}>{t('about.title')}</h2>

        <motion.div
          className={styles.terminal}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.terminalBar}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotAmber}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
            <span className={styles.terminalTitle}>{t('about.terminalTitle')}</span>
          </div>

          <div className={styles.body}>
            <p>{highlightProduct(t('about.p1'), 'Between')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <p className={styles.facts}>{t('about.facts')}</p>

            <div className={styles.values}>
              {values.map((v) => (
                <span key={v} className={styles.pill}>
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.terminalFooter}>
            <span className={styles.prompt}>$</span> {t('about.terminalFooter')}
            <span className={styles.cursor} aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SobreMi
