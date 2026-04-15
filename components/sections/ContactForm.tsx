'use client'

import { useState, type FormEvent } from 'react'

const services = [
  'Interior & Exterior Detail',
  'Paint Rejuvenation / Cut & Polish',
  'Ceramic Coating',
  'Not sure — let Sebastian recommend',
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      vehicle: (form.elements.namedItem('vehicle') as HTMLInputElement).value,
      suburb: (form.elements.namedItem('suburb') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const inputClass =
    'w-full bg-white border border-forest/20 text-forest placeholder:text-forest/40 px-4 py-3.5 text-[15px] focus:outline-none focus:border-secondary transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-[0.08em] text-forest/60 mb-1.5'

  if (status === 'success') {
    return (
      <div className="bg-forest/5 border border-forest/20 p-10 text-center">
        <svg className="w-12 h-12 text-secondary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-heading text-[1.6rem] font-700 text-forest mb-2">Quote request sent.</h3>
        <p className="text-forest/70 text-[15px]">
          Sebastian will be in touch shortly. If it&apos;s urgent, call or text directly on{' '}
          <a href="tel:+61415163873" className="font-bold text-secondary hover:underline">
            +61 415 163 873
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Quote request form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>Phone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="04XX XXX XXX"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className={labelClass}>Service Interested In *</label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled>Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="vehicle" className={labelClass}>Vehicle Make & Model *</label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            required
            placeholder="e.g. Toyota Camry 2021"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="suburb" className={labelClass}>Suburb / Location *</label>
          <input
            id="suburb"
            name="suburb"
            type="text"
            required
            placeholder="e.g. Norwood"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>Message (optional)</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Any additional details about your car or what you're after..."
            className={inputClass}
          />
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full bg-secondary text-white font-heading font-700 uppercase tracking-[0.08em] text-sm py-4 hover:bg-blue-700 active:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Get My Free Quote'}
      </button>
    </form>
  )
}
