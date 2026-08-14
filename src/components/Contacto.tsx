import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FiArrowUpRight } from 'react-icons/fi'
import styles from '../styles/Contacto.module.css'
import { useTranslation } from '../i18n/I18nProvider'

function Contacto() {
  const { t } = useTranslation()

  const socials = [
    { href: 'https://github.com/IzanKing2', label: t('contact.githubLabel'), Icon: FaGithub },
    {
      href: 'https://www.linkedin.com/in/izan-celis-afonso/',
      label: t('contact.linkedinLabel'),
      Icon: FaLinkedin,
    },
    { href: 'mailto:izanwork2@gmail.com', label: t('contact.emailLabel'), Icon: MdEmail },
  ]

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
          <span className={styles.eyebrow}>{t('contact.eyebrow')}</span>
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
          {t('contact.headlineLine1')}
          <br />
          {t('contact.headlineLine2')}
        </h2>

        <div className={styles.bottom}>
          <div className={styles.details}>
            <a href="mailto:izanwork2@gmail.com" className={styles.detail}>
              izanwork2@gmail.com
            </a>
          </div>

          <a
            href="mailto:izanwork2@gmail.com?subject=Let%27s%20work%20together"
            className={styles.send}
          >
            {t('contact.sendMessage')} <FiArrowUpRight />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contacto
