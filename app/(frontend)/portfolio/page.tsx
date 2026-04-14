import type { Metadata } from 'next'
import { PortfolioGrid } from '@/components/sections/PortfolioGrid'

export const metadata: Metadata = {
  title: 'Portfolio — Detailing Work Around Adelaide',
  description:
    'Gallery of car detailing, ceramic coating and paint correction work by Sebastian across Adelaide SA. Real results on real vehicles.',
  alternates: { canonical: '/portfolio' },
  openGraph: { url: '/portfolio' },
}

export default function PortfolioPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[var(--color-border)]"
        style={{ background: 'var(--color-bg)' }}
        aria-labelledby="portfolio-page-heading"
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-label">Our Work</span>
            <h1
              id="portfolio-page-heading"
              className="text-display uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--color-cream)' }}
            >
              Portfolio
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              A selection of recent work from across Adelaide. Filter by service type or browse everything.
            </p>
          </div>
        </div>
      </section>

      {/* Grid with filters */}
      <PortfolioGrid showFilters={true} />

      {/* Bottom CTA */}
      <section
        className="section-padding-sm border-t border-[var(--color-border)] text-center"
        style={{ background: 'var(--color-surface-1)' }}
        aria-label="Book a detail call to action"
      >
        <div className="container-site">
          <h2
            className="text-display text-3xl uppercase mb-3"
            style={{ color: 'var(--color-cream)' }}
          >
            Want results like these on your car?
          </h2>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
            Get in touch and Sebastian will give you a free, no-obligation quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-cream)] text-xs font-semibold tracking-widest uppercase px-8 py-4 border border-[var(--color-accent)] hover:bg-[var(--color-accent-light)] transition-colors duration-200"
            >
              Get A Free Quote
            </a>
            <a
              href="tel:+61415163873"
              className="inline-flex items-center text-sm font-semibold transition-colors duration-200"
              style={{ color: 'var(--color-text-muted)' }}
            >
              +61 415 163 873
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
