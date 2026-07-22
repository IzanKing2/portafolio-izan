import { Suspense, lazy } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import SEO from './components/SEO'

const SobreMi = lazy(() => import('./components/SobreMi'))
const Tecnologias = lazy(() => import('./components/Tecnologias'))
const Proyectos = lazy(() => import('./components/Proyectos'))
const Experiencia = lazy(() => import('./components/Experiencia'))
const Contacto = lazy(() => import('./components/Contacto'))

function App() {
  return (
    <>
      <SEO />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Cargando...</div>}>
        <SobreMi />
        <Tecnologias />
        <Proyectos />
        <Experiencia />
        <Contacto />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
