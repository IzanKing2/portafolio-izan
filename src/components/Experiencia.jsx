import { useInView } from '../hooks/useInView'
import { MdWork } from 'react-icons/md'
import styles from '../styles/Experiencia.module.css'

const experiences = [
  {
    empresa: 'Servibyte S.L.',
    ubicacion: 'San Fernando',
    rol: 'Desarrollador Web — Beca Cataliza',
    periodo: '2026 — Actual',
    descripcion: [
      'Desarrollo integral de aplicaciones web con soluciones escalables.',
      'Trabajo en equipo colaborativo y adaptación a requisitos del proyecto.',
    ],
  },
  {
    empresa: 'Servibyte S.L.',
    ubicacion: 'San Fernando',
    rol: 'Desarrollador Web — Prácticas FP Dual',
    periodo: '2025 — 2026',
    descripcion: [
      'Ciclo completo de desarrollo software, backend y frontend.',
      'Control de versiones, despliegue de proyectos y metodologías ágiles.',
    ],
  },
]

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
