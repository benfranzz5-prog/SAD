import Link from 'next/link'
import type { Testimonial } from '@/lib/cms'
import SectionTitle from '@/components/ui/SectionTitle'
import StarRating from '@/components/ui/StarRating'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  preview?: boolean
}

export default function TestimonialsSection({ testimonials, preview = false }: TestimonialsSectionProps) {
  const items = preview ? testimonials.slice(0, 3) : testimonials

  return (
    <section className="section-pad bg-primary" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="Reviews"
            title="What Adelaide says."
          />
          {preview && (
            <Link
              href="/testimonials"
              className="shrink-0 text-[12px] font-bold uppercase tracking-[0.1em] text-secondary hover:underline underline-offset-4 decoration-2 flex items-center gap-1.5"
            >
              All Reviews
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          )}
        </div>

        <div className={`grid grid-cols-1 ${preview ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {items.map((t, i) => (
            <blockquote
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} bg-accent border border-forest/10 p-7 flex flex-col`}
            >
              <StarRating rating={t.rating} className="mb-4" />
              <p className="text-forest/80 text-[15px] leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="border-t border-forest/10 pt-4">
                <cite className="not-italic">
                  <span className="font-bold text-sm text-forest">{t.author}</span>
                  <span className="text-forest/50 text-sm"> &middot; {t.suburb}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
