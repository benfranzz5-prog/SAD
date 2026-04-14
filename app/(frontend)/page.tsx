import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { PortfolioGrid } from '@/components/sections/PortfolioGrid'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactForm } from '@/components/sections/ContactForm'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: "Mobile Car Detailing Adelaide — Premium Detailing by Sebastian",
  description:
    "Sebastian's Automotive Detailing — premium mobile car detailing in Adelaide SA. Interior & exterior details, paint correction, ceramic coatings. We come to you.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://sebastiansadetailing.com.au',
  name: "Sebastian's Automotive Detailing",
  description:
    'Premium mobile car detailing, paint rejuvenation and ceramic coating services in Adelaide, South Australia.',
  url: 'https://sebastiansadetailing.com.au',
  telephone: '+61415163873',
  email: 'Sebastian@SADetailing.net',
  image: 'https://sebastiansadetailing.com.au/images/SAD-LOGO11.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Adelaide',
    addressRegion: 'SA',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.9285,
    longitude: 138.6007,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -34.9285,
      longitude: 138.6007,
    },
    geoRadius: '60000',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/sebastiansautomotivedetailing',
    'https://www.facebook.com/share/18PDHaTVoQ/',
  ],
  hasMap: 'https://maps.google.com/?q=Adelaide+SA',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* 1. Full-screen cinematic hero */}
      <Hero />

      {/* 2. Social proof strip */}
      <section
        aria-label="Trust indicators"
        className="py-8 border-y border-[var(--color-border)]"
        style={{ background: 'var(--color-surface-1)' }}
      >
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { label: 'Mobile Service', detail: 'Adelaide & surrounds' },
              { label: '5★ Rating', detail: 'Google & Facebook' },
              { label: 'Solo Operator', detail: 'Sebastian does every job' },
              { label: 'Power & Water', detail: 'All we need on site' },
            ].map((item) => (
              <div key={item.label} className="text-center flex flex-col gap-1">
                <p
                  className="text-display text-sm tracking-widest uppercase"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {item.label}
                </p>
                <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials — high on the page */}
      <TestimonialsSection />

      {/* 4. Services overview */}
      <ServicesOverview />

      {/* 5. Portfolio preview */}
      <PortfolioGrid limit={3} showFilters={false} />

      {/* 6. About teaser */}
      <section
        aria-labelledby="about-teaser-heading"
        className="section-padding"
        style={{ background: 'var(--color-surface-1)' }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="section-label">About</span>
              <h2
                id="about-teaser-heading"
                className="text-display uppercase leading-none mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--color-cream)' }}
              >
                One Operator.
                <br />
                <span style={{ color: 'var(--color-accent-light)' }}>Zero Shortcuts.</span>
              </h2>
              <div
                className="flex flex-col gap-4 text-sm leading-relaxed mb-8"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <p>
                  Sebastian is 24 years old and has been obsessed with cars since he could walk.
                  He started detailing on weekends, built a reputation on results, and turned it
                  into a full-time business.
                </p>
                <p>
                  Every job is done by Sebastian personally. No staff, no trainees, no corners
                  cut. When he says the work is done right, he means it — because his name is
                  on every car he touches.
                </p>
              </div>
              <Button as="link" href="/about" variant="secondary" size="md">
                Read Sebastian&apos;s Story
              </Button>
            </div>
            {/* Visual block */}
            <div
              className="relative h-64 lg:h-96 border border-[var(--color-border)] overflow-hidden"
              style={{ background: 'var(--color-surface-2)' }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ color: 'var(--color-text-faint)' }}
              >
                <p className="text-sm text-center">
                  Photo of Sebastian at work
                  <br />
                  <span className="text-xs">(Add to /public/images/)</span>
                </p>
              </div>
              {/* Decorative corner lines */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l" style={{ borderColor: 'var(--color-accent)' }} aria-hidden="true" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r" style={{ borderColor: 'var(--color-accent)' }} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. Contact CTA section */}
      <section
        aria-labelledby="contact-cta-heading"
        className="section-padding relative overflow-hidden"
        style={{ background: 'var(--color-surface-1)' }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — CTA copy */}
            <div>
              <SectionTitle
                label="Book a Detail"
                title="Get A Free Quote"
                subtitle="Tell us about your car and what you need. Sebastian will come back to you personally — fast."
              />
              <div className="mt-8 flex flex-col gap-6">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-faint)' }}>
                    Prefer to call?
                  </p>
                  <a
                    href="tel:+61415163873"
                    className="text-2xl font-bold transition-colors duration-200"
                    style={{ color: 'var(--color-cream)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    +61 415 163 873
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-faint)' }}>
                    Email
                  </p>
                  <a
                    href="mailto:Sebastian@SADetailing.net"
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Sebastian@SADetailing.net
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-faint)' }}>
                    Service Area
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    Adelaide & surrounds, South Australia
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="border border-[var(--color-border)] p-6 md:p-8 bg-[var(--color-surface-2)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
