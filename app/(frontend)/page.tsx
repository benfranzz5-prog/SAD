import type { Metadata } from 'next'
import { getHero, getServices, getGallery, getTestimonials, getFAQ, getTrust, getSEO } from '@/lib/cms'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import ServicesOverview from '@/components/sections/ServicesOverview'
import WhySebastians from '@/components/sections/WhySebastians'
import GalleryPreview from '@/components/sections/GalleryPreview'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import CTABanner from '@/components/sections/CTABanner'

export async function generateMetadata(): Promise<Metadata> {
  const seo = getSEO()
  return {
    title: seo.home.title,
    description: seo.home.description,
  }
}

export default function HomePage() {
  const hero = getHero()
  const services = getServices()
  const gallery = getGallery()
  const testimonials = getTestimonials()
  const faq = getFAQ()
  const trust = getTrust()

  return (
    <>
      {/* Structured data for local business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: "Sebastian's Automotive Detailing",
            description: 'Premium mobile car detailing in Adelaide. Interior & exterior details, cut & polish, and ceramic coating.',
            telephone: '+61415163873',
            email: 'Sebastian@SADetailing.net',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Adelaide',
              addressRegion: 'SA',
              addressCountry: 'AU',
            },
            areaServed: {
              '@type': 'City',
              name: 'Adelaide',
            },
            priceRange: '$$',
            openingHours: 'Mo-Sa 07:30-17:30',
            serviceType: 'Mobile Car Detailing',
          }),
        }}
      />

      <Hero content={hero} />
      <TrustBar items={trust} />
      <ServicesOverview services={services} />
      <WhySebastians />
      <GalleryPreview items={gallery} />
      <TestimonialsSection testimonials={testimonials} preview />
      <FAQSection items={faq} preview />
      <CTABanner />
    </>
  )
}
