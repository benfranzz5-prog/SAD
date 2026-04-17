import Link from 'next/link'
import Image from 'next/image'

interface CTABannerProps {
  title?: string
  subtitle?: string
}

export default function CTABanner({
  title = 'Ready for a proper detail?',
  subtitle = "Get in touch and we'll sort out exactly what your car needs. Strictly mobile — we come to you.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden" aria-label="Call to action" style={{ minHeight: '380px' }}>
      <Image
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(18,46,25,0.92)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 container section-pad flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div className="reveal max-w-xl">
          <p className="eyebrow mb-4 text-cream/40">Get Started</p>
          <h2
            className="font-heading text-cream leading-[1.0] mb-4"
            style={{ fontWeight: 700 }}
          >
            {title}
          </h2>
          <p className="font-body text-cream/60 text-[15px] leading-relaxed">{subtitle}</p>
        </div>

        <div className="reveal reveal-delay-1 flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <Link href="/contact" className="btn-primary">
            Get A Free Quote
          </Link>
          <a
            href="tel:+61415163873"
            className="btn-outline text-cream border-cream/30 hover:bg-cream/10"
          >
            0415 163 873
          </a>
        </div>
      </div>
    </section>
  )
}
