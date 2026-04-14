import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Get A Free Quote',
  description:
    "Book a mobile car detail in Adelaide SA. Contact Sebastian directly — +61 415 163 873. Free, no-obligation quotes. Sebastian replies personally.",
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[var(--color-border)]"
        style={{ background: 'var(--color-bg)' }}
        aria-labelledby="contact-page-heading"
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-label">Get In Touch</span>
            <h1
              id="contact-page-heading"
              className="text-display uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--color-cream)' }}
            >
              Get A<br />
              <span style={{ color: 'var(--color-accent-light)' }}>Free Quote</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Tell Sebastian about your car. He&apos;ll come back with a specific, honest price.
              No call centres. No waiting.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="section-padding"
        style={{ background: 'var(--color-bg)' }}
        aria-label="Contact information and quote form"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            {/* Left — contact details */}
            <div className="flex flex-col gap-10">
              {/* Phone — prominent */}
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: 'var(--color-text-faint)' }}
                >
                  Call or Text
                </p>
                <a
                  href="tel:+61415163873"
                  className="block text-4xl md:text-5xl font-bold transition-colors duration-200"
                  style={{ color: 'var(--color-cream)', fontFamily: 'var(--font-dm-sans)' }}
                  aria-label="Phone number +61 415 163 873"
                >
                  +61 415 163 873
                </a>
                <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>
                  Sebastian answers personally. Call or text, 7 days.
                </p>
              </div>

              {/* Email */}
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: 'var(--color-text-faint)' }}
                >
                  Email
                </p>
                <a
                  href="mailto:Sebastian@SADetailing.net"
                  className="text-lg font-medium transition-colors duration-200 hover:text-[var(--color-cream)] break-all"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Sebastian@SADetailing.net
                </a>
              </div>

              {/* Service area */}
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: 'var(--color-text-faint)' }}
                >
                  Service Area
                </p>
                <p className="text-base font-medium mb-1" style={{ color: 'var(--color-cream)' }}>
                  Adelaide & Surrounds, SA
                </p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Strictly mobile — we come to you. We cover all Adelaide metro suburbs and surrounds.
                </p>
              </div>

              {/* Social */}
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: 'var(--color-text-faint)' }}
                >
                  Follow
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/sebastiansautomotivedetailing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-[var(--color-cream)] group"
                    style={{ color: 'var(--color-text-muted)' }}
                    aria-label="Sebastian's Automotive Detailing on Instagram"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @sebastiansautomotivedetailing
                  </a>
                  <a
                    href="https://www.facebook.com/share/18PDHaTVoQ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-[var(--color-cream)]"
                    style={{ color: 'var(--color-text-muted)' }}
                    aria-label="Sebastian's Automotive Detailing on Facebook"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Sebastian&apos;s Automotive Detailing
                  </a>
                </div>
              </div>

              {/* Map note */}
              <div
                className="p-5 border border-[var(--color-border)]"
                style={{ background: 'var(--color-surface-1)' }}
              >
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-2"
                  style={{ color: 'var(--color-text-faint)' }}
                >
                  Mobile Service
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  We don&apos;t have a fixed address. Sebastian comes to you — at your home,
                  workplace, or anywhere in Adelaide. All we need is access to power and water.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <div
                className="border border-[var(--color-border)] p-7 md:p-10"
                style={{ background: 'var(--color-surface-1)' }}
              >
                <h2
                  className="text-display text-3xl uppercase mb-1"
                  style={{ color: 'var(--color-cream)' }}
                >
                  Send A Quote Request
                </h2>
                <p className="text-sm mb-7" style={{ color: 'var(--color-text-muted)' }}>
                  Fill this in and Sebastian will get back to you with a price for your vehicle.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
