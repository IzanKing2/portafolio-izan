import styles from '../styles/Footer.module.css'
import { useTranslation } from '../i18n/I18nProvider'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Izan Carlo Celis Afonso
        </p>
        <p className={styles.built}>{t('footer.built')}</p>
      </div>
    </footer>
  )
}

export default Footer
