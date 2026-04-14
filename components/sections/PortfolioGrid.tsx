'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { LazyMotion, domMax, m, AnimatePresence, useInView } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'

const PLACEHOLDER_ITEMS = [
  {
    id: 1,
    title: 'BMW M3 — Ceramic Coating',
    location: 'Glenelg, SA',
    service_category: 'ceramic-coating',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c16f4d68?w=800&q=80',
  },
  {
    id: 2,
    title: 'Mercedes C63 — Paint Rejuvenation',
    location: 'North Adelaide',
    service_category: 'paint-rejuvenation',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80',
  },
  {
    id: 3,
    title: 'Toyota Land Cruiser — Full Detail',
    location: 'Burnside, SA',
    service_category: 'interior-exterior',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
  },
  {
    id: 4,
    title: 'Porsche 911 — Exterior Detail',
    location: 'Unley, SA',
    service_category: 'exterior',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  },
  {
    id: 5,
    title: 'Range Rover Sport — Ceramic Coating',
    location: 'Prospect, SA',
    service_category: 'ceramic-coating',
    image: 'https://images.unsplash.com/photo-1596220549148-cb4fe47d0df4?w=800&q=80',
  },
  {
    id: 6,
    title: 'Audi Q7 — Interior Detail',
    location: 'Norwood, SA',
    service_category: 'interior',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
  },
]

const CATEGORY_LABELS: Record<string, string> = {
  all: 'All Work',
  'ceramic-coating': 'Ceramic Coating',
  'paint-rejuvenation': 'Paint Rejuvenation',
  'interior-exterior': 'Interior & Exterior',
  interior: 'Interior',
  exterior: 'Exterior',
}

function PortfolioItem({
  title,
  location,
  image,
  index,
}: {
  title: string
  location: string
  image: string
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden aspect-[4/3] cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      role="img"
      aria-label={`${title} — ${location}`}
    >
      <Image
        src={image}
        alt={`${title} — detailing work in ${location}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Hover overlay */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content overlay */}
      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 16 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 p-5"
      >
        <p
          className="text-xs font-semibold tracking-[0.15em] uppercase mb-1.5 flex items-center gap-1.5"
          style={{ color: 'var(--color-accent-light)' }}
        >
          <svg width="10" height="12" viewBox="0 0 10 14" fill="currentColor" aria-hidden="true">
            <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5C4.17 6.5 3.5 5.83 3.5 5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z" />
          </svg>
          {location}
        </p>
        <p
          className="text-display text-xl uppercase tracking-wide leading-tight"
          style={{ color: 'var(--color-cream)' }}
        >
          {title}
        </p>
      </m.div>
    </m.div>
  )
}

interface PortfolioGridProps {
  limit?: number
  showFilters?: boolean
}

export function PortfolioGrid({ limit, showFilters = true }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = PLACEHOLDER_ITEMS.filter(
    (item) => activeCategory === 'all' || item.service_category === activeCategory,
  )

  const displayed = limit ? filtered.slice(0, limit) : filtered
  const categories = ['all', ...Array.from(new Set(PLACEHOLDER_ITEMS.map((i) => i.service_category)))]

  return (
    <LazyMotion features={domMax}>
      <section
        aria-labelledby="portfolio-heading"
        className="section-padding"
        style={{ background: 'var(--color-bg)' }}
      >
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionTitle
              label="Our Work"
              title="Portfolio"
              subtitle="A selection of recent details from around Adelaide."
            />
            {!limit && (
              <a
                href="/portfolio"
                className="text-xs font-semibold tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all duration-200 shrink-0"
                style={{ color: 'var(--color-text-muted)' }}
              >
                View All →
              </a>
            )}
          </div>

          {showFilters && (
            <div
              role="group"
              aria-label="Filter portfolio by service category"
              className="flex flex-wrap gap-2 mb-8"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className="text-xs font-semibold tracking-widest uppercase px-4 py-2 border transition-all duration-200"
                  style={{
                    borderColor: activeCategory === cat ? 'var(--color-accent)' : 'var(--color-border)',
                    background: activeCategory === cat ? 'var(--color-accent)' : 'transparent',
                    color: activeCategory === cat ? 'var(--color-cream)' : 'var(--color-text-muted)',
                  }}
                >
                  {CATEGORY_LABELS[cat] ?? cat}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <AnimatePresence mode="popLayout">
              {displayed.map((item, i) => (
                <PortfolioItem key={item.id} {...item} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {limit && PLACEHOLDER_ITEMS.length > limit && (
            <div className="mt-10 text-center">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border border-[var(--color-border)] px-8 py-4 transition-all duration-300 hover:border-[var(--color-cream)] hover:text-[var(--color-cream)]"
                style={{ color: 'var(--color-text-muted)' }}
              >
                View Full Portfolio →
              </a>
            </div>
          )}
        </div>
      </section>
    </LazyMotion>
  )
}

export default PortfolioGrid
