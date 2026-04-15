import fs from 'fs'
import path from 'path'

const contentDir = path.join(process.cwd(), 'content')

function readJSON<T>(filename: string): T {
  const filePath = path.join(contentDir, filename)
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw) as T
}

export interface HeroContent {
  headline: string
  subheadline: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary: { label: string; href: string }
  backgroundImage: string
}

export interface Service {
  slug: string
  title: string
  shortDescription: string
  heroImage: string
  steps: string[]
  whoFor: string[]
  fromPrice: number
  note: string
  sebastianNote?: string
}

export interface GalleryItem {
  src: string
  alt: string
  location: string
  service: string
}

export interface Testimonial {
  quote: string
  author: string
  suburb: string
  rating: number
}

export interface PricingItem {
  service: string
  from: number
  note: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ContactContent {
  phone: string
  phoneFormatted: string
  email: string
  instagram: string
  facebook: string
  note: string
  hours: string
}

export interface TrustItem {
  label: string
  icon: string
}

export interface SEOContent {
  [key: string]: {
    title: string
    description: string
  }
}

export const getHero = () => readJSON<HeroContent>('hero.json')
export const getServices = () => readJSON<Service[]>('services.json')
export const getGallery = () => readJSON<GalleryItem[]>('gallery.json')
export const getTestimonials = () => readJSON<Testimonial[]>('testimonials.json')
export const getPricing = () => readJSON<PricingItem[]>('pricing.json')
export const getFAQ = () => readJSON<FAQItem[]>('faq.json')
export const getContact = () => readJSON<ContactContent>('contact.json')
export const getTrust = () => readJSON<TrustItem[]>('trust.json')
export const getSEO = () => readJSON<SEOContent>('seo.json')

export function getServiceBySlug(slug: string): Service | undefined {
  const services = getServices()
  return services.find((s) => s.slug === slug)
}
