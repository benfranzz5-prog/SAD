'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LazyMotion, domMax, m, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <LazyMotion features={domMax}>
      <header
        role="banner"
        className={[
          'fixed top-0 left-0 right-0 z-[100]',
          'transition-all duration-500',
          scrolled
            ? 'bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Sebastian's Automotive Detailing — Home"
              className="relative z-10 flex-shrink-0"
            >
              <Image
                src="/images/SAD-LOGO11.png"
                alt="Sebastian's Automotive Detailing"
                width={120}
                height={48}
                className="h-10 w-auto md:h-12 object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-8"
            >
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + phone */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+61415163873"
                className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] hover:text-[var(--color-cream)] transition-colors duration-200"
              >
                +61 415 163 873
              </a>
              <Button as="link" href="/contact" variant="primary" size="sm">
                Get A Free Quote
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden relative z-10 flex flex-col justify-center items-end gap-1.5 w-8 h-8 focus-visible:outline-2 focus-visible:outline-[var(--color-cream)]"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <m.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-px w-7 bg-[var(--color-cream)] origin-center"
              />
              <m.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-px w-5 bg-[var(--color-cream)]"
              />
              <m.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-px w-7 bg-[var(--color-cream)] origin-center"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <m.div
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden bg-[var(--color-surface-1)] border-t border-[var(--color-border)]"
            >
              <div className="container-site py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <m.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 text-base font-medium text-[var(--color-text-muted)] hover:text-[var(--color-cream)] border-b border-[var(--color-border)] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </m.div>
                ))}
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 flex flex-col gap-3"
                >
                  <a
                    href="tel:+61415163873"
                    className="text-center text-sm font-semibold tracking-widest uppercase text-[var(--color-text-muted)] py-3"
                  >
                    +61 415 163 873
                  </a>
                  <Button
                    as="link"
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    Get A Free Quote
                  </Button>
                </m.div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </LazyMotion>
  )
}

export default Navbar
