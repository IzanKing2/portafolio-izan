import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { getStats } from '../data/technologies'
import styles from '../styles/Tecnologias.module.css'
import { useTranslation } from '../i18n/I18nProvider'

/** Headline numbers that count up the first time they scroll into view. */
function StatsRow() {
  const { locale } = useTranslation()
  const stats = getStats(locale)
  const [ref, inView] = useInView<HTMLDivElement>()
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
    <div ref={ref} className={styles.stats}>
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
  )
}

export default StatsRow
