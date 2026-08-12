import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'
import styles from '../styles/Navbar.module.css'

const sections = [
  { id: 'projects', label: 'Work' },
  { id: 'method', label: 'Method' },
  { id: 'tech', label: 'Tech' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('')

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
          <button onClick={toggleTheme} className={styles.iconBtn} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <a href="#contact" className={styles.cta}>
            Let&rsquo;s talk
          </a>
          <button
            className={`${styles.iconBtn} ${styles.menuBtn}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
            Contact
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar
