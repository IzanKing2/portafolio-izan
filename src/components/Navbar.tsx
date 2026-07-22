import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'
import styles from '../styles/Navbar.module.css'

const sections = [
  { id: 'projects', label: 'Work' },
  { id: 'tech', label: 'Tech' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
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
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoIcon}>&lt;Z&gt;</span>
          <span className={styles.logoName}>izan</span>
          <span className={styles.logoBadge}>IZAN.DEV</span>
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
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <a href="#contact" className={styles.hireBtn}>
            Hire Me
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
