import styles from '../styles/SobreMi.module.css'
import { motion } from 'framer-motion'

const values = [
  'Proactive',
  'Team Player',
  'Adaptable',
  'Detail-Oriented',
  'UI/UX',
]

function SobreMi() {
  return (
    <section id="about" className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>ABOUT ME</h2>
        <div className={styles.content}>
        <div className={styles.textColumn}>
          <p>
            I am a Full Stack Web Developer with an eye for design
            and a passion for building interfaces that not only function flawlessly,
            but feel great to use. I have a degree in Web Application Development (DAW) 
            and over a year of hands-on experience at Servibyte S.L.
          </p>
          <p>
            I work with strong independent judgment, learn quickly, and thrive
            in collaborative team environments. I leverage AI as a powerful tool, not a crutch.
          </p>
          <div className={styles.values}>
            {values.map((v) => (
              <span key={v} className={styles.pill}>{v}</span>
            ))}
          </div>
        </div>
        <div className={styles.avatarColumn}>
          <div className={styles.avatar}>Photo</div>
        </div>
        </div>
      </motion.div>
    </section>
  )
}

export default SobreMi
