import Link from 'next/link'
import Image from 'next/image'
import type { Service } from '@/lib/cms'

interface ServicesOverviewProps {
  services: Service[]
}

const serviceNumbers = ['01', '02', '03']

export default function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <section className="section-pad bg-cream-light" aria-labelledby="services-heading">
      <div className="container">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-3">What We Offer</p>
            <h2 className="font-heading text-green leading-[1.02]" style={{ fontWeight: 700 }}>
              Three services.<br />
              Each done properly.
            </h2>
          </div>
          <p className="font-body text-green/55 text-[15px] leading-relaxed max-w-xs md:text-right">
            No shortcuts, no rushing through a queue. Just careful, deliberate work.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <article
              key={service.slug}
              className={`reveal reveal-delay-${i + 1} group relative overflow-hidden bg-green flex flex-col`}
              style={{ minHeight: '440px' }}
            >
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-35"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(to top, rgba(18,46,25,0.97) 40%, rgba(18,46,25,0.5) 80%, rgba(18,46,25,0.2) 100%)',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col flex-1 p-8 justify-end">
                <span
                  className="font-heading text-[4rem] font-bold leading-none text-cream/8 select-none mb-auto"
                  aria-hidden="true"
                >
                  {serviceNumbers[i]}
                </span>

                <div>
                  <h3
                    className="font-heading text-cream leading-tight mb-3"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>
                  <p className="font-body text-cream/60 text-[14px] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-cream/15">
                    <span className="font-heading text-cream font-bold text-[1.1rem]">
                      From ${service.fromPrice}
                    </span>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-cream/60 hover:text-cream hover:gap-3 transition-all"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Details
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom row */}
        <div className="reveal mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-off-white p-6 border border-green/10">
          <p className="font-body text-green font-semibold text-[15px]">
            Not sure which service your car needs?
          </p>
          <Link
            href="/contact"
            className="shrink-0 font-body inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-green hover:text-green-mid hover:gap-3 transition-all"
          >
            Ask Sebastian
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
