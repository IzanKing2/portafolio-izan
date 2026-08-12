import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { stats } from '../data/technologies'
import profilePhoto from '../assets/profile_iz.png'
import styles from '../styles/SobreMi.module.css'

const values = ['Proactive', 'Team Player', 'Adaptable', 'Detail-Oriented', 'UI/UX']

function SobreMi() {
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
              <span className={styles.terminalTitle}>~/izan — whoami</span>
            </div>
            <img src={profilePhoto} alt="Izan Carlo Celis Afonso" className={styles.photo} />
            <div className={styles.terminalFooter}>
              <span className={styles.prompt}>$</span> izan --role &quot;full-stack developer&quot;
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
          <span className={styles.eyebrow}>05 — Profile</span>
          <h2 className={styles.title}>About</h2>

          <p className={styles.text}>
            I&rsquo;m a Full Stack Web Developer with a degree in Web Application Development
            (DAW) and over a year of hands-on experience at Servibyte S.L. I build interfaces
            that don&rsquo;t just work but feel right, and back them with APIs and infrastructure
            that hold up.
          </p>
          <p className={styles.text}>
            What changed my range is how I work: I write the specification first, then use AI to
            move fast inside it, and verify everything before it ships. That is what let me take
            a product live on <strong>Next.js and Supabase</strong> — a stack I was never taught
            in class — without lowering the bar on quality.
          </p>
          <p className={styles.text}>
            I work with independent judgment, learn quickly, and I&rsquo;m at my best on a team
            that reviews each other&rsquo;s work.
          </p>

          <div className={styles.values}>
            {values.map((v) => (
              <span key={v} className={styles.pill}>
                {v}
              </span>
            ))}
          </div>

          <div className={styles.stats}>
            {stats.map((stat, i) => (
              <div key={stat.label} className={styles.stat}>
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
