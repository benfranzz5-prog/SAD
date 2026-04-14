import type { Metadata } from 'next'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Testimonials — Real Reviews From Adelaide Customers',
  description:
    "Read real reviews from Sebastian's Automotive Detailing customers across Adelaide SA. 5 star mobile car detailing, ceramic coating and paint correction.",
  alternates: { canonical: '/testimonials' },
  openGraph: { url: '/testimonials' },
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[var(--color-border)]"
        style={{ background: 'var(--color-bg)' }}
        aria-labelledby="testimonials-page-heading"
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-label">What Customers Say</span>
            <h1
              id="testimonials-page-heading"
              className="text-display uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--color-cream)' }}
            >
              Testimonials
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Don&apos;t take our word for it. Here&apos;s what people across Adelaide say after
              having Sebastian detail their car.
            </p>
          </div>
        </div>
      </section>

      {/* All testimonials */}
      <TestimonialsSection showAll={true} />

      {/* Leave a review CTA */}
      <section
        className="section-padding-sm border-t border-[var(--color-border)]"
        style={{ background: 'var(--color-bg)' }}
        aria-label="Leave a review"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2
                className="text-display text-3xl uppercase mb-3"
                style={{ color: 'var(--color-cream)' }}
              >
                Had your car done by Sebastian?
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                If you&apos;re happy with the work, leaving a Google or Facebook review genuinely helps.
                It takes 2 minutes and makes a real difference for a small business.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/search/Sebastian%27s+Automotive+Detailing+Adelaide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--color-border)] px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:border-[var(--color-cream)] hover:text-[var(--color-cream)]"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Review on Google →
              </a>
              <a
                href="https://www.facebook.com/share/18PDHaTVoQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--color-border)] px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:border-[var(--color-cream)] hover:text-[var(--color-cream)]"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Review on Facebook →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding-sm"
        style={{ background: 'var(--color-surface-1)' }}
        aria-label="Book a detail"
      >
        <div className="container-site text-center">
          <h2
            className="text-display text-3xl uppercase mb-3"
            style={{ color: 'var(--color-cream)' }}
          >
            Want the same results?
          </h2>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
            Free quote. No obligation. Sebastian will give you an honest assessment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button as="link" href="/contact" variant="primary" size="md">
              Get A Free Quote
            </Button>
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
