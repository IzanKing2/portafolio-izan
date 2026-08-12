import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Izan Carlo Celis Afonso
        </p>
        <p className={styles.built}>Built with React + Vite + TypeScript</p>
      </div>
    </footer>
  )
}

export default Footer
