'use client'

import { useState, useEffect } from 'react'
import { LazyMotion, domMax, m, AnimatePresence } from 'framer-motion'

const COOKIE_KEY = 'sad_cookie_consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      // Delay slightly so it doesn't interfere with initial render
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <LazyMotion features={domMax}>
      <AnimatePresence>
        {visible && (
          <m.div
            role="dialog"
            aria-label="Cookie consent"
            aria-live="polite"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[9000] md:bottom-6 md:left-6 md:right-auto"
          >
            <div
              className="surface-1 border border-[var(--color-border)] p-5 md:p-6 max-w-sm md:rounded-none shadow-card"
              style={{ borderTop: '1px solid var(--color-accent)' }}
            >
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                We use cookies to analyse site traffic and improve your experience. Nothing
                sketchy — just basic analytics.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={accept}
                  className="flex-1 bg-[var(--color-accent)] text-[var(--color-cream)] text-xs font-semibold uppercase tracking-widest py-2.5 px-4 hover:bg-[var(--color-accent-light)] transition-colors duration-200"
                >
                  Accept
                </button>
                <button
                  onClick={decline}
                  className="flex-1 bg-transparent text-[var(--color-text-muted)] text-xs font-semibold uppercase tracking-widest py-2.5 px-4 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-cream)] transition-colors duration-200"
                >
                  Decline
                </button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}

export default CookieConsent
