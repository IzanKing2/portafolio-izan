import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import ArchitectureDiagram from './ArchitectureDiagram'
import NeuralBrainCanvas from './NeuralBrainCanvas'
import styles from '../styles/Hero.module.css'
import { useTranslation } from '../i18n/I18nProvider'

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
        </motion.div>
      </div>

      <div className={styles.strip}>
        <ArchitectureDiagram />
      </div>
    </section>
  )
}

export default Hero
