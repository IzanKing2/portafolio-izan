import { motion } from 'framer-motion'
import styles from '../styles/ArchitectureDiagram.module.css'

const layers = [
  { name: 'AI Engineering', meta: 'CLAUDE CODE · SPEC-DRIVEN', accent: true },
  { name: 'Frontend', meta: 'REACT · NEXT.JS · ANGULAR', accent: false },
  { name: 'API', meta: 'REST · JWT AUTH', accent: false },
  { name: 'Backend', meta: 'LARAVEL · SPRING BOOT', accent: false },
  { name: 'Database', meta: 'POSTGRES · MYSQL', accent: false },
]

/**
 * Hero strip: the layers I actually work across, labelled with the stack I
 * use at each one. Sits below the copy so the brain animation stays visible.
 */
function ArchitectureDiagram() {
  return (
    <div className={styles.strip} aria-hidden="true">
      <span className={styles.label}>AI-AUGMENTED ARCHITECTURE</span>

      <div className={styles.layers}>
        {layers.map((layer, i) => (
          <motion.div
            key={layer.name}
            className={`${styles.layer} ${layer.accent ? styles.layerAccent : ''}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.12, duration: 0.5, ease: 'easeOut' }}
          >
            <span className={styles.name}>{layer.name}</span>
            <span className={styles.meta}>{layer.meta}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ArchitectureDiagram
