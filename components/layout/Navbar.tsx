'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Reviews', href: '/testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const showSolid = !isHome || scrolled || menuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        showSolid ? 'navbar-solid' : 'navbar-transparent'
      }`}
    >
      <nav
        className="container flex items-center justify-between h-[72px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className={`font-heading text-[1.35rem] font-800 uppercase tracking-[-0.01em] transition-colors ${
            showSolid ? 'text-forest' : 'text-white'
          }`}
          aria-label="Sebastian's Automotive Detailing — Home"
        >
          SAD
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-bold uppercase tracking-[0.08em] transition-colors hover:text-secondary ${
                  showSolid ? 'text-forest' : 'text-white/90'
                } ${pathname?.startsWith(link.href) ? 'text-secondary' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+61415163873"
            className={`text-sm font-bold uppercase tracking-[0.08em] transition-colors hover:text-secondary ${
              showSolid ? 'text-forest' : 'text-white/90'
            }`}
          >
            +61 415 163 873
          </a>
          <Link
            href="/contact"
            className="bg-secondary text-white text-xs font-bold uppercase tracking-[0.08em] px-6 py-3 hover:bg-blue-700 transition-colors"
          >
            Get A Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 -mr-2 transition-colors ${
            showSolid ? 'text-forest' : 'text-white'
          }`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-forest/10 animate-slide-down">
          <ul className="container py-4 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-bold uppercase tracking-[0.08em] text-forest hover:text-secondary transition-colors border-b border-forest/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="tel:+61415163873"
                className="block py-3 text-sm font-bold uppercase tracking-[0.08em] text-forest hover:text-secondary transition-colors border-b border-forest/10"
              >
                +61 415 163 873
              </a>
            </li>
            <li className="pt-3">
              <Link
                href="/contact"
                className="flex justify-center bg-secondary text-white text-sm font-bold uppercase tracking-[0.08em] py-4 hover:bg-blue-700 transition-colors"
              >
                Get A Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
