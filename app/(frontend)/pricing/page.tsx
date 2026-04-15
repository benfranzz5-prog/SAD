import type { Metadata } from 'next'
import Link from 'next/link'
import { getPricing, getSEO } from '@/lib/cms'
import SectionTitle from '@/components/ui/SectionTitle'
import CTABanner from '@/components/sections/CTABanner'

export async function generateMetadata(): Promise<Metadata> {
  const seo = getSEO()
  return {
    title: seo.pricing.title,
    description: seo.pricing.description,
  }
}

export default function PricingPage() {
  const pricing = getPricing()

  return (
    <>
      <section className="pt-32 pb-16 bg-forest" aria-label="Pricing header">
        <div className="container">
          <SectionTitle
            eyebrow="Investment"
            title="Pricing"
            subtitle="Starting prices for guidance. Final quotes based on your specific vehicle."
            light
          />
        </div>
      </section>

      <section className="section-pad bg-bg" aria-label="Pricing table">
        <div className="container max-w-3xl">
          <div className="flex flex-col divide-y divide-forest/10 bg-primary border border-forest/10 mb-8">
            {pricing.map((item, i) => (
              <div
                key={i}
                className="reveal flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 py-7"
              >
                <div className="flex-1">
                  <h2 className="font-heading text-[1.35rem] font-700 text-forest leading-tight mb-1">
                    {item.service}
                  </h2>
                  <p className="text-forest/60 text-sm">{item.note}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-heading text-[2rem] font-800 text-forest leading-none">
                    From ${item.from}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <aside className="bg-accent border border-forest/10 px-7 py-6 mb-10">
            <p className="text-forest/70 text-[15px] leading-relaxed">
              <strong className="text-forest">Please note:</strong> All pricing shown is a starting guide. Final pricing depends on your vehicle&apos;s size, make, and condition. Contact us for a free, no-obligation quote tailored to your car.
            </p>
          </aside>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-secondary text-white font-heading font-700 uppercase tracking-[0.08em] text-sm px-9 py-4 hover:bg-blue-700 transition-colors"
            >
              Get A Free Quote
            </Link>
          </div>
        </div>
      </section>

      <CTABanner title="Not sure which service is right?" subtitle="Tell us about your car and we'll recommend the best approach." />
    </>
  )
}
