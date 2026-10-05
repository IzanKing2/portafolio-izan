import { FiArrowUp } from 'react-icons/fi'
import styles from '../styles/Footer.module.css'
import { useTranslation } from '../i18n/I18nProvider'
import { socials } from '../data/socials'

function Footer() {
  const { t } = useTranslation()

  const navLinks = [
    { id: 'projects', label: t('nav.work') },
    { id: 'method', label: t('nav.method') },
    { id: 'tech', label: t('nav.tech') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="#hero" className={styles.logo}>
            IZAN
            <span className={styles.logoDot} />
          </a>
          <p className={styles.built}>{t('footer.built')}</p>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Izan Carlo Celis Afonso</p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          {navLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={styles.navLink}>
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.socials}>
            {socials.map(({ href, labelKey, Icon }) => (
              <a
                key={labelKey}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={styles.socialLink}
                aria-label={t(labelKey)}
              >
                <Icon />
              </a>
            ))}
          </div>

          <a href="#hero" className={styles.backToTop} aria-label={t('footer.backToTop')}>
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
