'use client'
import { useRef } from 'react'

export default function Magnetic({
  children,
  strength = 12
}: {
  children: React.ReactNode
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    const tx = (x / r.width) * strength
    const ty = (y / r.height) * strength
    el.style.transform = `translate(${tx}px, ${ty}px)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block transition-transform duration-150 will-change-transform"
    >
      {children}
    </div>
  )
}
