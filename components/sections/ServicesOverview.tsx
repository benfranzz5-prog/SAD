import Link from 'next/link'
import type { Service } from '@/lib/cms'
import SectionTitle from '@/components/ui/SectionTitle'

interface ServicesOverviewProps {
  services: Service[]
}

const serviceIcons = [
  // Car wash / detail icon
  <svg key="detail" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>,
  // Polish/shine icon
  <svg key="polish" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>,
  // Shield/coating icon
  <svg key="coat" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
]

export default function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <section className="section-pad bg-bg" aria-labelledby="services-heading">
      <div className="container">
        <div className="reveal mb-14">
          <SectionTitle
            eyebrow="What We Offer"
            title="Services"
            subtitle="Three core services, each done properly. No shortcuts, no volume rushing."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <article
              key={service.slug}
              className={`reveal reveal-delay-${i + 1} group bg-primary border border-forest/10 p-8 flex flex-col hover:shadow-lg transition-shadow`}
            >
              <div className="text-secondary mb-5">{serviceIcons[i]}</div>
              <h3 className="font-heading text-[1.5rem] font-700 text-forest mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-forest/70 text-[15px] leading-relaxed flex-1 mb-6">
                {service.shortDescription}
              </p>
              <div className="flex items-center justify-between mt-auto pt-5 border-t border-forest/10">
                <span className="font-heading text-lg font-700 text-forest">
                  From ${service.fromPrice}
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-[12px] font-bold uppercase tracking-[0.1em] text-secondary hover:underline underline-offset-4 decoration-2 transition-all group-hover:gap-2 flex items-center gap-1"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
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
  )
}
