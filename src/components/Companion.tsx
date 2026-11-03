import { useCallback, useEffect, useRef, useState } from 'react'
import styles from '../styles/Companion.module.css'
import { useTranslation } from '../i18n/I18nProvider'
import type { TranslationKey } from '../i18n/config'

/** Section id → scripted comment. These are pre-written lines, not a live AI. */
const comments = {
  hero: 'companion.hero',
  projects: 'companion.projects',
  method: 'companion.method',
  tech: 'companion.tech',
  experience: 'companion.experience',
  about: 'companion.about',
  contact: 'companion.contact',
} as const satisfies Record<string, TranslationKey>

type SectionId = keyof typeof comments
const sectionIds = Object.keys(comments) as SectionId[]

const STORAGE_KEY = 'companion-muted'
const AUTO_HIDE_MS = 9000

/**
 * Pixel-art mascot pinned to a corner that comments on the section being
 * read. The lines are scripted per section; it is a guide, not a chatbot.
 * Eyes follow the cursor; motion is disabled for reduced-motion users.
 */
function Companion() {
  const { t } = useTranslation()
  const [active, setActive] = useState<SectionId | null>(null)
  const [open, setOpen] = useState(false)
  const [muted, setMuted] = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)
  const eyesRef = useRef<SVGGElement>(null)
  const mutedRef = useRef(false)
  const hideTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) === '1'
    mutedRef.current = stored
    setMuted(stored)
  }, [])

  const show = useCallback(() => {
    window.clearTimeout(hideTimer.current)
    setOpen(true)
    hideTimer.current = window.setTimeout(() => setOpen(false), AUTO_HIDE_MS)
  }, [])

  // Track which section crosses the middle of the viewport. Sections are
  // lazy-loaded, so keep looking for the missing ones for a few seconds.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id as SectionId
          setActive((prev) => {
            if (prev === id) return prev
            if (!mutedRef.current) show()
            return id
          })
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    const seen = new Set<string>()
    const observeMissing = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && !seen.has(id)) {
          seen.add(id)
          observer.observe(el)
        }
      }
      return seen.size === sectionIds.length
    }
    let tries = 0
    const poll = window.setInterval(() => {
      tries += 1
      if (observeMissing() || tries > 20) window.clearInterval(poll)
    }, 500)
    observeMissing()
    return () => {
      window.clearInterval(poll)
      window.clearTimeout(hideTimer.current)
      observer.disconnect()
    }
  }, [show])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onMove = (e: PointerEvent) => {
      const svg = svgRef.current
      const eyes = eyesRef.current
      if (!svg || !eyes) return
      const rect = svg.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      const dist = Math.hypot(dx, dy) || 1
      const strength = Math.min(1, dist / 300)
      eyes.style.transform = `translate(${(dx / dist) * strength * 3}px, ${(dy / dist) * strength * 2}px)`
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  const setMute = (value: boolean) => {
    mutedRef.current = value
    setMuted(value)
    window.localStorage.setItem(STORAGE_KEY, value ? '1' : '0')
  }

  const onMascotClick = () => {
    if (muted) {
      setMute(false)
      show()
    } else if (open) {
      window.clearTimeout(hideTimer.current)
      setOpen(false)
    } else {
      show()
    }
  }

  const onDismiss = () => {
    window.clearTimeout(hideTimer.current)
    setOpen(false)
    setMute(true)
  }

  const message = active ? t(comments[active]) : ''
  const visible = open && !muted && message !== ''

  return (
    <aside className={styles.dock} aria-label={t('companion.label')}>
      {visible && (
        <div className={styles.bubble} key={active} role="status">
          <p className={styles.text}>{message}</p>
          <div className={styles.meta}>
            <span className={styles.note}>{t('companion.note')}</span>
            <button type="button" className={styles.mute} onClick={onDismiss}>
              {t('companion.mute')}
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className={styles.mascotBtn}
        onClick={onMascotClick}
        aria-label={muted ? t('companion.unmute') : t('companion.toggle')}
        aria-expanded={visible}
      >
        <svg
          ref={svgRef}
          className={`${styles.robot} ${muted ? styles.muted : ''}`}
          viewBox="0 0 64 40"
          width="64"
          height="40"
          shapeRendering="crispEdges"
          aria-hidden="true"
        >
          <rect x="4" y="14" width="8" height="8" className={styles.fill} />
          <rect x="52" y="14" width="8" height="8" className={`${styles.fill} ${styles.arm}`} />
          <rect x="12" y="4" width="40" height="24" className={styles.fill} />
          <rect x="16" y="28" width="4" height="8" className={styles.fill} />
          <rect x="24" y="28" width="4" height="8" className={styles.fill} />
          <rect x="36" y="28" width="4" height="8" className={styles.fill} />
          <rect x="44" y="28" width="4" height="8" className={styles.fill} />
          <g ref={eyesRef} className={styles.look}>
            <g className={styles.eyes}>
              <rect x="22" y="12" width="4" height="8" className={styles.eye} />
              <rect x="38" y="12" width="4" height="8" className={styles.eye} />
            </g>
          </g>
        </svg>
      </button>
    </aside>
  )
}

export default Companion
