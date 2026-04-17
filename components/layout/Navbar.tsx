'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        showSolid ? 'navbar-solid' : 'navbar-transparent'
      }`}
    >
      <nav
        className="container flex items-center justify-between h-[76px]"
        aria-label="Main navigation"
      >
        {/* Logo — script text that mirrors the logo font */}
        <Link
          href="/"
          aria-label="Sebastian's Automotive Detailing — Home"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Sebastian's Automotive Detailing"
            width={120}
            height={48}
            className={`h-10 w-auto object-contain transition-all duration-300 ${
              showSolid ? '' : 'brightness-0 invert'
            }`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-[12px] font-bold uppercase tracking-[0.12em] font-body transition-colors group ${
                  showSolid ? 'text-green' : 'text-white/90'
                } ${pathname?.startsWith(link.href) ? (showSolid ? 'text-green-mid' : 'text-cream') : ''}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-green-mid transition-all duration-300 ${
                    pathname?.startsWith(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:+61415163873"
            className={`text-[12px] font-bold uppercase tracking-[0.12em] font-body transition-colors hover:text-green-mid ${
              showSolid ? 'text-green' : 'text-white/85'
            }`}
          >
            0415 163 873
          </a>
          <Link
            href="/contact"
            className="btn-primary text-[11px]"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 -mr-2 transition-colors ${
            showSolid ? 'text-green' : 'text-white'
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
        <div className="md:hidden bg-off-white border-t border-green/10 animate-slide-down">
          <ul className="container py-4 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] font-body text-green hover:text-green-mid transition-colors border-b border-green/10"
                >
                  {link.label}
                  <svg className="w-3.5 h-3.5 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+61415163873"
                className="flex items-center justify-between py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] font-body text-green hover:text-green-mid transition-colors border-b border-green/10"
              >
                0415 163 873
              </a>
            </li>
            <li className="pt-4 pb-2">
              <Link href="/contact" className="btn-primary w-full justify-center">
                Get A Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
