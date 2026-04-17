import Image from 'next/image'
import Link from 'next/link'
import type { GalleryItem } from '@/lib/cms'

interface GalleryPreviewProps {
  items: GalleryItem[]
}

export default function GalleryPreview({ items }: GalleryPreviewProps) {
  const preview = items.slice(0, 5)

  return (
    <section className="section-pad bg-[#EBEDEC]" aria-labelledby="gallery-heading">
      <div className="container">
        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow mb-3">Our Work</p>
            <h2
              className="font-heading text-[#003B20] leading-[1.02] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800 }}
            >
              Results speak<br />for themselves.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="shrink-0 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#0000EE] hover:gap-3 transition-all"
          >
            View All Work
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Magazine grid: 1 tall left + 2×2 right */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Feature — tall, spans 2 rows on md */}
          <div
            className="col-span-1 md:row-span-2 reveal relative group overflow-hidden bg-[#003B20]/10"
            style={{ aspectRatio: '3/4' }}
          >
            {preview[0] && (
              <>
                <Image
                  src={preview[0].src}
                  alt={preview[0].alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,59,32,0.85) 0%, rgba(0,59,32,0.0) 60%)',
                  }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">
                    {preview[0].location}
                  </p>
                  <p className="font-heading text-[#FFF8E6] font-bold leading-tight" style={{ fontSize: '1.1rem' }}>
                    {preview[0].alt}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* 4 smaller images */}
          {preview.slice(1, 5).map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} relative group overflow-hidden bg-[#003B20]/10`}
              style={{ aspectRatio: '4/3' }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'rgba(0,59,32,0.5)' }}
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom label strip */}
        <div className="reveal mt-5 flex items-center justify-between">
          <p
            className="text-[11px] uppercase tracking-[0.15em] text-[#003B20]/40"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Adelaide — Norwood, Burnside, Glenelg &amp; more
          </p>
          <p
            className="text-[11px] uppercase tracking-[0.15em] text-[#003B20]/40"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Real results. No filters.
          </p>
        </div>
      </div>
    </section>
  )
}
