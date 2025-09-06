'use client'
import { useRef } from 'react'

export default function Tilt({
  children,
  maxTilt = 8
}: {
  children: React.ReactNode
  maxTilt?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    const px = (x / r.width) * 2 - 1
    const py = (y / r.height) * 2 - 1
    const rx = (-py * maxTilt).toFixed(2)
    const ry = (px * maxTilt).toFixed(2)
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="transition-transform duration-150 will-change-transform"
    >
      {children}
    </div>
  )
}
