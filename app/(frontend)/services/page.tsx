import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getServices, getSEO } from '@/lib/cms'
import SectionTitle from '@/components/ui/SectionTitle'
import CTABanner from '@/components/sections/CTABanner'

export async function generateMetadata(): Promise<Metadata> {
  const seo = getSEO()
  return {
    title: seo.services.title,
    description: seo.services.description,
  }
}

export default function ServicesPage() {
  const services = getServices()

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-forest" aria-label="Services header">
        <div className="container">
          <SectionTitle
            eyebrow="What We Offer"
            title="Services"
            subtitle="Three core services. Each one done properly, without shortcuts."
            light
          />
        </div>
      </section>

      {/* Service list */}
      <section className="section-pad bg-bg" aria-label="Service details">
        <div className="container">
          <div className="flex flex-col gap-12">
            {services.map((service, i) => (
              <article
                key={service.slug}
                className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary border border-forest/10 overflow-hidden"
              >
                {/* Image */}
                <div
                  className={`relative h-64 md:h-full min-h-[280px] ${
                    i % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className={`p-8 md:p-10 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="eyebrow mb-3">Service 0{i + 1}</p>
                  <h2 className="font-heading text-[2rem] font-700 text-forest mb-3 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-forest/70 text-[15px] mb-5 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <p className="font-heading text-xl font-700 text-forest mb-6">
                    From ${service.fromPrice}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 bg-secondary text-white font-heading font-700 uppercase tracking-[0.08em] text-xs px-7 py-3.5 hover:bg-blue-700 transition-colors"
                  >
                    View Full Details
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
