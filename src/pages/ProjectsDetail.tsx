import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import CustomCursor from '../components/CustomCursor'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { I18nProvider, useTranslation } from '../i18n/I18nProvider'
import { isLocale, defaultLocale } from '../i18n/config'
import { getProjectDetails, type ProjectKind } from '../data/projectDetails'
import styles from '../styles/ProjectsDetail.module.css'

const kindKey = {
  product: 'details.kindProduct',
  professional: 'details.kindProfessional',
  academic: 'details.kindAcademic',
} as const satisfies Record<ProjectKind, string>

function ProjectsDetailContent() {
  const { t, locale } = useTranslation()
  const projects = getProjectDetails(locale)
  const [active, setActive] = useState(projects[0].id)

  // Highlight the project being read in the index.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as typeof active)
        })
      },
      { rootMargin: '-20% 0px -65% 0px' }
    )
    projects.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <SEO path="/projects" title={t('details.seoTitle')} description={t('details.seoDescription')} />
      <CustomCursor />
      <Navbar />

      <main className={styles.page}>
        <header className={styles.head}>
          <a href={`/${locale}#projects`} className={styles.back}>
            <FiArrowLeft /> {t('details.back')}
          </a>
          <span className={styles.eyebrow}>{t('details.eyebrow')}</span>
          <h1 className={styles.title}>{t('details.title')}</h1>
          <p className={styles.intro}>{t('details.intro')}</p>
        </header>

        <div className={styles.layout}>
          <nav className={styles.index} aria-label={t('details.index')}>
            <h2 className={styles.indexTitle}>{t('details.index')}</h2>
            {projects.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className={`${styles.indexLink} ${active === p.id ? styles.indexActive : ''}`}
              >
                {p.titulo}
                <small>{t(kindKey[p.kind])}</small>
              </a>
            ))}
          </nav>

          <div className={styles.list}>
            {projects.map((p) => (
              <article key={p.id} id={p.id} className={styles.project}>
                <span className={`${styles.kind} ${p.kind === 'product' ? styles.kindProduct : ''}`}>
                  {t(kindKey[p.kind])}
                </span>
                <h2 className={styles.name}>{p.titulo}</h2>
                <p className={styles.sub}>{p.subtitulo}</p>

                {(p.demo || p.github) && (
                  <div className={styles.links}>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink /> {t('projects.liveDemo')}
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> {t('projects.viewCode')}
                      </a>
                    )}
                  </div>
                )}

                <div className={styles.lead}>
                  <div>
                    <h3 className={styles.label}>{t('details.summary')}</h3>
                    <p className={styles.text}>{p.resumen}</p>
                  </div>
                  <div>
                    <h3 className={styles.label}>{t('details.role')}</h3>
                    <p className={styles.text}>{p.rol}</p>
                  </div>
                </div>

                {p.metricas.length > 0 && (
                  <div className={styles.metrics}>
                    {p.metricas.map((m) => (
                      <div key={m.label} className={styles.metric}>
                        <b>{m.value}</b>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <section className={styles.block}>
                  <h3 className={styles.label}>{t('details.decisions')}</h3>
                  <div className={styles.grid}>
                    {p.decisiones.map((d) => (
                      <div key={d.title} className={styles.card}>
                        <h4>{d.title}</h4>
                        <p>{d.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {p.calidad.length > 0 && (
                  <section className={styles.block}>
                    <h3 className={styles.label}>{t('details.quality')}</h3>
                    <ul className={styles.quality}>
                      {p.calidad.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </section>
                )}

                <section className={styles.block}>
                  <h3 className={styles.label}>{t('details.stack')}</h3>
                  <div className={styles.pills}>
                    {p.stack.map((tech) => (
                      <span key={tech} className={styles.pill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function ProjectsDetail() {
  const { lang } = useParams()
  const locale = isLocale(lang) ? lang : defaultLocale

  return (
    <I18nProvider locale={locale}>
      <ProjectsDetailContent />
    </I18nProvider>
  )
}

export default ProjectsDetail
