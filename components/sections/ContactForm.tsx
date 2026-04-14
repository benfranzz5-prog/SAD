'use client'

import { useActionState, useRef } from 'react'
import { LazyMotion, domMax, m, AnimatePresence } from 'framer-motion'
import { submitContactForm, type ContactFormState } from '@/lib/actions'

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service...' },
  { value: 'interior-exterior-detailing', label: 'Interior & Exterior Detailing' },
  { value: 'paint-rejuvenation', label: 'Paint Rejuvenation / Cut & Polish' },
  { value: 'ceramic-coating', label: 'Ceramic Coating' },
  { value: 'interior-details', label: 'Interior Detail (standalone)' },
  { value: 'exterior-details', label: 'Exterior Detail (standalone)' },
  { value: 'not-sure', label: "Not sure yet — need advice" },
]

const initialState: ContactFormState = {
  success: false,
  error: null,
  fieldErrors: {},
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p role="alert" className="form-error" aria-live="polite">
      {message}
    </p>
  )
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <LazyMotion features={domMax}>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="form-status"
      >
        {state.success && 'Form submitted successfully. Sebastian will be in touch soon.'}
        {state.error && `Error: ${state.error}`}
      </div>

      <AnimatePresence mode="wait">
        {state.success ? (
          <m.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center py-16 px-6"
            role="status"
          >
            <div
              className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border"
              style={{ borderColor: 'var(--color-accent)', background: 'var(--color-accent-dark)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-light)" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3
              className="text-display text-3xl uppercase mb-3"
              style={{ color: 'var(--color-cream)' }}
            >
              Message Sent
            </h3>
            <p className="text-sm leading-relaxed mb-8 max-w-sm mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              Thanks — Sebastian will be back to you shortly. For anything urgent:
            </p>
            <a
              href="tel:+61415163873"
              className="inline-flex items-center gap-2 text-2xl font-bold transition-colors duration-200"
              style={{ color: 'var(--color-cream)', fontFamily: 'var(--font-dm-sans)' }}
            >
              +61 415 163 873
            </a>
            <p className="text-xs tracking-widest uppercase mt-2" style={{ color: 'var(--color-text-faint)' }}>
              Call or text anytime
            </p>
          </m.div>
        ) : (
          <m.form
            key="form"
            ref={formRef}
            action={formAction}
            noValidate
            aria-labelledby="contact-form-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Global error */}
            <AnimatePresence>
              {state.error && (
                <m.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="mb-6 p-4 border text-sm"
                  style={{ borderColor: '#c0392b', color: '#e74c3c', background: 'rgba(192,57,43,0.08)' }}
                >
                  {state.error}
                </m.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="form-label">
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  aria-describedby={state.fieldErrors.name ? 'name-error' : undefined}
                  className={`form-input ${state.fieldErrors.name ? 'error' : ''}`}
                  placeholder="John Smith"
                />
                <span id="name-error">
                  <FieldError message={state.fieldErrors.name} />
                </span>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="form-label">
                  Phone <span aria-hidden="true">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  aria-required="true"
                  aria-describedby={state.fieldErrors.phone ? 'phone-error' : undefined}
                  className={`form-input ${state.fieldErrors.phone ? 'error' : ''}`}
                  placeholder="+61 4XX XXX XXX"
                />
                <span id="phone-error">
                  <FieldError message={state.fieldErrors.phone} />
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label htmlFor="email" className="form-label">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-required="true"
                aria-describedby={state.fieldErrors.email ? 'email-error' : undefined}
                className={`form-input ${state.fieldErrors.email ? 'error' : ''}`}
                placeholder="you@example.com"
              />
              <span id="email-error">
                <FieldError message={state.fieldErrors.email} />
              </span>
            </div>

            {/* Service */}
            <div className="mb-5">
              <label htmlFor="service" className="form-label">
                Service Interested In <span aria-hidden="true">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                aria-required="true"
                aria-describedby={state.fieldErrors.service ? 'service-error' : undefined}
                className={`form-input ${state.fieldErrors.service ? 'error' : ''}`}
                defaultValue=""
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <span id="service-error">
                <FieldError message={state.fieldErrors.service} />
              </span>
            </div>

            {/* Message */}
            <div className="mb-7">
              <label htmlFor="message" className="form-label">
                Tell Us About Your Car <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                rows={5}
                aria-describedby={state.fieldErrors.message ? 'message-error' : undefined}
                className={`form-input resize-none ${state.fieldErrors.message ? 'error' : ''}`}
                placeholder="Year, make, model, condition, what you're after..."
              />
              <span id="message-error">
                <FieldError message={state.fieldErrors.message} />
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: isPending ? 'var(--color-accent-dark)' : 'var(--color-accent)',
                color: 'var(--color-cream)',
                border: '1px solid var(--color-accent)',
              }}
              onMouseEnter={(e) => {
                if (!isPending) (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-accent-light)'
              }}
              onMouseLeave={(e) => {
                if (!isPending) (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-accent)'
              }}
            >
              {isPending ? (
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="animate-spin"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Quote Request'
              )}
            </button>

            <p className="text-xs text-center mt-4" style={{ color: 'var(--color-text-faint)' }}>
              Or skip the form — call/text{' '}
              <a href="tel:+61415163873" className="underline hover:text-[var(--color-cream)] transition-colors">
                +61 415 163 873
              </a>
            </p>
          </m.form>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}

export default ContactForm
