'use client'
import { useEffect, useRef, useState } from 'react'

export default function Reveal({
  children,
  delay = 0
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal-in' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
