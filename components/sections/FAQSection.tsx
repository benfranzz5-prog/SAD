'use client'

import { useState } from 'react'
import type { FAQItem } from '@/lib/cms'
import SectionTitle from '@/components/ui/SectionTitle'

interface FAQSectionProps {
  items: FAQItem[]
  preview?: boolean
  light?: boolean
}

export default function FAQSection({ items, preview = false, light = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const displayItems = preview ? items.slice(0, 2) : items

  return (
    <section
      className={`section-pad ${light ? 'bg-forest' : 'bg-bg'}`}
      aria-labelledby="faq-heading"
    >
      <div className="container max-w-3xl">
        <div className="reveal mb-10">
          <SectionTitle
            eyebrow="FAQ"
            title="Common questions."
            light={light}
          />
        </div>

        <dl className="reveal flex flex-col divide-y divide-forest/10">
          {displayItems.map((item, i) => (
            <div key={i} className="py-5">
              <dt>
                <button
                  className={`flex items-center justify-between w-full text-left gap-4 ${
                    light ? 'text-primary' : 'text-forest'
                  }`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-heading text-[1.1rem] font-700 leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center border ${
                      light ? 'border-green-700 text-primary' : 'border-forest/30 text-forest'
                    } transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd
                  className={`mt-3 text-[15px] leading-relaxed pr-10 ${
                    light ? 'text-green-100/75' : 'text-forest/70'
                  }`}
                >
                  {item.answer}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
