import type { Metadata } from 'next'
import { getGallery, getServices, getSEO } from '@/lib/cms'
import SectionTitle from '@/components/ui/SectionTitle'
import CTABanner from '@/components/sections/CTABanner'
import GalleryGrid from '@/components/sections/GalleryGrid'

export async function generateMetadata(): Promise<Metadata> {
  const seo = getSEO()
  return {
    title: seo.gallery.title,
    description: seo.gallery.description,
  }
}

export default function GalleryPage() {
  const gallery = getGallery()
  const services = getServices()

  return (
    <>
      <section className="pt-32 pb-16 bg-green" aria-label="Gallery header">
        <div className="container">
          <SectionTitle
            eyebrow="Our Work"
            title="Results from across Adelaide."
            subtitle="Each photo is tagged with suburb and service type."
            light
          />
        </div>
      </section>

      <section className="section-pad bg-off-white" aria-label="Photo gallery">
        <div className="container">
          <GalleryGrid items={gallery} services={services} />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
