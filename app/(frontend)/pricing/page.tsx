import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Pricing — Mobile Car Detailing Adelaide',
  description:
    "Car detailing pricing in Adelaide SA. Interior & exterior details, paint rejuvenation, ceramic coatings. Transparent pricing from Sebastian's Automotive Detailing.",
  alternates: { canonical: '/pricing' },
  openGraph: { url: '/pricing' },
}

const SERVICES = [
  {
    slug: 'interior-exterior-detailing',
    title: 'Interior & Exterior Detailing',
    tagline: 'The complete package.',
    description:
      'Full inside-out detail. Hand wash, clay bar, interior steam clean, leather conditioning, glass treatment. The one most people book.',
    from: null,
    duration: '3–4 hrs',
    highlights: ['Exterior decontamination', 'Interior steam clean', 'Leather/fabric conditioning', 'Glass treatment'],
    tag: 'Most Popular',
  },
  {
    slug: 'paint-rejuvenation',
    title: 'Paint Rejuvenation',
    tagline: 'Cut & polish. Properly done.',
    description:
      'Multi-stage machine polish to remove swirls, scratches and oxidation. Restore gloss and depth to your paintwork.',
    from: null,
    duration: '4–6 hrs',
    highlights: ['Multi-stage machine polish', 'Swirl & scratch removal', 'Oxidation treatment', 'Paint sealant'],
    tag: null,
  },
  {
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    tagline: 'Includes full paint rejuvenation.',
    description:
      'Professional-grade ceramic coating with a complete paint rejuvenation included. Long-term hydrophobic protection.',
    from: null,
    duration: 'Full day',
    highlights: ['Paint rejuvenation included', 'Ceramic coating application', 'UV protection', 'Multi-year durability'],
    tag: 'Best Value',
    featured: true,
  },
  {
    slug: 'interior-details',
    title: 'Interior Detail',
    tagline: 'Deep clean only.',
    description:
      'Standalone interior deep clean. Steam, vacuum, seat conditioning, odour treatment. When the outside is fine.',
    from: null,
    duration: '2–3 hrs',
    highlights: ['Steam clean all surfaces', 'Seat clean & condition', 'Carpet treatment', 'Odour elimination'],
    tag: null,
  },
  {
    slug: 'exterior-details',
    title: 'Exterior Detail',
    tagline: 'Outside only.',
    description:
      'Standalone exterior clean. Hand wash, clay bar, tyre dress, glass treatment. More thorough than any car wash.',
    from: null,
    duration: '1.5–2.5 hrs',
    highlights: ['Two-bucket hand wash', 'Clay bar', 'Tyre & trim dress', 'Exterior glass'],
    tag: null,
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[var(--color-border)]"
        style={{ background: 'var(--color-bg)' }}
        aria-labelledby="pricing-page-heading"
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-label">Transparent Pricing</span>
            <h1
              id="pricing-page-heading"
              className="text-display uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--color-cream)' }}
            >
              Pricing
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
              Every job is priced on the vehicle&apos;s size and condition. Fill out the quote form
              and Sebastian will come back with a specific price for your car.
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-faint)' }}>
              Prices shown as &ldquo;POA&rdquo; will be updated by Sebastian via the CMS.
              All prices in AUD and include GST.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section
        className="section-padding"
        style={{ background: 'var(--color-bg)' }}
        aria-label="Service pricing"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                className={[
                  'card-dark p-7 flex flex-col gap-4 relative overflow-hidden',
                  service.featured ? 'border-[var(--color-accent)]' : '',
                ].join(' ')}
                aria-label={service.title}
              >
                {/* Featured badge */}
                {service.featured && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: 'linear-gradient(to right, var(--color-accent), var(--color-accent-light))' }}
                    aria-hidden="true"
                  />
                )}

                {/* Tag */}
                {service.tag && (
                  <span
                    className="inline-block w-fit text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 border"
                    style={{
                      borderColor: 'var(--color-accent)',
                      color: 'var(--color-accent-light)',
                      background: 'var(--color-accent-dark)',
                    }}
                  >
                    {service.tag}
                  </span>
                )}

                {/* Title */}
                <div>
                  <h2
                    className="text-display text-2xl uppercase tracking-wider mb-1"
                    style={{ color: 'var(--color-cream)' }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-xs italic" style={{ color: 'var(--color-accent-light)' }}>
                    {service.tagline}
                  </p>
                </div>

                {/* Price */}
                <div>
                  <p
                    className="text-3xl font-bold"
                    style={{ color: 'var(--color-cream)', fontFamily: 'var(--font-dm-sans)' }}
                    aria-label={service.from ? `From $${service.from}` : 'Price on application'}
                  >
                    {service.from ? `From $${service.from}` : 'From $POA'}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-faint)' }}>
                    Approx. {service.duration} · Price varies by vehicle
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-muted)' }}>
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 border-t pt-4" style={{ borderColor: 'var(--color-border)' }}>
                  {service.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-light)" strokeWidth="2.5" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  as="link"
                  href={`/services/${service.slug}`}
                  variant={service.featured ? 'primary' : 'secondary'}
                  size="sm"
                  className="w-full justify-center mt-2"
                >
                  Learn More
                </Button>
              </article>
            ))}
          </div>

          {/* Pricing notes */}
          <div
            className="mt-12 p-8 border border-[var(--color-border)]"
            style={{ background: 'var(--color-surface-1)' }}
          >
            <h2
              className="text-display text-2xl uppercase mb-6"
              style={{ color: 'var(--color-cream)' }}
            >
              Pricing Notes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <div>
                <h3 className="font-semibold text-[var(--color-cream)] mb-2">Vehicle Size</h3>
                <p>Smaller cars cost less. Larger SUVs and 4WDs cost more. Simple.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-cream)] mb-2">Condition</h3>
                <p>Heavily soiled vehicles or paint with significant damage may attract a higher price.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-cream)] mb-2">Quote First</h3>
                <p>Sebastian will always give you a specific price before work begins. No surprises.</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--color-border)] flex flex-wrap gap-4">
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
        </div>
      </section>
    </>
  )
}
