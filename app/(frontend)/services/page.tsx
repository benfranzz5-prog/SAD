import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Services — Car Detailing, Paint Correction & Ceramic Coatings',
  description:
    'Mobile car detailing services in Adelaide. Interior & exterior detailing, paint rejuvenation (cut & polish), ceramic coating applications, standalone interior and exterior details.',
  alternates: { canonical: '/services' },
  openGraph: { url: '/services' },
}

const services = [
  {
    slug: 'interior-exterior-detailing',
    number: '01',
    title: 'Interior & Exterior Detailing',
    tagline: 'The full package. Inside and out.',
    description:
      'A thorough, comprehensive clean of your entire vehicle. This is the go-to for pre-sale preparation, post-purchase cleanup, or anyone who wants their car looking its best. Sebastian hand-washes the exterior, clay-bars the paint, dresses tyres, cleans glass, vacuums, steam-cleans, and conditions every interior surface.',
    highlights: [
      'Full exterior hand wash & dry',
      'Clay bar paint decontamination',
      'Tyre and trim dressing',
      'Glass treatment inside & out',
      'Full vacuum & interior clean',
      'Steam clean hard surfaces',
      'Leather conditioning',
    ],
    tag: 'Most Popular',
  },
  {
    slug: 'paint-rejuvenation',
    number: '02',
    title: 'Paint Rejuvenation',
    tagline: 'Swirls out. Gloss back.',
    description:
      "A full machine cut and polish to remove swirl marks, light scratches, oxidation and water spots. This is Sebastian's core expertise — the service that makes a six-year-old car look like it just rolled off the lot. Paint rejuvenation is also included in every ceramic coating package.",
    highlights: [
      'Multi-stage machine polish',
      'Swirl & scratch removal',
      'Oxidation treatment',
      'Paint depth restoration',
      'Gloss enhancement',
      'Panel wipe-down & inspection',
    ],
    tag: "Sebastian's Specialty",
  },
  {
    slug: 'ceramic-coating',
    number: '03',
    title: 'Ceramic Coating',
    tagline: 'The best protection you can put on a car.',
    description:
      'A professional-grade ceramic coating application that bonds to your paintwork at the molecular level. Includes a full paint rejuvenation first — because coating over unpolished paint is a waste of money. The result is a surface that repels water, dirt and UV for years. Not weeks.',
    highlights: [
      'Full paint rejuvenation included',
      'Professional-grade ceramic formula',
      'Hydrophobic surface protection',
      'UV protection against fading',
      'Scratch resistance layer',
      'Multi-year durability',
      'Glass & trim coating available',
    ],
    tag: 'Ultimate Protection',
  },
  {
    slug: 'interior-details',
    number: '04',
    title: 'Interior Detail',
    tagline: 'Your cabin — like new.',
    description:
      'A standalone deep clean of your vehicle interior. Ideal if the outside is in good shape but the inside needs work. Kids, dogs, spills, daily wear — Sebastian has seen and cleaned it all. Steam treatment, odour elimination, leather conditioning, and meticulous attention to every surface.',
    highlights: [
      'Full vacuum (seats, floor, boot)',
      'Steam clean all hard surfaces',
      'Seat cleaning & conditioning',
      'Carpet treatment',
      'Odour elimination',
      'Door jambs & pockets cleaned',
      'Dashboard & console detailing',
    ],
    tag: null,
  },
  {
    slug: 'exterior-details',
    number: '05',
    title: 'Exterior Detail',
    tagline: 'Clean paint. Dressed trim. Done right.',
    description:
      "A standalone exterior clean for when the interior is fine but the outside needs attention. Hand wash, clay bar decontamination, tyre and trim dressing, and glass treatment. Your paint feels clean and properly decontaminated — not just rinsed.",
    highlights: [
      'Hand wash & hand dry',
      'Clay bar decontamination',
      'Iron fallout removal',
      'Tyre and trim dress',
      'Wheel clean & dress',
      'Glass treatment inside & out',
      'Quick spray wax/sealant',
    ],
    tag: null,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[var(--color-border)]"
        style={{ background: 'var(--color-bg)' }}
        aria-labelledby="services-page-heading"
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-label">What We Offer</span>
            <h1
              id="services-page-heading"
              className="text-display uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--color-cream)' }}
            >
              Services
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Five services. One operator. All done properly. Click any service for the full breakdown.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section
        aria-label="Service list"
        className="section-padding"
        style={{ background: 'var(--color-bg)' }}
      >
        <div className="container-site">
          <div className="flex flex-col gap-1">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 items-start p-7 md:p-10 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 relative overflow-hidden"
                style={{ background: 'var(--color-surface-1)' }}
                aria-label={`${service.title}: ${service.tagline}`}
              >
                {/* Hover background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, var(--color-accent-dark), transparent)' }}
                  aria-hidden="true"
                />

                {/* Number */}
                <span
                  className="relative z-10 text-display text-4xl md:text-5xl leading-none"
                  style={{ color: 'var(--color-text-faint)' }}
                  aria-hidden="true"
                >
                  {service.number}
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2
                      className="text-display text-2xl md:text-3xl uppercase tracking-wider"
                      style={{ color: 'var(--color-cream)' }}
                    >
                      {service.title}
                    </h2>
                    {service.tag && (
                      <span
                        className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 border"
                        style={{
                          borderColor: 'var(--color-accent)',
                          color: 'var(--color-accent-light)',
                          background: 'var(--color-accent-dark)',
                        }}
                      >
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm font-medium italic"
                    style={{ color: 'var(--color-accent-light)' }}
                  >
                    {service.tagline}
                  </p>
                  <p
                    className="text-sm leading-relaxed mt-1 max-w-2xl"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {service.description.substring(0, 160)}...
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="relative z-10 self-center text-2xl transition-all duration-300 group-hover:translate-x-2"
                  style={{ color: 'var(--color-accent-light)' }}
                  aria-hidden="true"
                >
                  →
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center py-12 border border-[var(--color-border)]" style={{ background: 'var(--color-surface-1)' }}>
            <h2 className="text-display text-2xl uppercase mb-3" style={{ color: 'var(--color-cream)' }}>
              Not sure which service you need?
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Tell Sebastian about your car and he&apos;ll recommend the right option.
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
        </div>
      </section>
    </>
  )
}
