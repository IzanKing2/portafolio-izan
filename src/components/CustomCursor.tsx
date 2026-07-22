import { useState, useEffect, useRef } from 'react'
import styles from '../styles/CustomCursor.module.css'

function CustomCursor() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [ringX, setRingX] = useState(0)
  const [ringY, setRingY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const animRef = useRef(null)
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(false)
      }
    }

    const animate = () => {
      ringPos.current.x += (mouseX - ringPos.current.x) * 0.12
      ringPos.current.y += (mouseY - ringPos.current.y) * 0.12
      setRingX(ringPos.current.x)
      setRingY(ringPos.current.y)
      animRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)
    animRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animRef.current)
    }
  }, [mouseX, mouseY])

  return (
    <>
      <div
        className={styles.dot}
        style={{ left: mouseX, top: mouseY }}
      ></div>
      <div
        className={`${styles.ring} ${isHovering ? styles.ringHover : ''}`}
        style={{ left: ringX, top: ringY }}
      ></div>
    </>
  )
}

export default CustomCursor
