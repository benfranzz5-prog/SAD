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
      {/* Background car image */}
      <Image
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Dark green overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,59,32,0.92)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container section-pad flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div className="reveal max-w-xl">
          <p className="eyebrow mb-4 text-[#FFF8E6]/50">Get Started</p>
          <h2
            className="font-heading text-[#FFF8E6] leading-[1.0] tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}
          >
            {title}
          </h2>
          <p className="text-[#FFF8E6]/65 text-[15px] leading-relaxed">{subtitle}</p>
        </div>

        <div className="reveal reveal-delay-1 flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#0000EE] text-white font-heading font-bold uppercase tracking-[0.1em] text-[13px] px-10 py-4 hover:bg-blue-700 transition-colors"
          >
            Get A Free Quote
          </Link>
          <a
            href="tel:+61415163873"
            className="inline-flex items-center justify-center border border-white/30 text-[#FFF8E6] font-heading font-bold uppercase tracking-[0.1em] text-[13px] px-10 py-4 hover:bg-white/10 transition-colors"
          >
            0415 163 873
          </a>
        </div>
      </div>
    </section>
  )
}
