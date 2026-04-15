import Image from 'next/image'
import Link from 'next/link'
import type { GalleryItem } from '@/lib/cms'
import SectionTitle from '@/components/ui/SectionTitle'

interface GalleryPreviewProps {
  items: GalleryItem[]
}

export default function GalleryPreview({ items }: GalleryPreviewProps) {
  const preview = items.slice(0, 6)

  return (
    <section className="section-pad bg-accent" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="Our Work"
            title="Results speak for themselves."
          />
          <Link
            href="/gallery"
            className="shrink-0 text-[12px] font-bold uppercase tracking-[0.1em] text-secondary hover:underline underline-offset-4 decoration-2 flex items-center gap-1.5"
          >
            View All Work
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {preview.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative group overflow-hidden bg-forest/10 ${
                i === 0 ? 'row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '4/5' : '4/3' }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Location tag overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-bold uppercase tracking-[0.1em]">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
