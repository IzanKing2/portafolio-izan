import type { PreviewVariant } from '../data/projects'
import styles from '../styles/ProjectPreview.module.css'

interface Props {
  variant: PreviewVariant
  addressBar: string
}

/**
 * Generated stand-in for a product screenshot: browser chrome plus an
 * abstract wireframe of the interface, shaped per project type.
 */
function ProjectPreview({ variant, addressBar }: Props) {
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.chrome}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotAmber}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
        <span className={styles.address}>{addressBar}</span>
      </div>

      <div className={styles.viewport}>
        {variant === 'grid' && (
          <div className={styles.grid}>
            <div className={styles.topbar}>
              <span className={styles.barAccent} />
              <span className={styles.barLine} />
            </div>
            <div className={styles.tiles}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={styles.tile}>
                  <span className={styles.tileImage} />
                  <span className={styles.tileLine} />
                  <span className={`${styles.tileLine} ${styles.tileLineShort}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {variant === 'list' && (
          <div className={styles.grid}>
            <div className={styles.topbar}>
              <span className={styles.barAccent} />
              <span className={styles.barLine} />
            </div>
            <div className={styles.rows}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={styles.row}>
                  <span className={styles.rowThumb} />
                  <span className={styles.rowBody}>
                    <span className={styles.tileLine} />
                    <span className={`${styles.tileLine} ${styles.tileLineShort}`} />
                  </span>
                  <span className={styles.rowTag} />
                </div>
              ))}
            </div>
          </div>
        )}

        {variant === 'api' && (
          <pre className={styles.code}>
            <span className={styles.codeLine}>
              <span className={styles.punct}>{'{'}</span>
            </span>
            <span className={styles.codeLine}>
              {'  '}
              <span className={styles.key}>"id"</span>
              <span className={styles.punct}>: </span>
              <span className={styles.num}>1</span>
              <span className={styles.punct}>,</span>
            </span>
            <span className={styles.codeLine}>
              {'  '}
              <span className={styles.key}>"title"</span>
              <span className={styles.punct}>: </span>
              <span className={styles.str}>"Sprint retro"</span>
              <span className={styles.punct}>,</span>
            </span>
            <span className={styles.codeLine}>
              {'  '}
              <span className={styles.key}>"userId"</span>
              <span className={styles.punct}>: </span>
              <span className={styles.num}>42</span>
              <span className={styles.punct}>,</span>
            </span>
            <span className={styles.codeLine}>
              {'  '}
              <span className={styles.key}>"tags"</span>
              <span className={styles.punct}>: [</span>
              <span className={styles.str}>"work"</span>
              <span className={styles.punct}>]</span>
            </span>
            <span className={styles.codeLine}>
              <span className={styles.punct}>{'}'}</span>
            </span>
            <span className={`${styles.codeLine} ${styles.status}`}>200 OK · 34 ms</span>
          </pre>
        )}
      </div>
    </div>
  )
}

export default ProjectPreview
