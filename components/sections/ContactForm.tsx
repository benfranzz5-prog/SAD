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
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      vehicle: (form.elements.namedItem('vehicle') as HTMLInputElement).value,
      suburb:  (form.elements.namedItem('suburb')  as HTMLInputElement).value,
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
    'w-full bg-white border border-green/15 text-green placeholder:text-green/35 px-4 py-3.5 font-body text-[15px] focus:outline-none focus:border-green transition-colors'
  const labelClass = 'font-body block text-[11px] font-bold uppercase tracking-[0.1em] text-green/55 mb-1.5'

  if (status === 'success') {
    return (
      <div className="bg-green/5 border border-green/15 p-10 text-center">
        <svg className="w-12 h-12 text-green mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-heading text-[1.6rem] font-semibold text-green mb-2">Quote request sent.</h3>
        <p className="font-body text-green/65 text-[15px]">
          Sebastian will be in touch shortly. If it&apos;s urgent, call or text directly on{' '}
          <a href="tel:+61415163873" className="font-bold text-green hover:text-green-mid underline">
            0415 163 873
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
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputClass} />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>Phone *</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="04XX XXX XXX" className={inputClass} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="your@email.com" className={inputClass} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className={labelClass}>Service Interested In *</label>
          <select id="service" name="service" required defaultValue="" className={`${inputClass} appearance-none cursor-pointer`}>
            <option value="" disabled>Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="vehicle" className={labelClass}>Vehicle Make &amp; Model *</label>
          <input id="vehicle" name="vehicle" type="text" required placeholder="e.g. Toyota Camry 2021" className={inputClass} />
        </div>

        <div>
          <label htmlFor="suburb" className={labelClass}>Suburb / Location *</label>
          <input id="suburb" name="suburb" type="text" required placeholder="e.g. Norwood" className={inputClass} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>Message (optional)</label>
          <textarea id="message" name="message" rows={4} placeholder="Any additional details about your car or what you're after..." className={inputClass} />
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-4 font-body text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary mt-6 w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Get My Free Quote'}
      </button>
    </form>
  )
}
