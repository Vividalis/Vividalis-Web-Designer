'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Magnetic from './Magnetic'

const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    setError('')

    try {
      await emailjs.sendForm(
        'service_kcoxx67',
        'template_doycpb8',
        formRef.current,
        { publicKey: 'z1nJgmZXDrxbWaaD1' }
      )
      const confetti = (await import('canvas-confetti')).default
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.2 } })

      setStatus('sent')
      formRef.current.reset()
    } catch (err: any) {
      setStatus('error')
      setError(err?.text || 'Failed to send. Try again.')
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="from_name"
            required
            placeholder="Your name"
            className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="reply_to"
            required
            placeholder="you@example.com"
            className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project…"
          className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
        />
      </div>

    <Magnetic strength={16}>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center rounded-md border border-white/20 bg-white/10 px-4 py-2 hover:bg-white/15 disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </Magnetic> 
      {status === 'sent' && <p className="text-sm opacity-80">Thanks! Your message was sent.</p>}
      {status === 'error' && <p className="text-sm text-red-400">Oops: {error}</p>}
    </form>
  )
}
