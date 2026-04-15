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
      className="fixed bottom-0 left-0 right-0 z-50 bg-forest text-primary border-t border-green-800 px-4 py-4 sm:px-6"
    >
      <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm text-green-100/90">
          This site uses functional cookies to ensure it works correctly. No tracking or advertising cookies are used.
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-secondary text-white text-sm font-bold uppercase tracking-[0.08em] px-5 py-2.5 hover:bg-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
