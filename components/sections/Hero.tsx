import Image from 'next/image'
import type { HeroContent } from '@/lib/cms'

interface HeroProps {
  content: HeroContent
}

export default function Hero({ content }: HeroProps) {
  const { headline, subheadline, ctaPrimary, ctaSecondary, backgroundImage } = content

  return (
    <section
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden"
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center px-4">
        <p className="hero-title mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
          Adelaide&apos;s Mobile Detailing Specialist
        </p>

        <h1 className="hero-title font-heading text-white tracking-[-0.025em] leading-[1.02] max-w-4xl"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 800 }}>
          {headline}
        </h1>

        <p className="hero-sub mt-6 text-white/75 text-[clamp(1rem,2vw,1.2rem)] leading-relaxed max-w-xl">
          {subheadline}
        </p>

        <div className="hero-ctas mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href={ctaPrimary.href}
            className="inline-flex items-center justify-center bg-secondary text-white font-heading font-700 uppercase tracking-[0.08em] text-sm px-9 py-4 hover:bg-blue-700 active:bg-blue-800 transition-colors"
          >
            {ctaPrimary.label}
          </a>
          <a
            href={ctaSecondary.href}
            className="inline-flex items-center justify-center border-2 border-white text-white font-heading font-700 uppercase tracking-[0.08em] text-sm px-9 py-4 hover:bg-white hover:text-forest transition-colors"
          >
            {ctaSecondary.label}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">Scroll</span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white/80"
            style={{
              height: '40%',
              animation: 'scrollBounce 1.5s ease-in-out infinite',
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
