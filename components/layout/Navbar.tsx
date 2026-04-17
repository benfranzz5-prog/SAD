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
        showSolid
          ? 'bg-[#FFF8E6] border-b border-[#003B20]/10 shadow-sm'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <nav
        className="container flex items-center justify-between h-[76px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Sebastian's Automotive Detailing — Home"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Sebastian's Automotive Detailing"
            width={120}
            height={48}
            className={`h-10 w-auto object-contain transition-all duration-300 ${
              showSolid ? 'brightness-100' : 'brightness-0 invert'
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
                className={`relative text-[13px] font-bold uppercase tracking-[0.1em] transition-colors group ${
                  showSolid ? 'text-[#003B20]' : 'text-white/90'
                } ${pathname?.startsWith(link.href) ? 'text-[#0000EE]' : ''}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#0000EE] transition-all duration-300 ${
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
            className={`text-[13px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-[#0000EE] ${
              showSolid ? 'text-[#003B20]' : 'text-white/90'
            }`}
          >
            0415 163 873
          </a>
          <Link
            href="/contact"
            className="bg-[#0000EE] text-white text-[12px] font-bold uppercase tracking-[0.1em] px-6 py-3 hover:bg-blue-700 transition-colors"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 -mr-2 transition-colors ${
            showSolid ? 'text-[#003B20]' : 'text-white'
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
        <div className="md:hidden bg-[#FFF8E6] border-t border-[#003B20]/10 animate-slide-down">
          <ul className="container py-4 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-3.5 text-[13px] font-bold uppercase tracking-[0.1em] text-[#003B20] hover:text-[#0000EE] transition-colors border-b border-[#003B20]/10"
                >
                  {link.label}
                  <svg className="w-3.5 h-3.5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+61415163873"
                className="flex items-center justify-between py-3.5 text-[13px] font-bold uppercase tracking-[0.1em] text-[#003B20] hover:text-[#0000EE] transition-colors border-b border-[#003B20]/10"
              >
                0415 163 873
              </a>
            </li>
            <li className="pt-4 pb-2">
              <Link
                href="/contact"
                className="flex justify-center bg-[#0000EE] text-white text-[13px] font-bold uppercase tracking-[0.1em] py-4 hover:bg-blue-700 transition-colors"
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
