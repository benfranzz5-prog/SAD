'use client'

import { useState, useRef } from 'react'
import { LazyMotion, domMax, m, AnimatePresence, useInView } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'

const FAQS = [
  {
    q: 'Where are you located?',
    a: "We are strictly mobile — we come to you. No drop-off required. Book a time, give us your address, and we'll be there. We service the entire Adelaide metro area.",
  },
  {
    q: 'What do you need on site?',
    a: 'We require access to a power outlet and water source on site. A standard garden tap and power point is all it takes. If you&apos;re not sure whether your location works, just ask — we&apos;ll sort it.',
  },
  {
    q: 'How do I book?',
    a: "Fill out the enquiry form on this site or call/text Sebastian directly on +61 415 163 873. Sebastian handles every booking personally — no call centres, no waiting. You'll get a reply promptly.",
  },
  {
    q: 'How long does it take?',
    a: 'It depends on the service and condition of your vehicle. A full interior & exterior detail typically takes 3–4 hours. Paint rejuvenation is 4–6 hours. A ceramic coating application is a full day job. Sebastian will give you an accurate time estimate when you enquire.',
  },
]

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
  index,
}: {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-[var(--color-border)]"
    >
      <button
        type="button"
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group focus-visible:outline-2 focus-visible:outline-[var(--color-cream)] focus-visible:outline-offset-2"
        onClick={onToggle}
      >
        <span
          className="text-base font-medium leading-snug transition-colors duration-200"
          style={{ color: isOpen ? 'var(--color-cream)' : 'var(--color-text-muted)' }}
        >
          {q}
        </span>
        <m.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl shrink-0 transition-colors duration-200"
          style={{ color: isOpen ? 'var(--color-cream)' : 'var(--color-text-faint)' }}
          aria-hidden="true"
        >
          +
        </m.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 text-sm leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
              dangerouslySetInnerHTML={{ __html: a }}
            />
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <LazyMotion features={domMax}>
      <section
        aria-labelledby="faq-heading"
        className="section-padding"
        style={{ background: 'var(--color-bg)' }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left column — title */}
            <div className="lg:sticky lg:top-28">
              <SectionTitle
                label="FAQ"
                title="Common Questions"
                subtitle="Straight answers to the things people actually ask."
              />
              <div className="mt-8 p-6 border border-[var(--color-border)] bg-[var(--color-surface-1)]">
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                  Don&apos;t see your question here?
                </p>
                <a
                  href="tel:+61415163873"
                  className="flex items-center gap-2 text-base font-semibold transition-colors duration-200"
                  style={{ color: 'var(--color-cream)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-silver)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
                >
                  <span>Call +61 415 163 873</span>
                </a>
                <p className="text-xs mt-1" style={{ color: 'var(--color-text-faint)' }}>
                  Sebastian answers personally.
                </p>
              </div>
            </div>

            {/* Right column — accordion */}
            <div role="list">
              {FAQS.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

export default FAQSection
