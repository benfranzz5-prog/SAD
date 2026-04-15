import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'
import AdminNav from '@/components/admin/AdminNav'
import CMSChat from '@/components/admin/CMSChat'
import HeroEditor from '@/components/admin/editors/HeroEditor'
import ServicesEditor from '@/components/admin/editors/ServicesEditor'
import GalleryEditor from '@/components/admin/editors/GalleryEditor'
import TestimonialsEditor from '@/components/admin/editors/TestimonialsEditor'
import PricingEditor from '@/components/admin/editors/PricingEditor'
import FAQEditor from '@/components/admin/editors/FAQEditor'
import ContactEditor from '@/components/admin/editors/ContactEditor'
import TrustEditor from '@/components/admin/editors/TrustEditor'
import SEOEditor from '@/components/admin/editors/SEOEditor'
import {
  getHero,
  getServices,
  getGallery,
  getTestimonials,
  getPricing,
  getFAQ,
  getContact,
  getTrust,
  getSEO,
} from '@/lib/cms'

const sectionMeta: Record<string, { title: string; description: string }> = {
  hero: { title: 'Hero Section', description: 'Edit the homepage hero headline, subheadline, and CTA button labels.' },
  services: { title: 'Services', description: 'Add, edit, or remove service listings. Changes affect the services page and homepage cards.' },
  gallery: { title: 'Gallery', description: 'Manage gallery photos. Add image URLs, location tags (suburb), and service tags.' },
  testimonials: { title: 'Testimonials', description: 'Add or edit customer reviews shown on the homepage and testimonials page.' },
  pricing: { title: 'Pricing', description: 'Update starting prices and notes shown on the pricing page.' },
  faq: { title: 'FAQ', description: 'Edit frequently asked questions shown on the homepage and contact page.' },
  contact: { title: 'Contact Details', description: 'Update phone number, email, social links, and business hours.' },
  trust: { title: 'Trust Bar', description: 'Edit the trust indicator items shown below the hero section.' },
  seo: { title: 'SEO Settings', description: 'Update meta titles and descriptions for each page.' },
}

interface Props {
  params: { section: string }
}

export default function AdminSectionPage({ params }: Props) {
  if (!isAuthenticated()) {
    redirect('/admin')
  }

  const { section } = params
  const meta = sectionMeta[section]

  if (!meta) {
    redirect('/admin/hero')
  }

  // Load content server-side
  const contentMap: Record<string, unknown> = {
    hero: getHero(),
    services: getServices(),
    gallery: getGallery(),
    testimonials: getTestimonials(),
    pricing: getPricing(),
    faq: getFAQ(),
    contact: getContact(),
    trust: getTrust(),
    seo: getSEO(),
  }

  const content = contentMap[section]

  return (
    <div className="flex min-h-screen">
      <AdminNav />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-xl font-700 text-forest">{meta.title}</h1>
            <p className="text-sm text-gray-500 mt-0.5">{meta.description}</p>
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400 hover:text-forest transition-colors flex items-center gap-1.5"
          >
            View Site
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </header>

        {/* Editor content */}
        <main className="flex-1 p-8 overflow-auto">
          {section === 'hero' && <HeroEditor initialContent={content as ReturnType<typeof getHero>} />}
          {section === 'services' && <ServicesEditor initialContent={content as ReturnType<typeof getServices>} />}
          {section === 'gallery' && <GalleryEditor initialContent={content as ReturnType<typeof getGallery>} />}
          {section === 'testimonials' && <TestimonialsEditor initialContent={content as ReturnType<typeof getTestimonials>} />}
          {section === 'pricing' && <PricingEditor initialContent={content as ReturnType<typeof getPricing>} />}
          {section === 'faq' && <FAQEditor initialContent={content as ReturnType<typeof getFAQ>} />}
          {section === 'contact' && <ContactEditor initialContent={content as ReturnType<typeof getContact>} />}
          {section === 'trust' && <TrustEditor initialContent={content as ReturnType<typeof getTrust>} />}
          {section === 'seo' && <SEOEditor initialContent={content as ReturnType<typeof getSEO>} />}
        </main>
      </div>

      <CMSChat />
    </div>
  )
}
