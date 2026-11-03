import { useEffect, type RefObject } from 'react'

/**
 * Writes the scroll progress through `ref` (0..1) to its `--thread-p` custom
 * property, so CSS can light up the vertical "neural thread" as you read.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const p = (window.innerHeight * 0.55 - rect.top) / rect.height
      el.style.setProperty('--thread-p', Math.min(1, Math.max(0, p)).toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])
}
