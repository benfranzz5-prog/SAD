import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getServiceBySlug, getServices, getSEO } from '@/lib/cms'
import CTABanner from '@/components/sections/CTABanner'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const services = getServices()
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seo = getSEO()
  const slugToKey: Record<string, string> = {
    'interior-exterior-detail': 'serviceInteriorExterior',
    'paint-rejuvenation':       'servicePaintRejuvenation',
    'ceramic-coating':          'serviceCeramicCoating',
  }
  const key = slugToKey[params.slug]
  const meta = key ? seo[key] : null
  return {
    title:       meta?.title ?? "Service | Sebastian's Automotive Detailing",
    description: meta?.description ?? '',
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[72px] overflow-hidden" aria-label={`${service.title} hero`}>
        <div className="relative h-[55vh] min-h-[380px] w-full">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(18,46,25,0.95) 0%, rgba(18,46,25,0.4) 55%, transparent 100%)' }}
            aria-hidden="true"
          />
          <div className="absolute bottom-0 left-0 right-0 pb-12">
            <div className="container">
              <p className="eyebrow text-cream/40 mb-2">Service</p>
              <h1
                className="font-heading text-cream leading-[1.02]"
                style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', fontWeight: 700 }}
              >
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main column */}
            <div className="lg:col-span-2">
              <p className="font-body text-green/75 text-[17px] leading-relaxed mb-10">
                {service.shortDescription}
              </p>

              {service.sebastianNote && (
                <aside className="border-l-4 border-green bg-cream-light px-6 py-5 mb-10">
                  <p className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-green/50 mb-2">Sebastian&apos;s Note</p>
                  <p className="font-body text-green/75 text-[15px] leading-relaxed italic">
                    &ldquo;{service.sebastianNote}&rdquo;
                  </p>
                </aside>
              )}

              {/* What's included */}
              <div className="mb-10">
                <h2 className="font-heading text-green mb-5" style={{ fontSize: '1.6rem', fontWeight: 600 }}>
                  What&apos;s Included
                </h2>
                <ol className="flex flex-col gap-3" aria-label="Service steps">
                  {service.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-4 bg-cream-light border border-green/8 px-5 py-4">
                      <span
                        className="shrink-0 w-7 h-7 flex items-center justify-center bg-green text-cream font-body text-[11px] font-bold"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-body text-green/75 text-[15px] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Who it's for */}
              <div>
                <h2 className="font-heading text-green mb-5" style={{ fontSize: '1.6rem', fontWeight: 600 }}>
                  Who It&apos;s For
                </h2>
                <ul className="flex flex-col gap-3" aria-label="Ideal candidates for this service">
                  {service.whoFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-green/75 text-[15px] leading-relaxed">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 text-green-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1" aria-label="Pricing and booking">
              <div className="bg-cream-light border border-green/10 p-7 sticky top-24">
                <p className="eyebrow mb-2">Pricing</p>
                <p className="font-heading text-green leading-none mb-1" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  From ${service.fromPrice}
                </p>
                <p className="font-body text-green/45 text-sm mb-6">{service.note}</p>

                <Link href="/contact" className="btn-primary w-full justify-center mb-3">
                  Get A Free Quote
                </Link>
                <a
                  href="tel:+61415163873"
                  className="btn-outline w-full justify-center text-green border-green/30 hover:bg-green hover:text-cream"
                >
                  0415 163 873
                </a>

                <div className="mt-6 pt-6 border-t border-green/10">
                  <p className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-green/40 mb-3">Other Services</p>
                  <nav aria-label="Other services">
                    <ul className="flex flex-col gap-2" role="list">
                      {getServices().filter(s => s.slug !== service.slug).map(s => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="font-body text-sm text-green/65 hover:text-green transition-colors"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
