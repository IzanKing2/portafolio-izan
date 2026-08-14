import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { getStats } from '../data/technologies'
import profilePhoto from '../assets/profile_iz.png'
import styles from '../styles/SobreMi.module.css'
import { useTranslation } from '../i18n/I18nProvider'

function SobreMi() {
  const { t, locale } = useTranslation()
  const stats = getStats(locale)
  const values = [t('about.value1'), t('about.value2'), t('about.value3'), t('about.value4'), t('about.value5')]
  const [ref, inView] = useInView<HTMLElement>()
  const [counts, setCounts] = useState(() => stats.map(() => 0))

  useEffect(() => {
    if (!inView) return

    const intervals = stats.map((stat, i) => {
      const step = Math.max(Math.ceil(1200 / stat.numero), 24)
      return setInterval(() => {
        setCounts((prev) => {
          if (prev[i] >= stat.numero) return prev
          const next = [...prev]
          next[i]++
          return next
        })
      }, step)
    })

    return () => intervals.forEach(clearInterval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <section id="about" ref={ref} className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.terminal}>
            <div className={styles.terminalBar}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotAmber}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
              <span className={styles.terminalTitle}>{t('about.terminalTitle')}</span>
            </div>
            <img src={profilePhoto} alt="Izan Carlo Celis Afonso" className={styles.photo} />
            <div className={styles.terminalFooter}>
              <span className={styles.prompt}>$</span> {t('about.terminalFooter')}
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className={styles.eyebrow}>{t('about.eyebrow')}</span>
          <h2 className={styles.title}>{t('about.title')}</h2>

          <p className={styles.text}>{t('about.p1')}</p>
          <p className={styles.text}>{t('about.p2')}</p>
          <p className={styles.text}>{t('about.p3')}</p>

          <div className={styles.values}>
            {values.map((v) => (
              <span key={v} className={styles.pill}>
                {v}
              </span>
            ))}
          </div>

          <div className={styles.stats}>
            {stats.map((stat, i) => (
              <div key={stat.id} className={styles.stat}>
                <span className={styles.statNumber}>
                  {counts[i]}
                  {stat.sufijo && <span className={styles.statSuffix}>{stat.sufijo}</span>}
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SobreMi
