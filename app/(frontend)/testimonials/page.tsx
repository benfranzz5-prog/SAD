import type { Metadata } from 'next'
import { getTestimonials, getSEO } from '@/lib/cms'
import SectionTitle from '@/components/ui/SectionTitle'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'

export async function generateMetadata(): Promise<Metadata> {
  const seo = getSEO()
  return {
    title: seo.testimonials.title,
    description: seo.testimonials.description,
  }
}

export default function TestimonialsPage() {
  const testimonials = getTestimonials()

  return (
    <>
      <section className="pt-32 pb-16 bg-forest" aria-label="Reviews header">
        <div className="container">
          <SectionTitle
            eyebrow="Customer Reviews"
            title="What Adelaide says."
            subtitle="Real feedback from real customers across Adelaide."
            light
          />
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />

      <CTABanner />
    </>
  )
}
