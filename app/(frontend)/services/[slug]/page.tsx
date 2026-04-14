import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/sections/ContactForm'

type ServiceSlug =
  | 'interior-exterior-detailing'
  | 'paint-rejuvenation'
  | 'ceramic-coating'
  | 'interior-details'
  | 'exterior-details'

const SERVICE_DATA: Record<
  ServiceSlug,
  {
    title: string
    tagline: string
    metaDescription: string
    intro: string
    whatIsIncluded: string[]
    process: { step: string; detail: string }[]
    ideal: string
    fromPrice: string
    relatedSlugs: ServiceSlug[]
  }
> = {
  'interior-exterior-detailing': {
    title: 'Interior & Exterior Detailing',
    tagline: 'The full package. Inside and out.',
    metaDescription:
      'Full interior and exterior car detailing in Adelaide SA. Pre-sale, post-purchase, or regular maintenance. Mobile service — Sebastian comes to you. From $POA.',
    intro:
      "The full detail is exactly what it sounds like — a comprehensive, thorough clean of your entire vehicle. This is Sebastian's most booked service. Whether you're prepping for a sale, just bought a used car, or just want your car to feel new again, this is the one.",
    whatIsIncluded: [
      'Full hand wash and hand dry (no automated brushes)',
      'Wheel, tyre and wheel arch clean',
      'Clay bar paint decontamination',
      'Iron fallout removal',
      'Tyre and trim dressing',
      'Glass treatment — inside and out',
      'Door jambs, fuel cap and shut areas',
      'Full interior vacuum (seats, floor, boot)',
      'Steam clean all hard interior surfaces',
      'Dashboard and console wipe-down and condition',
      'Leather or fabric seat clean and condition',
      'Carpet spot treatment',
      'Odour treatment',
    ],
    process: [
      { step: 'Inspection', detail: 'Sebastian walks the car and notes any paint concerns, stains, or issues before starting.' },
      { step: 'Exterior Decontamination', detail: 'Rinse, foam, hand wash, clay bar, iron fallout removal. Paint is fully decontaminated before anything else.' },
      { step: 'Interior Deep Clean', detail: 'Vacuum, steam, wipe, condition. Every surface is addressed in order — top to bottom.' },
      { step: 'Protection Layer', detail: 'Glass, trim and painted surfaces are sealed with an appropriate protection product.' },
      { step: 'Final Check', detail: 'Sebastian does a full walkround before packing up. If anything is not right, it gets fixed.' },
    ],
    ideal:
      'Pre-sale. Post-purchase. Annual refresh. If your car has been sitting on the road for 6+ months without a proper detail, this is where to start.',
    fromPrice: 'From $POA',
    relatedSlugs: ['paint-rejuvenation', 'ceramic-coating'],
  },
  'paint-rejuvenation': {
    title: 'Paint Rejuvenation',
    tagline: 'Remove the damage. Restore the depth.',
    metaDescription:
      'Professional paint rejuvenation and cut & polish in Adelaide SA. Remove swirl marks, scratches and oxidation. Mobile machine polish by Sebastian.',
    intro:
      "Paint rejuvenation — or cut and polish — is a multi-stage machine polish that removes the microscopic layer of damaged clear coat where swirl marks, light scratches and oxidation live. When done properly, the paint underneath is clear, deep and glossy. This is Sebastian's core skill and the service he's most proud of.",
    whatIsIncluded: [
      'Full paint decontamination and wash',
      'Paint thickness measurement and assessment',
      'Multi-stage machine polish (cut, refine, finish)',
      'Swirl and light scratch removal',
      'Oxidation treatment',
      'Water spot removal',
      'Panel inspection under detailing lights',
      'Paint sealant application',
      'Trim, glass and tyre dressing',
    ],
    process: [
      { step: 'Paint Assessment', detail: 'Paint depth is measured before touching anything. Sebastian identifies problem areas and chooses the appropriate compound stages.' },
      { step: 'Wash & Decontaminate', detail: 'Paint must be fully clean and decontaminated before polishing begins.' },
      { step: 'Machine Polish', detail: 'Cut, then refine, then finish. Each stage removes the marks left by the previous one. The number of passes depends on paint condition.' },
      { step: 'Inspection', detail: 'Every panel is checked under high-intensity detailing lights. Anything missed gets done again.' },
      { step: 'Protection', detail: 'A paint sealant is applied to protect the freshly corrected surface.' },
    ],
    ideal:
      'Any car with visible swirls, swirl-heavy paint from automated car washes, older vehicles with oxidised paintwork, or pre-sale preparation where the paint needs to look its best.',
    fromPrice: 'From $POA',
    relatedSlugs: ['ceramic-coating', 'interior-exterior-detailing'],
  },
  'ceramic-coating': {
    title: 'Ceramic Coating',
    tagline: 'Protection that lasts years, not weeks.',
    metaDescription:
      'Professional ceramic coating in Adelaide SA. Includes full paint rejuvenation. Mobile application by Sebastian. Long-term hydrophobic protection. From $POA.',
    intro:
      "Ceramic coating is a liquid polymer that chemically bonds to your paint and creates a semi-permanent protective layer. It's hydrophobic, UV resistant and scratch resistant. It makes maintenance washes much easier and keeps your car looking better for longer. Every ceramic coating Sebastian applies includes a full paint rejuvenation first — there's no point coating over damaged paint.",
    whatIsIncluded: [
      'Full paint rejuvenation (multi-stage machine polish)',
      'Paint decontamination and panel preparation',
      'IPA wipe-down on all panels',
      'Professional-grade ceramic coating application',
      'Coating levelling and cure inspection',
      'Glass coating option',
      'Trim and tyre dressing',
      'Aftercare instructions',
    ],
    process: [
      { step: 'Full Paint Rejuvenation', detail: 'The car gets a complete cut and polish before any coating is applied. Coating over uncorrected paint locks the defects in permanently.' },
      { step: 'Decontamination', detail: 'Clay bar, iron fallout removal, IPA wipedown. The surface must be chemically clean for the coating to bond correctly.' },
      { step: 'Coating Application', detail: 'Ceramic is applied panel by panel in controlled conditions. Application technique directly affects the finished result.' },
      { step: 'Levelling & Flash Time', detail: 'The coating is levelled and inspected for high spots before curing. This step requires patience — it cannot be rushed.' },
      { step: 'Cure Period', detail: 'The car must be kept dry for 24–48 hours after application while the coating fully cures.' },
      { step: 'Aftercare Briefing', detail: "Sebastian will explain how to maintain the coating properly so it lasts. It's straightforward — regular maintenance washes, no harsh chemicals." },
    ],
    ideal:
      'New or near-new cars. High-value vehicles. Anyone who takes pride in their paint and wants long-term protection without regular waxing.',
    fromPrice: 'From $POA',
    relatedSlugs: ['paint-rejuvenation', 'interior-exterior-detailing'],
  },
  'interior-details': {
    title: 'Interior Detail',
    tagline: 'Your cabin — like new.',
    metaDescription:
      'Standalone interior car detailing in Adelaide SA. Deep clean, steam treatment, leather conditioning and odour elimination. Mobile service by Sebastian.',
    intro:
      "Sometimes the outside is fine but the inside needs serious work. Dogs, kids, daily commuting, takeaway, gym gear — interiors cop a beating. The standalone interior detail is a deep, thorough clean of everything inside your vehicle. Sebastian uses professional steam equipment and takes the time to do it properly.",
    whatIsIncluded: [
      'Full vacuum — seats, floor, boot, door pockets',
      'Steam clean all hard surfaces (dash, console, door cards)',
      'Seat cleaning — fabric or leather',
      'Leather conditioning and protection',
      'Carpet spot and stain treatment',
      'Floor mat deep clean',
      'Headliner spot clean',
      'Odour treatment (not just masking)',
      'Glass clean inside',
      'Door jamb wipe',
    ],
    process: [
      { step: 'Remove & Vacuum', detail: 'Mats out, seats forward, everything vacuumed thoroughly before any wet cleaning begins.' },
      { step: 'Steam Treatment', detail: 'Steam is used on hard surfaces to break down grime, bacteria and stains without harsh chemicals.' },
      { step: 'Seat Cleaning', detail: 'Fabric seats are extracted. Leather seats are cleaned and conditioned. Both are done properly, not dabbed at.' },
      { step: 'Carpet & Mats', detail: 'Stains are spot-treated. Mats get a full scrub. Carpet is extracted if required.' },
      { step: 'Glass & Final Wipe', detail: 'Interior glass is cleaned streak-free. All surfaces get a final wipe and condition.' },
    ],
    ideal:
      'Family cars with kids or pets. Cars bought second-hand. Smoky or odour-affected interiors. Anyone who works from their car.',
    fromPrice: 'From $POA',
    relatedSlugs: ['interior-exterior-detailing', 'exterior-details'],
  },
  'exterior-details': {
    title: 'Exterior Detail',
    tagline: 'Clean paint. Dressed trim. Done properly.',
    metaDescription:
      'Standalone exterior car detailing in Adelaide SA. Hand wash, clay bar, tyre dressing, glass treatment. Mobile by Sebastian.',
    intro:
      "The standalone exterior detail is for when the inside is fine but the outside needs attention. It's more thorough than a regular car wash — Sebastian hand washes, clay bars, dresses the tyres and trim, and treats the glass. Your paint is properly decontaminated, not just rinsed.",
    whatIsIncluded: [
      'Pre-rinse and snow foam pre-wash',
      'Two-bucket hand wash method',
      'Hand dry with microfibre',
      'Wheel and tyre detail',
      'Clay bar paint decontamination',
      'Iron fallout removal treatment',
      'Trim dressing',
      'Tyre dressing',
      'Exterior glass treatment',
      'Quick detailer spray sealant',
    ],
    process: [
      { step: 'Pre-Rinse & Foam', detail: 'The car is rinsed and a snow foam pre-wash is applied to loosen surface contaminants safely before contact washing.' },
      { step: 'Two-Bucket Wash', detail: 'The two-bucket method prevents grit from being dragged across paintwork during washing. Every car, every time.' },
      { step: 'Clay Bar', detail: 'After washing, the paint is clay barred to remove bonded contaminants that washing alone cannot remove.' },
      { step: 'Wheels & Tyres', detail: 'Wheels are cleaned and dressed. Tyres are dressed to a satin finish.' },
      { step: 'Glass & Seal', detail: 'Exterior glass is cleaned and treated. A quick detailer sealant is applied for short-term protection.' },
    ],
    ideal:
      'Regular maintenance between full details. Cars with a clean interior but dull or contaminated exterior. Pre-trip presentation.',
    fromPrice: 'From $POA',
    relatedSlugs: ['interior-exterior-detailing', 'interior-details'],
  },
}

export function generateStaticParams() {
  return Object.keys(SERVICE_DATA).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICE_DATA[slug as ServiceSlug]
  if (!service) return {}
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { url: `/services/${slug}` },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICE_DATA[slug as ServiceSlug]

  if (!service) {
    notFound()
  }

  const relatedServices = service.relatedSlugs.map((s) => ({
    slug: s,
    title: SERVICE_DATA[s].title,
    tagline: SERVICE_DATA[s].tagline,
  }))

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[var(--color-border)]"
        style={{ background: 'var(--color-bg)' }}
        aria-labelledby="service-page-heading"
      >
        <div className="container-site">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/services"
              className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
              style={{ color: 'var(--color-text-faint)' }}
            >
              ← Services
            </Link>
          </div>
          <div className="max-w-3xl">
            <span className="section-label">Service</span>
            <h1
              id="service-page-heading"
              className="text-display uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: 'var(--color-cream)' }}
            >
              {service.title}
            </h1>
            <p
              className="text-lg md:text-xl italic mb-2"
              style={{ color: 'var(--color-accent-light)' }}
            >
              {service.tagline}
            </p>
            <p
              className="text-xl font-semibold mt-4"
              style={{ color: 'var(--color-cream)', fontFamily: 'var(--font-dm-sans)' }}
            >
              {service.fromPrice}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            {/* Main content */}
            <div>
              {/* Intro */}
              <div className="mb-12">
                <h2
                  className="text-display text-2xl uppercase mb-5"
                  style={{ color: 'var(--color-cream)' }}
                >
                  Overview
                </h2>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {service.intro}
                </p>
              </div>

              {/* What's included */}
              <div className="mb-12">
                <h2
                  className="text-display text-2xl uppercase mb-6"
                  style={{ color: 'var(--color-cream)' }}
                >
                  What&apos;s Included
                </h2>
                <ul className="flex flex-col gap-3">
                  {service.whatIsIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                      <svg
                        className="mt-0.5 shrink-0"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-accent-light)"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2
                  className="text-display text-2xl uppercase mb-6"
                  style={{ color: 'var(--color-cream)' }}
                >
                  The Process
                </h2>
                <ol className="flex flex-col gap-0">
                  {service.process.map((step, i) => (
                    <li
                      key={i}
                      className="flex gap-5 items-start border-l pl-6 pb-8 relative"
                      style={{ borderColor: 'var(--color-border)' }}
                    >
                      <span
                        className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 border-2 rounded-full"
                        style={{ background: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}
                        aria-hidden="true"
                      />
                      <div>
                        <h3
                          className="text-display text-xl uppercase mb-2"
                          style={{ color: 'var(--color-cream)' }}
                        >
                          {i + 1}. {step.step}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Ideal for */}
              <div
                className="p-6 border border-[var(--color-border)]"
                style={{ background: 'var(--color-surface-1)' }}
              >
                <h2
                  className="text-display text-xl uppercase mb-3"
                  style={{ color: 'var(--color-cream)' }}
                >
                  Ideal For
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {service.ideal}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside aria-label="Booking sidebar">
              {/* Quote CTA */}
              <div
                className="sticky top-24 border border-[var(--color-border)] p-6"
                style={{ background: 'var(--color-surface-1)' }}
              >
                <p
                  className="text-xl font-bold mb-1"
                  style={{ color: 'var(--color-cream)', fontFamily: 'var(--font-dm-sans)' }}
                >
                  {service.fromPrice}
                </p>
                <p className="text-xs mb-5" style={{ color: 'var(--color-text-faint)' }}>
                  Price varies by vehicle size and condition.
                </p>
                <Button as="link" href="/contact" variant="primary" size="md" className="w-full justify-center mb-3">
                  Get A Free Quote
                </Button>
                <a
                  href="tel:+61415163873"
                  className="flex items-center justify-center gap-2 w-full border border-[var(--color-border)] py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:border-[var(--color-border-hover)] hover:text-[var(--color-cream)]"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  +61 415 163 873
                </a>

                <div className="mt-6 pt-6 border-t border-[var(--color-border)] flex flex-col gap-3 text-xs" style={{ color: 'var(--color-text-faint)' }}>
                  <p>✓ Mobile — we come to you</p>
                  <p>✓ Done personally by Sebastian</p>
                  <p>✓ Free quote — no obligation</p>
                </div>

                {/* Related services */}
                {relatedServices.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-faint)' }}>
                      Related Services
                    </p>
                    <div className="flex flex-col gap-2">
                      {relatedServices.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={`/services/${rel.slug}`}
                          className="text-sm transition-colors duration-200 hover:text-[var(--color-cream)]"
                          style={{ color: 'var(--color-text-muted)' }}
                        >
                          {rel.title} →
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section
        className="section-padding-sm"
        style={{ background: 'var(--color-surface-1)' }}
        aria-labelledby="service-contact-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <span className="section-label">Book This Service</span>
              <h2
                id="service-contact-heading"
                className="text-display text-3xl uppercase leading-none mb-4"
                style={{ color: 'var(--color-cream)' }}
              >
                Get A Free Quote
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                Tell Sebastian about your vehicle and he&apos;ll come back with a quote. Usually within a few hours.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-6" style={{ background: 'var(--color-surface-2)' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
