import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import ArchitectureDiagram from './ArchitectureDiagram'
import NeuralBrainCanvas from './NeuralBrainCanvas'
import styles from '../styles/Hero.module.css'
import { useTranslation } from '../i18n/I18nProvider'

/** Headline figures, taken from the Between and GestiCAB write-ups. */
const proof = [
  { value: '800+', label: 'hero.proof1' },
  { value: '185', label: 'hero.proof2' },
  { value: '189', label: 'hero.proof3' },
] as const

function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className={styles.hero}>
      <NeuralBrainCanvas className={styles.canvas} />

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            {t('hero.badge')}
          </span>

          <h1 className={styles.headline}>{t('hero.headline')}</h1>

          <p className={styles.subline}>
            {t('hero.sublinePre')}
            <strong> {t('hero.sublineStrong')}</strong> {t('hero.sublinePost')}
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              {t('hero.ctaProjects')} <FiArrowRight />
            </a>
            <a
              href="/CV_Izan_Celis_2026.pdf"
              className={`${styles.btn} ${styles.btnGhost}`}
              download="Izan_Carlo_Celis_Afonso_CV.pdf"
            >
              <FiDownload /> {t('hero.ctaDownloadCv')}
            </a>
          </div>

          <ul className={styles.proof} aria-label={t('hero.proofLabel')}>
            {proof.map((item) => (
              <li key={item.value} className={styles.proofItem}>
                <span className={styles.proofValue}>{item.value}</span>
                <span className={styles.proofLabel}>{t(item.label)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className={styles.strip}>
        <ArchitectureDiagram />
      </div>
    </section>
  )
}

export default Hero
