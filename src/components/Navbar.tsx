import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'
import { useTranslation } from '../i18n/I18nProvider'
import { locales, type Locale } from '../i18n/config'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('')
  const { t, locale } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const sections = [
    { id: 'projects', label: t('nav.work') },
    { id: 'method', label: t('nav.method') },
    { id: 'tech', label: t('nav.tech') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'about', label: t('nav.about') },
  ]

  const otherLocale: Locale = locales.find((l) => l !== locale) ?? locale

  const switchLanguage = () => {
    window.localStorage.setItem('lang', otherLocale)
    navigate(`/${otherLocale}${location.hash}`, { replace: true })
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.navbarWrapper}>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo} onClick={() => setMenuOpen(false)}>
          IZAN
          <span className={styles.logoDot} />
        </a>

        <ul className={styles.links}>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.link} ${activeSection === id ? styles.active : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            onClick={switchLanguage}
            className={styles.iconBtn}
            aria-label={t('nav.switchLanguage')}
          >
            {otherLocale.toUpperCase()}
          </button>
          <button onClick={toggleTheme} className={styles.iconBtn} aria-label={t('nav.toggleTheme')}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <a href="#contact" className={styles.cta}>
            {t('nav.cta')}
          </a>
          <button
            className={`${styles.iconBtn} ${styles.menuBtn}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            {t('nav.contact')}
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar
