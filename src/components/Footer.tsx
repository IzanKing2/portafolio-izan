import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>
          Diseñado y desarrollado por Izan Carlo Celis Afonso
        </p>
        <p className={styles.text}>© 2026</p>
        <div className={styles.socials}>
          <a
            href="https://github.com/IzanKing2"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub />
          </a>
          <a href="mailto:izanwork2@gmail.com" className={styles.socialLink}>
            <MdEmail />
          </a>
        </div>
        <p className={styles.built}>Construido con React + Vite</p>
      </div>
    </footer>
  )
}

export default Footer
