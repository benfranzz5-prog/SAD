'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { LazyMotion, domMax, m, useInView } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'

const services = [
  {
    slug: 'interior-exterior-detailing',
    title: 'Interior & Exterior Detailing',
    short: 'A thorough full clean inside and out. Pre-sale, post-purchase, or just because. This is the baseline.',
    icon: '◈',
    tag: 'Most Popular',
  },
  {
    slug: 'paint-rejuvenation',
    title: 'Paint Rejuvenation',
    short: 'Full machine cut & polish. Remove swirls, scratches and oxidation. Restore depth and gloss to tired paint.',
    icon: '◉',
    tag: "Sebastian's Specialty",
  },
  {
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    short: "The best protection you can put on a car. Includes full paint rejuvenation. Lasts years — not weeks.",
    icon: '◆',
    tag: 'Ultimate Protection',
  },
  {
    slug: 'interior-details',
    title: 'Interior Detail',
    short: 'Deep clean every surface inside the cabin. Steam treatment, leather conditioning, odour elimination.',
    icon: '◇',
    tag: null,
  },
  {
    slug: 'exterior-details',
    title: 'Exterior Detail',
    short: 'Hand wash, clay bar, tyre dress, glass treatment. Paint feels new without the full correction.',
    icon: '◈',
    tag: null,
  },
]

function ServiceCard({
  slug,
  title,
  short,
  icon,
  tag,
  index,
}: {
  slug: string
  title: string
  short: string
  icon: string
  tag: string | null
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/services/${slug}`}
        className="group block card-dark p-7 relative overflow-hidden h-full"
        aria-label={`Learn more about ${title}`}
      >
        {/* Hover fill */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(135deg, var(--color-accent-dark), var(--color-accent-muted))' }}
          aria-hidden="true"
        />

        {/* Tag badge */}
        {tag && (
          <span
            className="relative z-10 inline-block text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 mb-5 border"
            style={{
              borderColor: 'var(--color-accent)',
              color: 'var(--color-accent-light)',
              background: 'var(--color-accent-dark)',
            }}
          >
            {tag}
          </span>
        )}

        {/* Icon */}
        <div
          className="relative z-10 text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 origin-left"
          style={{ color: 'var(--color-accent-light)' }}
          aria-hidden="true"
        >
          {icon}
        </div>

        {/* Content */}
        <h3
          className="relative z-10 text-display text-2xl uppercase tracking-wider mb-3 transition-colors duration-300"
          style={{ color: 'var(--color-cream)' }}
        >
          {title}
        </h3>
        <p
          className="relative z-10 text-sm leading-relaxed mb-6 transition-colors duration-300"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {short}
        </p>

        {/* CTA arrow */}
        <div
          className="relative z-10 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 group-hover:gap-4"
          style={{ color: 'var(--color-accent-light)' }}
        >
          <span>Learn More</span>
          <span className="text-base leading-none">→</span>
        </div>

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
          style={{
            background: 'linear-gradient(to right, var(--color-accent), transparent)',
            opacity: 0.6,
          }}
          aria-hidden="true"
        />
      </Link>
    </m.div>
  )
}

export function ServicesOverview() {
  return (
    <LazyMotion features={domMax}>
      <section
        aria-labelledby="services-heading"
        className="section-padding relative"
        style={{ background: 'var(--color-bg)' }}
      >
        <div className="container-site">
          <SectionTitle
            label="What We Do"
            title="Services"
            subtitle="Every service is performed personally by Sebastian. No subcontractors. No shortcuts."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} {...service} index={i} />
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[var(--color-text-muted)] mb-4">
              Not sure which service is right for your car?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 hover:gap-4"
              style={{ color: 'var(--color-cream)' }}
            >
              Ask Sebastian directly →
            </Link>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

export default ServicesOverview
