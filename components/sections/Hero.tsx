'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { LazyMotion, domMax, m, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <LazyMotion features={domMax}>
      <section
        ref={containerRef}
        aria-label="Hero — Sebastian's Automotive Detailing"
        className="relative w-full h-screen min-h-[600px] overflow-hidden"
      >
        {/* Background layer — video with image fallback */}
        <m.div
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          {/* Fallback background image — replace with actual image in /public/images/ */}
          <Image
            src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=1920&q=85"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
          {/* Cinematic overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(28,58,40,0.25) 50%, rgba(10,10,10,0.75) 100%)',
            }}
            aria-hidden="true"
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-48"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--color-bg))',
            }}
            aria-hidden="true"
          />
          {/* Subtle vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
            }}
            aria-hidden="true"
          />
        </m.div>

        {/* Content */}
        <m.div
          className="relative z-10 h-full flex flex-col justify-center"
          style={{ y: textY, opacity }}
        >
          <div className="container-site">
            <m.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              {/* Eyebrow */}
              <m.p
                variants={fadeIn}
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-5"
                style={{ color: 'var(--color-accent-light)' }}
              >
                Adelaide&apos;s Premier Mobile Detailer
              </m.p>

              {/* Main headline */}
              <m.h1
                variants={fadeUp}
                className="text-display uppercase leading-none mb-2"
                style={{
                  fontSize: 'clamp(4rem, 12vw, 10rem)',
                  color: 'var(--color-cream)',
                }}
              >
                Your Car.
              </m.h1>
              <m.h1
                variants={fadeUp}
                className="text-display uppercase leading-none mb-8"
                style={{
                  fontSize: 'clamp(4rem, 12vw, 10rem)',
                  color: 'var(--color-cream)',
                }}
              >
                <span style={{ color: 'var(--color-accent-light)', WebkitTextStroke: '1px var(--color-accent-light)' }}>
                  Perfected.
                </span>
              </m.h1>

              {/* Sub headline */}
              <m.p
                variants={fadeUp}
                className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Premium mobile detailing, paint correction & ceramic coatings. We come to
                you — anywhere in Adelaide.
              </m.p>

              {/* CTA row */}
              <m.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
                <Button as="link" href="/contact" variant="primary" size="lg">
                  Get A Free Quote
                </Button>
                <Button as="link" href="/services" variant="secondary" size="lg">
                  View Services
                </Button>
                <a
                  href="tel:+61415163873"
                  className="text-sm font-semibold tracking-widest uppercase transition-colors duration-200 ml-2 hidden sm:block"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  or call +61 415 163 873
                </a>
              </m.div>
            </m.div>
          </div>
        </m.div>

        {/* Scroll indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--color-text-faint)' }}>
            Scroll
          </span>
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, var(--color-accent-light), transparent)' }}
          />
        </m.div>
      </section>
    </LazyMotion>
  )
}

export default Hero
