import { useInView } from '../hooks/useInView'
import { MdWork } from 'react-icons/md'
import styles from '../styles/Experiencia.module.css'

import { experiences } from '../data/experience'

function Experiencia() {
  const [ref, inView] = useInView()

  return (
    <section id="experiencia" ref={ref} className={`${styles.section} fade-in ${inView ? 'visible' : ''}`}>
      <h2 className={styles.title}>Experiencia</h2>
      <div className={styles.decorativeLine}></div>
      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={exp.periodo} className={styles.item}>
            <MdWork style={{ position: 'absolute', left: '-2.5rem', top: '0.15rem', fontSize: '1rem', color: 'var(--color-accent)' }} />
            <p className={styles.company}>{exp.empresa} · {exp.ubicacion}</p>
            <p className={styles.role}>{exp.rol}</p>
            <p className={styles.period}>{exp.periodo}</p>
            <ul className={styles.description}>
              {exp.descripcion.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experiencia
