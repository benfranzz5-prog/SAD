'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { GalleryItem, Service } from '@/lib/cms'

interface GalleryGridProps {
  items: GalleryItem[]
  services: Service[]
}

export default function GalleryGrid({ items, services }: GalleryGridProps) {
  const [filter, setFilter] = useState<string>('all')

  const filtered = filter === 'all' ? items : items.filter((i) => i.service === filter)

  const filterOptions = [
    { value: 'all', label: 'All Work' },
    ...services.map((s) => ({ value: s.slug, label: s.title })),
  ]

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by service">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`text-xs font-bold uppercase tracking-[0.08em] px-5 py-2.5 border transition-colors ${
              filter === opt.value
                ? 'bg-forest text-primary border-forest'
                : 'bg-transparent text-forest border-forest/30 hover:border-forest'
            }`}
            aria-pressed={filter === opt.value}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden break-inside-avoid bg-forest/10"
          >
            <div className="relative w-full" style={{ aspectRatio: i % 5 === 0 ? '3/4' : '4/3' }}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            {/* Tags overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xs font-bold uppercase tracking-[0.08em]">
                {item.location}
              </p>
              <p className="text-white/60 text-[11px] uppercase tracking-[0.06em] mt-0.5">
                {services.find((s) => s.slug === item.service)?.title ?? item.service}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-forest/50 text-center py-12">No photos for this filter yet.</p>
      )}
    </div>
  )
}
