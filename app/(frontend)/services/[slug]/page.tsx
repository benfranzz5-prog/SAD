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
    'paint-rejuvenation': 'servicePaintRejuvenation',
    'ceramic-coating': 'serviceCeramicCoating',
  }
  const key = slugToKey[params.slug]
  const meta = key ? seo[key] : null
  return {
    title: meta?.title ?? "Service | Sebastian's Automotive Detailing",
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
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 pb-12">
            <div className="container">
              <p className="eyebrow text-green-200/60 mb-2">Service</p>
              <h1
                className="font-heading text-primary tracking-[-0.025em] leading-[1.02]"
                style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', fontWeight: 800 }}
              >
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main column */}
            <div className="lg:col-span-2">
              <p className="text-forest/80 text-[17px] leading-relaxed mb-10">
                {service.shortDescription}
              </p>

              {service.sebastianNote && (
                <aside className="border-l-4 border-secondary bg-primary px-6 py-5 mb-10">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-secondary mb-2">Sebastian&apos;s Note</p>
                  <p className="text-forest/80 text-[15px] leading-relaxed italic">
                    &ldquo;{service.sebastianNote}&rdquo;
                  </p>
                </aside>
              )}

              {/* What's included */}
              <div className="mb-10">
                <h2 className="font-heading text-[1.6rem] font-700 text-forest mb-5">
                  What&apos;s Included
                </h2>
                <ol className="flex flex-col gap-3" aria-label="Service steps">
                  {service.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-4 bg-primary border border-forest/10 px-5 py-4">
                      <span
                        className="shrink-0 w-7 h-7 flex items-center justify-center bg-secondary text-white text-xs font-bold"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-forest/80 text-[15px] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Who it's for */}
              <div>
                <h2 className="font-heading text-[1.6rem] font-700 text-forest mb-5">
                  Who It&apos;s For
                </h2>
                <ul className="flex flex-col gap-3" aria-label="Ideal candidates for this service">
                  {service.whoFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-forest/80 text-[15px] leading-relaxed">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
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
              <div className="bg-primary border border-forest/10 p-7 sticky top-24">
                <p className="eyebrow mb-2">Pricing</p>
                <p className="font-heading text-[2.5rem] font-800 text-forest leading-none mb-1">
                  From ${service.fromPrice}
                </p>
                <p className="text-forest/50 text-sm mb-6">{service.note}</p>

                <Link
                  href="/contact"
                  className="flex items-center justify-center bg-secondary text-white font-heading font-700 uppercase tracking-[0.08em] text-sm w-full py-4 hover:bg-blue-700 transition-colors mb-3"
                >
                  Get A Free Quote
                </Link>
                <a
                  href="tel:+61415163873"
                  className="flex items-center justify-center border-2 border-forest text-forest font-heading font-700 uppercase tracking-[0.08em] text-sm w-full py-4 hover:bg-forest hover:text-primary transition-colors"
                >
                  +61 415 163 873
                </a>

                <div className="mt-6 pt-6 border-t border-forest/10">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-forest/50 mb-3">Other Services</p>
                  <nav aria-label="Other services">
                    <ul className="flex flex-col gap-2" role="list">
                      {getServices().filter(s => s.slug !== service.slug).map(s => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="text-sm text-forest hover:text-secondary transition-colors"
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
