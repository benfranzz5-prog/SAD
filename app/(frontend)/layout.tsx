'use client'

import { LazyMotion, domMax, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domMax}>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <AnimatePresence mode="wait">
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </AnimatePresence>
      <Footer />
      <CookieConsent />
      <Analytics />
      <SpeedInsights />
    </LazyMotion>
  )
}
