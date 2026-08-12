import { motion } from 'framer-motion'
import styles from '../styles/ArchitectureDiagram.module.css'

const layers = [
  { name: 'Frontend', meta: 'REACT · NEXT.JS · ANGULAR' },
  { name: 'API', meta: 'REST · JWT AUTH' },
  { name: 'Backend', meta: 'LARAVEL · SPRING BOOT' },
  { name: 'Database', meta: 'POSTGRES · MYSQL' },
]

/**
 * Decorative-but-honest hero visual: the layers I actually work across,
 * labelled with the stack I use at each one.
 */
function ArchitectureDiagram() {
  return (
    <div className={styles.frame} aria-hidden="true">
      <span className={styles.frameLabel}>ARCHITECTURE</span>

      <div className={styles.stack}>
        {layers.map((layer, i) => (
          <div key={layer.name}>
            <motion.div
              className={styles.stage}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease: 'easeOut' }}
            >
              <div className={styles.node}>{layer.name}</div>
              <span className={styles.meta}>{layer.meta}</span>
            </motion.div>

            {i < layers.length - 1 && (
              <motion.div
                className={styles.connector}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 + i * 0.15, duration: 0.4 }}
              >
                <span className={styles.line}>
                  <span className={styles.packet} style={{ animationDelay: `${i * 0.6}s` }} />
                </span>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArchitectureDiagram
