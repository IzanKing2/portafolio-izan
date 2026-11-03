import { useEffect, useRef } from 'react'
import { sampleBrainPoints } from './brainShape'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  /** Normalised target inside the brain silhouette */
  tx: number
  ty: number
  /** 0..1 — when (within the formation window) this node starts heading to its target */
  delay: number
  phase: number
  /** 1 → 0 decaying "firing" glow */
  pulse: number
}

const START_DELAY = 1200 // ms of free drifting before the brain starts forming
const FORM_SPAN = 4200 // ms over which nodes are released toward the brain
const LINK_DIST = 60
const MOUSE_RADIUS = 120

const smoothstep = (t: number) => {
  const c = Math.min(1, Math.max(0, t))
  return c * c * (3 - 2 * c)
}

interface Props {
  className?: string
}

/**
 * Drifting particle network that gradually organises itself into a brain.
 * Decorative only — hidden from assistive tech, static for reduced-motion users.
 */
function NeuralBrainCanvas({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const count = window.innerWidth < 700 ? 110 : 230
    const shape = sampleBrainPoints(count)

    let width = 0
    let height = 0
    let brain = { cx: 0, cy: 0, size: 0 }

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const wide = width > 960
      // Centre the brain on the right part of the page container, not the window.
      const contentWidth = Math.min(width - 64, 1200)
      const contentLeft = (width - contentWidth) / 2
      brain = {
        cx: wide ? contentLeft + contentWidth * 0.8 : width * 0.5,
        // On wide screens the brain sits above the architecture strip; on
        // narrow ones it fills the upper part of the hero behind the copy.
        cy: wide ? height * 0.44 : height * 0.3,
        size: Math.min(contentWidth * (wide ? 0.46 : 0.9), height * (wide ? 0.72 : 0.5), 640),
      }
    }
    layout()

    const targetX = (n: Node, t: number) =>
      brain.cx + (n.tx + Math.sin(t * 0.0009 + n.phase) * 0.006) * brain.size
    const targetY = (n: Node, t: number) =>
      brain.cy + (n.ty + Math.cos(t * 0.0011 + n.phase) * 0.006) * brain.size

    const nodes: Node[] = shape.map((p) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.3 + 1,
      opacity: Math.random() * 0.35 + 0.4,
      tx: p.x,
      ty: p.y,
      delay: Math.random(),
      phase: Math.random() * Math.PI * 2,
      pulse: 0,
    }))

    const mouse: { x: number | null; y: number | null } = { x: null, y: null }
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      // Behind the copy on narrow screens: keep the brain subtle so text stays legible.
      ctx.globalAlpha = width > 960 ? 1 : 0.5

      for (const n of nodes) {
        const a = Math.min(1, n.opacity + n.pulse * 0.6)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius + n.pulse * 1.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245, 196, 0, ${a})`
        ctx.fill()
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DIST) {
            const glow = Math.max(a.pulse, b.pulse) * 0.35
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(245, 196, 0, ${0.24 * (1 - dist / LINK_DIST) + glow})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
    }

    if (reducedMotion) {
      nodes.forEach((n) => {
        n.x = targetX(n, 0)
        n.y = targetY(n, 0)
      })
      render()
      window.addEventListener('resize', onResizeStatic)
      return () => window.removeEventListener('resize', onResizeStatic)
    }

    function onResizeStatic() {
      layout()
      nodes.forEach((n) => {
        n.x = targetX(n, 0)
        n.y = targetY(n, 0)
      })
      render()
    }

    let raf = 0
    const t0 = performance.now()
    let last = t0

    const frame = (now: number) => {
      const t = now - t0
      // Physics is expressed per 60 fps frame and scaled by elapsed time, so the
      // brain settles the same way on 30 Hz, 60 Hz and 144 Hz displays.
      const dt = Math.min(6, (now - last) / (1000 / 60))
      last = now

      for (const n of nodes) {
        const k = smoothstep((t - START_DELAY - n.delay * FORM_SPAN) / 1800)

        if (k > 0) {
          // spring toward the target, stronger as k → 1, with damping so it settles
          n.vx += (targetX(n, t) - n.x) * 0.006 * k * dt
          n.vy += (targetY(n, t) - n.y) * 0.006 * k * dt
          const damping = Math.pow(1 - 0.07 * k, dt)
          n.vx *= damping
          n.vy *= damping
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_RADIUS && dist > 0.1) {
            const push = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.9
            n.vx += (dx / dist) * push * dt
            n.vy += (dy / dist) * push * dt
          }
        }

        n.x += n.vx * dt
        n.y += n.vy * dt
        if (n.pulse > 0) n.pulse = Math.max(0, n.pulse - 0.014 * dt)

        // free-drift phase: bounce off the edges
        if (k < 1) {
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }

      // occasionally "fire" a neuron once the shape has mostly formed
      if (t > START_DELAY + FORM_SPAN && Math.random() < 0.06 * dt) {
        nodes[Math.floor(Math.random() * nodes.length)].pulse = 1
      }

      render()
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    const onResize = () => layout()
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}

export default NeuralBrainCanvas
