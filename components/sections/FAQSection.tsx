'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { FAQItem } from '@/lib/cms'

interface FAQSectionProps {
  items: FAQItem[]
  preview?: boolean
  light?: boolean
}

export default function FAQSection({ items, preview = false, light = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const displayItems = preview ? items.slice(0, 4) : items

  const bg = light ? 'bg-[#003B20]' : 'bg-[#E8E6E6]'
  const headingColor = light ? 'text-[#FFF8E6]' : 'text-[#003B20]'
  const eyebrowColor = light ? 'text-[#FFF8E6]/50' : ''
  const questionColor = light ? 'text-[#FFF8E6]' : 'text-[#003B20]'
  const answerColor = light ? 'text-[#FFF8E6]/65' : 'text-[#003B20]/70'
  const dividerColor = light ? 'divide-white/10 border-white/10' : 'divide-[#003B20]/10 border-[#003B20]/10'
  const iconBorderColor = light ? 'border-white/20' : 'border-[#003B20]/20'
  const iconColor = light ? 'text-[#FFF8E6]' : 'text-[#003B20]'

  return (
    <section className={`section-pad ${bg}`} aria-labelledby="faq-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left: title + optional CTA */}
          <div className="reveal">
            <p className={`eyebrow mb-3 ${eyebrowColor}`}>FAQ</p>
            <h2
              id="faq-heading"
              className={`font-heading leading-[1.02] tracking-[-0.02em] mb-6 ${headingColor}`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}
            >
              Common questions.
            </h2>
            <p className={`text-[14px] leading-relaxed mb-8 ${light ? 'text-[#FFF8E6]/55' : 'text-[#003B20]/60'}`}>
              Can&apos;t find what you need? Contact Sebastian directly.
            </p>
            <a
              href="tel:+61415163873"
              className={`inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] ${light ? 'text-[#0000EE]' : 'text-[#0000EE]'} hover:gap-3 transition-all`}
            >
              Call or Text
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-2">
            <dl className={`reveal flex flex-col divide-y ${dividerColor}`}>
              {displayItems.map((item, i) => (
                <div key={i} className="py-5">
                  <dt>
                    <button
                      className={`flex items-start justify-between w-full text-left gap-6 ${questionColor}`}
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      aria-expanded={openIndex === i}
                    >
                      <span
                        className="font-heading font-bold leading-snug"
                        style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)' }}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`shrink-0 w-6 h-6 flex items-center justify-center border rounded-full ${iconBorderColor} ${iconColor} transition-transform duration-200 mt-0.5 ${openIndex === i ? 'rotate-45' : ''}`}
                        aria-hidden="true"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  {openIndex === i && (
                    <dd className={`mt-3 text-[14px] leading-relaxed pr-12 ${answerColor}`}>
                      {item.answer}
                    </dd>
                  )}
                </div>
              ))}
            </dl>

            {preview && (
              <div className="reveal mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-[#0000EE] hover:gap-3 transition-all"
                >
                  Have another question? Ask Sebastian
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
