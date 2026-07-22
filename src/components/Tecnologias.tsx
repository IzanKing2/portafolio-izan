import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import styles from '../styles/Tecnologias.module.css'

import { stats, groups } from '../data/technologies'

function Tecnologias() {
  const [ref, inView] = useInView()
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!inView) return

    const intervals = stats.map((stat, i) => {
      const step = Math.ceil(1200 / stat.numero)
      return setInterval(() => {
        setCounts((prev) => {
          const next = [...prev]
          if (next[i] < stat.numero) next[i]++
          return next
        })
      }, step)
    })

    return () => intervals.forEach(clearInterval)
  }, [inView])

  return (
    <section id="tecnologias" ref={ref} className={`${styles.section} fade-in ${inView ? 'visible' : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tecnologías</h2>
        <div className={styles.decorativeLine}></div>
        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statNumber}>{counts[i]}{stat.sufijo}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.groups}>
          {groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.pills}>
                {group.items.map((item) => (
                  <span key={item} className={styles.pill}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tecnologias
