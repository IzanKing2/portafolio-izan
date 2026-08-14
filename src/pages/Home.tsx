import { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
import CustomCursor from '../components/CustomCursor'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { I18nProvider } from '../i18n/I18nProvider'
import { isLocale, defaultLocale } from '../i18n/config'

const Proyectos = lazy(() => import('../components/Proyectos'))
const Method = lazy(() => import('../components/Method'))
const Tecnologias = lazy(() => import('../components/Tecnologias'))
const Experiencia = lazy(() => import('../components/Experiencia'))
const SobreMi = lazy(() => import('../components/SobreMi'))
const Contacto = lazy(() => import('../components/Contacto'))

function Home() {
  const { lang } = useParams()
  const locale = isLocale(lang) ? lang : defaultLocale

  return (
    <I18nProvider locale={locale}>
      <SEO />
      <CustomCursor />
      <Navbar />
      <Hero />
      <main>
        <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
          <Proyectos />
          <Method />
          <Tecnologias />
          <Experiencia />
          <SobreMi />
          <Contacto />
        </Suspense>
      </main>
      <Footer />
    </I18nProvider>
  )
}

export default Home
