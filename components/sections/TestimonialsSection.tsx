'use client'

import { useRef } from 'react'
import { LazyMotion, domMax, m, useInView } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'

const PLACEHOLDER_TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Sebastian did an incredible job on my Audi Q5. The paint correction alone made it look better than when I bought it. Worth every cent.",
    customer_name: 'James R.',
    location: 'Glenelg, SA',
    vehicle: '2020 Audi Q5',
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    quote:
      "Had the full ceramic coating done. Sebastian was professional, thorough, and the results speak for themselves. My car has never looked this good.",
    customer_name: 'Sarah M.',
    location: 'Norwood, SA',
    vehicle: '2019 Mercedes C-Class',
    rating: 5,
    featured: true,
  },
  {
    id: 3,
    quote:
      "Booked Sebastian before selling my car and it made such a difference. Got $2,000 more than I was expecting. Will use him every time.",
    customer_name: 'Tom K.',
    location: 'Henley Beach, SA',
    vehicle: '2017 Mazda CX-5',
    rating: 5,
    featured: true,
  },
  {
    id: 4,
    quote:
      "The interior detail was unreal. Kids had absolutely destroyed the back seat. Sebastian got it back to showroom condition.",
    customer_name: 'Lisa T.',
    location: 'Tea Tree Gully, SA',
    vehicle: '2018 Toyota RAV4',
    rating: 5,
    featured: false,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? 'var(--color-accent-light)' : 'none'}
          stroke="var(--color-accent-light)"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({
  quote,
  customer_name,
  location,
  vehicle,
  rating,
  index,
}: {
  quote: string
  customer_name: string
  location?: string | null
  vehicle?: string | null
  rating: number
  index: number
}) {
  const ref = useRef<HTMLBlockquote>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <m.blockquote
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card-dark p-7 flex flex-col gap-5"
    >
      <StarRating rating={rating} />
      <p
        className="text-base leading-relaxed flex-1 italic"
        style={{ color: 'var(--color-text-muted)' }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="flex flex-col gap-1">
        <cite className="not-italic font-semibold text-sm" style={{ color: 'var(--color-cream)' }}>
          {customer_name}
        </cite>
        {(vehicle || location) && (
          <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>
            {vehicle && <span>{vehicle}</span>}
            {vehicle && location && <span> · </span>}
            {location && <span>{location}</span>}
          </p>
        )}
      </footer>
    </m.blockquote>
  )
}

interface TestimonialsSectionProps {
  showAll?: boolean
}

export function TestimonialsSection({ showAll = false }: TestimonialsSectionProps) {
  const items = showAll
    ? PLACEHOLDER_TESTIMONIALS
    : PLACEHOLDER_TESTIMONIALS.filter((t) => t.featured)

  return (
    <LazyMotion features={domMax}>
      <section
        aria-labelledby="testimonials-heading"
        className="section-padding relative overflow-hidden"
        style={{ background: 'var(--color-surface-1)' }}
      >
        {/* Decorative accent element */}
        <div
          className="absolute top-0 left-0 w-px h-full opacity-20"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--color-accent), transparent)' }}
          aria-hidden="true"
        />

        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionTitle
              id="testimonials-heading"
              label="Client Stories"
              title="Real Results. Real People."
              className="flex-1"
            />
            {!showAll && (
              <a
                href="/testimonials"
                className="text-xs font-semibold tracking-widest uppercase flex items-center gap-2 transition-all duration-200 hover:gap-4 shrink-0"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                Read All Reviews →
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {items.map((t, i) => (
              <TestimonialCard key={t.id} {...t} index={i} />
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-12 border-t border-[var(--color-border)] flex flex-wrap gap-8 items-center justify-center">
            {[
              { value: '5.0', label: 'Star Rating' },
              { value: '100%', label: 'Mobile Service' },
              { value: 'Adelaide', label: 'South Australia' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-display text-3xl tracking-wider mb-1"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {stat.value}
                </p>
                <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-text-faint)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

export default TestimonialsSection
