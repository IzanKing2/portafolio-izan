import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Hero.module.css'

const frases = [
  'Código limpio, diseño con criterio, entrega real.',
  'Full Stack Developer apasionado por el detalle.',
  'Construyo interfaces que se sienten bien.',
]

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const currentPhrase = frases[phraseIndex]

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 60)
        return () => clearTimeout(timeout)
      }

      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 35)
      return () => clearTimeout(timeout)
    }

    setIsDeleting(false)
    setPhraseIndex((phraseIndex + 1) % frases.length)
  }, [charIndex, isDeleting, phraseIndex])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.1,
    }))

    const mouse = { x: null, y: null }
    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        if (mouse.x !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < 150) {
            const force = ((150 - dist) / 150) * 0.03
            p.vx += dx * force
            p.vy += dy * force
            const speed = Math.hypot(p.vx, p.vy)
            if (speed > 2) {
              p.vx = (p.vx / speed) * 2
              p.vy = (p.vy / speed) * 2
            }
          }
        }

        particles.forEach((other) => {
          if (other === p) return
          const dx = p.x - other.x
          const dy = p.y - other.y
          const d = Math.hypot(dx, dy)
          if (d < 20 && d > 0) {
            p.vx += (dx / d) * 0.3
            p.vy += (dy / d) * 0.3
          }
        })

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245, 196, 0, ${p.opacity})`
        ctx.fill()
      })

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 80) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(245, 196, 0, ${0.06 * (1 - dist / 80)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
      <div className={styles.content}>
        <h1 className={styles.name}>Izan Carlo Celis Afonso</h1>
        <p className={styles.title}>Desarrollador Web Full Stack</p>
        <p className={styles.phrase}>
          {displayText}
          <span className={styles.cursor}>|</span>
        </p>
        <div className={styles.actions}>
          <a href="#proyectos" className={`${styles.btn} ${styles.btnPrimary}`}>Ver proyectos</a>
          <a href="/cv.pdf" download className={`${styles.btn} ${styles.btnSecondary}`}>Descargar CV</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
