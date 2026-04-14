import Link from 'next/link'
import Image from 'next/image'

const services = [
  { label: 'Interior & Exterior Detailing', href: '/services/interior-exterior-detailing' },
  { label: 'Paint Rejuvenation', href: '/services/paint-rejuvenation' },
  { label: 'Ceramic Coating', href: '/services/ceramic-coating' },
  { label: 'Interior Detail', href: '/services/interior-details' },
  { label: 'Exterior Detail', href: '/services/exterior-details' },
]

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="bg-[var(--color-surface-1)] border-t border-[var(--color-border)]"
    >
      <div className="container-site">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Sebastian's Automotive Detailing — Home">
              <Image
                src="/images/SAD-LOGO11.png"
                alt="Sebastian's Automotive Detailing"
                width={120}
                height={48}
                className="h-12 w-auto object-contain mb-6"
              />
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
              Premium mobile car detailing in Adelaide, South Australia. We come to you —
              wherever you are.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/sebastiansautomotivedetailing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sebastian's Automotive Detailing on Instagram"
                className="w-9 h-9 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-cream)] hover:border-[var(--color-border-hover)] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/18PDHaTVoQ/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sebastian's Automotive Detailing on Facebook"
                className="w-9 h-9 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-cream)] hover:border-[var(--color-border-hover)] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-display text-lg tracking-widest uppercase text-[var(--color-cream)] mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-cream)] transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-display text-lg tracking-widest uppercase text-[var(--color-cream)] mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-cream)] transition-colors duration-200"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-display text-lg tracking-widest uppercase text-[var(--color-cream)] mb-5">
              Get In Touch
            </h3>
            <address className="not-italic flex flex-col gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-faint)] mb-1">
                  Phone / Text
                </p>
                <a
                  href="tel:+61415163873"
                  className="text-base font-semibold text-[var(--color-cream)] hover:text-[var(--color-silver)] transition-colors duration-200"
                >
                  +61 415 163 873
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-faint)] mb-1">
                  Email
                </p>
                <a
                  href="mailto:Sebastian@SADetailing.net"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-cream)] transition-colors duration-200 break-all"
                >
                  Sebastian@SADetailing.net
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-faint)] mb-1">
                  Service Area
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Adelaide & surrounds, SA
                </p>
                <p className="text-xs text-[var(--color-text-faint)] mt-1">
                  Strictly mobile — we come to you.
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)] py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[var(--color-text-faint)]">
            &copy; {year} Sebastian&apos;s Automotive Detailing. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-faint)]">
            Adelaide, South Australia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
