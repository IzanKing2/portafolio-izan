import { motion } from 'framer-motion'
import styles from '../styles/Method.module.css'
import { getMethodSteps } from '../data/method'
import { useTranslation } from '../i18n/I18nProvider'

const pipeline = ['spec', 'implement', 'verify', 'ship']

function Method() {
  const { t, locale } = useTranslation()
  const methodSteps = getMethodSteps(locale)

  return (
    <section id="method" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('method.eyebrow')}</span>
          <h2 className={styles.title}>{t('method.title')}</h2>
          <p className={styles.intro}>{t('method.intro')}</p>

          <div className={styles.pipeline}>
            <span className={styles.prompt}>$</span>
            {pipeline.map((step, i) => (
              <span key={step} className={styles.pipelineStep}>
                {step}
                {i < pipeline.length - 1 && <span className={styles.arrow}>→</span>}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {methodSteps.map((step, i) => (
            <motion.article
              key={step.id}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span className={styles.index}>{step.index}</span>
              <h3 className={styles.cardTitle}>{step.titulo}</h3>
              <p className={styles.cardText}>{step.descripcion}</p>
              <div className={styles.tags}>
                {step.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Method
