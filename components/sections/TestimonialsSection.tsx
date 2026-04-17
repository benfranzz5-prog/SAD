import Link from 'next/link'
import type { Testimonial } from '@/lib/cms'
import StarRating from '@/components/ui/StarRating'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  preview?: boolean
}

export default function TestimonialsSection({ testimonials, preview = false }: TestimonialsSectionProps) {
  const items = preview ? testimonials.slice(0, 4) : testimonials
  const [featured, ...rest] = items

  return (
    <section className="section-pad bg-off-white" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">Reviews</p>
            <h2 className="font-heading text-green leading-[1.02]" style={{ fontWeight: 700 }}>
              What Adelaide says.
            </h2>
          </div>
          {preview && (
            <Link
              href="/testimonials"
              className="shrink-0 font-body flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-green hover:text-green-mid hover:gap-3 transition-all"
            >
              All Reviews
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          )}
        </div>

        {/* Featured */}
        {featured && (
          <div className="reveal mb-8 bg-green p-8 md:p-12 relative overflow-hidden">
            <span
              className="absolute top-4 right-8 font-heading text-cream/5 select-none leading-none"
              style={{ fontSize: '12rem', fontWeight: 700, lineHeight: 1 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <div className="relative z-10 max-w-3xl">
              <StarRating rating={featured.rating} className="mb-6" light />
              <blockquote>
                <p
                  className="font-heading text-cream leading-snug mb-8 italic"
                  style={{ fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', fontWeight: 500 }}
                >
                  &ldquo;{featured.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic flex items-center gap-3">
                    <div className="w-8 h-px bg-cream/20" />
                    <div>
                      <span className="block font-body text-cream font-bold text-[13px]">{featured.author}</span>
                      <span className="block font-body text-cream/45 text-[11px] uppercase tracking-[0.1em]">{featured.suburb}, Adelaide</span>
                    </div>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        )}

        {/* Secondary grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((t, i) => (
            <blockquote
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-cream-light p-6 flex flex-col border border-green/8`}
            >
              <StarRating rating={t.rating} className="mb-4" />
              <p className="font-body text-green/70 text-[14px] leading-relaxed flex-1 mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="border-t border-green/10 pt-4">
                <cite className="not-italic">
                  <span className="font-body font-bold text-[13px] text-green">{t.author}</span>
                  <span className="font-body text-green/45 text-[13px]"> &middot; {t.suburb}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Rating footer */}
        <div className="reveal mt-8 flex flex-col sm:flex-row items-center gap-3 pt-8 border-t border-green/10">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="font-body text-green/40 text-[11px] uppercase tracking-[0.1em]">
            5.0 rating &middot; Google Reviews &middot; Adelaide
          </p>
        </div>
      </div>
    </section>
  )
}
