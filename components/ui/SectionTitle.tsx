'use client'

import { useRef } from 'react'
import { LazyMotion, domMax, m, useInView } from 'framer-motion'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  size?: 'default' | 'large'
  className?: string
  titleClassName?: string
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = 'left',
  size = 'default',
  className = '',
  titleClassName = '',
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align]

  const titleSize = size === 'large'
    ? 'text-[clamp(3rem,6vw,6rem)]'
    : 'text-[clamp(2rem,4vw,4rem)]'

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const staggerChild = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <LazyMotion features={domMax}>
      <m.div
        ref={ref}
        className={`${alignClass} ${className}`}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {label && (
          <m.span
            className="section-label"
            variants={staggerChild}
          >
            {label}
          </m.span>
        )}
        <m.h2
          className={`text-display uppercase leading-none text-[var(--color-cream)] ${titleSize} ${titleClassName}`}
          variants={variants}
        >
          {title}
        </m.h2>
        {subtitle && (
          <m.p
            className="mt-4 text-[var(--color-text-muted)] text-base md:text-lg max-w-2xl leading-relaxed"
            style={align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}
            variants={staggerChild}
          >
            {subtitle}
          </m.p>
        )}
      </m.div>
    </LazyMotion>
  )
}

export default SectionTitle
