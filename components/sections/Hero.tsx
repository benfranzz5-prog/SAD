import Image from 'next/image'
import Link from 'next/link'
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
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt="Premium automotive detailing"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — stronger at bottom, lighter at top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.88) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Top eyebrow strip */}
      <div className="absolute top-0 left-0 right-0 pt-[96px] z-10">
        <div className="container">
          <p
            className="hero-title text-[11px] font-bold uppercase tracking-[0.25em] text-white/50"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Adelaide&apos;s Mobile Detailing Specialist
          </p>
        </div>
      </div>

      {/* Main content — pinned to bottom */}
      <div className="relative z-10 container pb-20 md:pb-24">
        {/* Big editorial headline */}
        <h1
          className="hero-title font-heading text-white leading-[0.95] tracking-[-0.03em] mb-6"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', fontWeight: 800 }}
        >
          {/* Split headline for visual interest */}
          <span className="block">Adelaide's Mobile</span>
          <span className="block">Car Detailing,</span>
          <span className="block text-[#0000EE]">Done Right.</span>
        </h1>

        <div className="hero-sub flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
          <p
            className="text-white/70 leading-relaxed max-w-sm"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}
          >
            {subheadline}
          </p>

          <div className="hero-ctas flex flex-col xs:flex-row gap-3 shrink-0">
            <a
              href={ctaPrimary.href}
              className="inline-flex items-center justify-center bg-[#0000EE] text-white font-heading font-bold uppercase tracking-[0.1em] text-[13px] px-8 py-4 hover:bg-blue-700 transition-colors"
            >
              {ctaPrimary.label}
            </a>
            <a
              href={ctaSecondary.href}
              className="inline-flex items-center justify-center border border-white/50 text-white font-heading font-bold uppercase tracking-[0.1em] text-[13px] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              {ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* Driven by passion tag */}
        <div className="hero-ctas mt-10 flex items-center gap-3">
          <div className="w-8 h-px bg-white/30" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            Driven By Passion
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white/60"
            style={{
              height: '50%',
              animation: 'scrollBounce 1.8s ease-in-out infinite',
            }}
            aria-hidden="true"
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>
    </section>
  )
}
