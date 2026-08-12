import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import ArchitectureDiagram from './ArchitectureDiagram'
import styles from '../styles/Hero.module.css'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const sizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    sizeCanvas()

    const particles: Particle[] = Array.from({ length: 46 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.3 + 0.12,
    }))

    const mouse: { x: number | null; y: number | null } = { x: null, y: null }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < 140) {
            const force = ((140 - dist) / 140) * 0.02
            p.vx += dx * force
            p.vy += dy * force
            const speed = Math.hypot(p.vx, p.vy)
            if (speed > 1.6) {
              p.vx = (p.vx / speed) * 1.6
              p.vy = (p.vy / speed) * 1.6
            }
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245, 196, 0, ${p.opacity})`
        ctx.fill()
      })

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(245, 196, 0, ${0.07 * (1 - dist / 90)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', sizeCanvas)

    return () => {
      if (animRef.current !== null) cancelAnimationFrame(animRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', sizeCanvas)
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for opportunities
          </span>

          <h1 className={styles.headline}>
            Full-stack development from UI to infrastructure.
          </h1>

          <p className={styles.subline}>
            I build and ship complete web products — interface, API, database and deployment.
            I also work with AI as an engineering instrument rather than a shortcut:
            <strong> spec-driven development</strong> lets me deliver in stacks I was never
            formally taught, at the same standard as the ones I was.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              View Projects <FiArrowRight />
            </a>
            <a
              href="/Izan_CV.pdf"
              className={`${styles.btn} ${styles.btnGhost}`}
              download="Izan_Carlo_Celis_Afonso_CV.pdf"
            >
              <FiDownload /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <ArchitectureDiagram />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
