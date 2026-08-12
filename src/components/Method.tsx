import { motion } from 'framer-motion'
import styles from '../styles/Method.module.css'
import { methodSteps } from '../data/method'

const pipeline = ['spec', 'implement', 'verify', 'ship']

function Method() {
  return (
    <section id="method" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>02 — Method</span>
          <h2 className={styles.title}>AI-Augmented Delivery</h2>
          <p className={styles.intro}>
            AI is the reason a one-person project can carry the scope of a team&rsquo;s. It is not
            the reason the code is correct — that is still process. This is how I combine the two.
          </p>

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
              key={step.index}
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
