import { useInView } from '../hooks/useInView'
import styles from '../styles/SobreMi.module.css'

const values = [
  'Proactividad',
  'Trabajo en equipo',
  'Adaptabilidad',
  'Atención al detalle',
  'UI/UX',
]

function SobreMi() {
  const [ref, inView] = useInView()

  return (
    <section id="sobre-mi" ref={ref} className={`${styles.section} fade-in ${inView ? 'visible' : ''}`}>
      <h2 className={styles.title}>Sobre mí</h2>
      <div className={styles.decorativeLine}></div>
      <div className={styles.content}>
        <div className={styles.textColumn}>
          <p>
            Soy un desarrollador web Full Stack con ojo para el diseño
            y pasión por construir interfaces que no solo funcionen, sino que
            se sientan bien. Me formé en DAW y llevo más de un año aplicando
            lo aprendido en entorno real en Servibyte S.L.
          </p>
          <p>
            Trabajo con criterio propio, aprendo rápido y disfruto
            colaborando en equipo. Uso IA como herramienta, no como muleta.
          </p>
          <div className={styles.values}>
            {values.map((v) => (
              <span key={v} className={styles.pill}>{v}</span>
            ))}
          </div>
        </div>
        <div className={styles.avatarColumn}>
          <div className={styles.avatar}>Foto</div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
