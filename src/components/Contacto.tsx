import { useState } from 'react'
import { MdEmail, MdPhone, MdCheckCircle } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Contacto.module.css'

function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ref, inView] = useInView()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate network request
    setTimeout(() => setIsSubmitted(true), 500)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" ref={ref} className={`${styles.section} fade-in ${inView ? 'visible' : ''}`}>
      <h2 className={styles.title}>CONTACT</h2>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.intro}>
            Have a project in mind or looking for a developer?
            Let's talk.
          </p>
          <div className={styles.contacts}>
            <a href="mailto:izanwork2@gmail.com" className={styles.contactCard} aria-label="Send Email">
              <div className={styles.iconWrapper}>
                <MdEmail />
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>izanwork2@gmail.com</span>
              </div>
            </a>
            <a
              href="https://github.com/IzanKing2"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              aria-label="GitHub Profile"
            >
              <div className={styles.iconWrapper}>
                <FaGithub />
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>GitHub</span>
                <span className={styles.contactValue}>github.com/IzanKing2</span>
              </div>
            </a>
            <a href="tel:+34682202288" className={styles.contactCard} aria-label="Call Phone">
              <div className={styles.iconWrapper}>
                <MdPhone />
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Phone</span>
                <span className={styles.contactValue}>+34 682 20 22 88</span>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                className={styles.form} 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.field}>
                  <label htmlFor="nombre" className={styles.label}>Name</label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
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
                    required
                    className={styles.input}
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="mensaje" className={styles.label}>Message</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    className={styles.textarea}
                    value={form.mensaje}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className={styles.submit}>Send Message</button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className={styles.successCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <MdCheckCircle className={styles.successIcon} />
                <h3>Message Sent!</h3>
                <p>Thank you, Izan will get back to you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Contacto
