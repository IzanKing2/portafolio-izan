import { Suspense, lazy } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import SEO from './components/SEO'

const Proyectos = lazy(() => import('./components/Proyectos'))
const Method = lazy(() => import('./components/Method'))
const Tecnologias = lazy(() => import('./components/Tecnologias'))
const Experiencia = lazy(() => import('./components/Experiencia'))
const SobreMi = lazy(() => import('./components/SobreMi'))
const Contacto = lazy(() => import('./components/Contacto'))

function App() {
  return (
    <>
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
    </>
  )
}

export default App
