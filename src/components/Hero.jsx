import styles from '../styles/Hero.module.css'

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.name}>Izan Carlo Celis Afonso</h1>
      <p className={styles.title}>Desarrollador Web Full Stack</p>
      <p className={styles.phrase}>Código limpio, diseño con criterio, entrega real.</p>
      <div className={styles.actions}>
        <a href="#proyectos" className={`${styles.btn} ${styles.btnPrimary}`}>Ver proyectos</a>
        <a href="/cv.pdf" download className={`${styles.btn} ${styles.btnSecondary}`}>Descargar CV</a>
      </div>
    </section>
  )
}

export default Hero
