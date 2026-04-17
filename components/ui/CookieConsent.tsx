'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookie_consent')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-green text-cream border-t border-cream/10 px-4 py-4 sm:px-6"
    >
      <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-body text-sm text-cream/80">
          This site uses functional cookies to ensure it works correctly. No tracking or advertising cookies are used.
        </p>
        <button
          onClick={accept}
          className="shrink-0 btn-primary text-[11px]"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
