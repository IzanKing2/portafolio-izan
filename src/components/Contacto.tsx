import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FiArrowUpRight } from 'react-icons/fi'
import styles from '../styles/Contacto.module.css'

const socials = [
  { href: 'https://github.com/IzanKing2', label: 'GitHub Profile', Icon: FaGithub },
  {
    href: 'https://www.linkedin.com/in/izan-celis-afonso/',
    label: 'LinkedIn Profile',
    Icon: FaLinkedin,
  },
  { href: 'mailto:izanwork2@gmail.com', label: 'Send Email', Icon: MdEmail },
]

function Contacto() {
  return (
    <section id="contact" className={styles.section}>
      <motion.div
        className={styles.block}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.top}>
          <span className={styles.eyebrow}>06 — Contact</span>
          <div className={styles.socials}>
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={styles.socialLink}
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <h2 className={styles.headline}>
          Let&rsquo;s build
          <br />
          something useful.
        </h2>

        <div className={styles.bottom}>
          <div className={styles.details}>
            <a href="mailto:izanwork2@gmail.com" className={styles.detail}>
              izanwork2@gmail.com
            </a>
            <a href="tel:+34682202288" className={styles.detail}>
              +34 682 20 22 88
            </a>
          </div>

          <a
            href="mailto:izanwork2@gmail.com?subject=Let%27s%20work%20together"
            className={styles.send}
          >
            Send Message <FiArrowUpRight />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contacto
