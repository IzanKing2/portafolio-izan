import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import styles from '../styles/Contacto.module.css'
import { useTranslation } from '../i18n/I18nProvider'
import { socials } from '../data/socials'

const EMAIL = 'izanwork2@gmail.com'

function Contacto() {
  const { t } = useTranslation()
  const profiles = socials.filter(({ href }) => href.startsWith('http'))

  return (
    <section id="contact" className={styles.section}>
      <motion.div
        className={styles.block}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.eyebrow}>{t('contact.eyebrow')}</span>

        <h2 className={styles.headline}>
          {t('contact.headlineLine1')}
          <em className={styles.accent}>{t('contact.headlineLine2')}</em>
        </h2>

        <div className={styles.actions}>
          <a
            href={`mailto:${EMAIL}?subject=Let%27s%20work%20together`}
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            {t('contact.sendMessage')} <FiArrowRight />
          </a>

          {profiles.map(({ href, name, labelKey, Icon }) => (
            <a
              key={labelKey}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnGhost}`}
              aria-label={t(labelKey)}
            >
              <Icon /> {name}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Contacto
