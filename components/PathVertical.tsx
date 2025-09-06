'use client'

import { useEffect, useRef } from 'react'
import { path } from '../content/path_tmp'
import Reveal from './Reveal'

export default function PathVertical() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const sec = sectionRef.current
        const track = trackRef.current
        const fill = fillRef.current
        if (!sec || !track || !fill) return

        const rect = sec.getBoundingClientRect()
        const vh = window.innerHeight
        const total = sec.offsetHeight - vh
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 0))
        const pct = total > 0 ? scrolled / total : 0
        fill.style.height = `${pct * track.clientHeight}px`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-[56px_1fr] gap-6 items-start"
    >
      {/* sticky progress line (shows on md+) */}
      <div className="hidden md:block sticky top-20 h-[70vh]">
        <div ref={trackRef} className="vpath-track relative mx-auto h-full w-[4px] rounded">
          <div ref={fillRef} className="vpath-fill absolute left-0 top-0 w-full rounded" />
        </div>
      </div>

      {/* milestones */}
      <div className="space-y-6">
        {path.map((m, i) => (
          <Reveal delay={i * 0.07} key={i}>
            <article className="panel">
              <div className="text-xs opacity-70">{m.when}</div>
              <h3 className="text-lg font-semibold mt-1">{m.title}</h3>
              <p className="opacity-80 mt-2">{m.blurb}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
