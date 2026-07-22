import { useState } from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import styles from '../styles/Contacto.module.css'

function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [ref, inView] = useInView()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" ref={ref} className={`${styles.section} fade-in ${inView ? 'visible' : ''}`}>
      <h2 className={styles.title}>Contacto</h2>
      <div className={styles.decorativeLine}></div>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.intro}>
            ¿Tienes un proyecto en mente o buscas un desarrollador?
            Hablemos.
          </p>
          <div className={styles.contacts}>
            <a href="mailto:izanwork2@gmail.com" className={styles.contactLink}>
              <MdEmail style={{ fontSize: '1.2rem', color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
              izanwork2@gmail.com
            </a>
            <a
              href="https://github.com/IzanKing2"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <FaGithub style={{ fontSize: '1.2rem', color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
              github.com/IzanKing2
            </a>
            <a href="tel:+34682202288" className={styles.contactLink}>
              <MdPhone style={{ fontSize: '1.2rem', color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
              +34 682 20 22 88
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="nombre" className={styles.label}>Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                className={styles.input}
                value={form.nombre}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                className={styles.textarea}
                value={form.mensaje}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={styles.submit}>Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacto
