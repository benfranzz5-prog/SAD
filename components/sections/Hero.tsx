import Image from 'next/image'
import type { HeroContent } from '@/lib/cms'

interface HeroProps {
  content: HeroContent
}

export default function Hero({ content }: HeroProps) {
  const { headline, subheadline, ctaPrimary, ctaSecondary, backgroundImage } = content

  return (
    <section
      className="relative flex flex-col justify-end min-h-screen w-full overflow-hidden"
      aria-label="Hero"
    >
      <Image
        src={backgroundImage}
        alt="Premium automotive detailing"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay — dark green tinted */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(18,46,25,0.3) 0%, rgba(18,46,25,0.15) 40%, rgba(18,46,25,0.72) 75%, rgba(18,46,25,0.92) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Top eyebrow */}
      <div className="absolute top-0 left-0 right-0 pt-[96px] z-10">
        <div className="container">
          <p className="hero-title font-body text-[11px] font-bold uppercase tracking-[0.25em] text-cream/50">
            Adelaide&apos;s Mobile Detailing Specialist
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container pb-20 md:pb-24">
        <h1
          className="hero-title font-heading text-cream leading-[0.95] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', fontWeight: 700 }}
        >
          <span className="block">Adelaide&apos;s Mobile</span>
          <span className="block">Car Detailing,</span>
          <span className="block italic text-cream/80">Done Right.</span>
        </h1>

        <div className="hero-sub flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
          <p
            className="font-body text-cream/70 leading-relaxed max-w-sm"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}
          >
            {subheadline}
          </p>

          <div className="hero-ctas flex flex-col xs:flex-row gap-3 shrink-0">
            <a href={ctaPrimary.href} className="btn-primary">
              {ctaPrimary.label}
            </a>
            <a
              href={ctaSecondary.href}
              className="btn-outline text-cream border-cream/40 hover:bg-cream/10"
            >
              {ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="hero-ctas mt-10 flex items-center gap-3">
          <div className="w-8 h-px bg-cream/25" />
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-cream/35">
            Driven By Passion
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-cream/20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-cream/50"
            style={{ height: '50%', animation: 'scrollBounce 1.8s ease-in-out infinite' }}
            aria-hidden="true"
          />
        </div>
        <span className="font-body text-[9px] uppercase tracking-[0.2em] text-cream/25 [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>
    </section>
  )
}
