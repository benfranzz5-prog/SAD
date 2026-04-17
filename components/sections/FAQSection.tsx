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

  return (
    <section
      className={`section-pad ${light ? 'bg-green' : 'bg-cream-light'}`}
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left */}
          <div className="reveal">
            <p className={`eyebrow mb-3 ${light ? 'text-cream/40' : ''}`}>FAQ</p>
            <h2
              id="faq-heading"
              className={`font-heading leading-[1.02] mb-6 ${light ? 'text-cream' : 'text-green'}`}
              style={{ fontWeight: 700 }}
            >
              Common questions.
            </h2>
            <p className={`font-body text-[14px] leading-relaxed mb-8 ${light ? 'text-cream/50' : 'text-green/55'}`}>
              Can&apos;t find what you need? Contact Sebastian directly.
            </p>
            <a
              href="tel:+61415163873"
              className={`font-body inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] hover:gap-3 transition-all ${
                light ? 'text-cream/70 hover:text-cream' : 'text-green hover:text-green-mid'
              }`}
            >
              Call or Text
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-2">
            <dl className={`reveal flex flex-col divide-y ${light ? 'divide-cream/10' : 'divide-green/10'}`}>
              {displayItems.map((item, i) => (
                <div key={i} className="py-5">
                  <dt>
                    <button
                      className={`flex items-start justify-between w-full text-left gap-6 ${
                        light ? 'text-cream' : 'text-green'
                      }`}
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      aria-expanded={openIndex === i}
                    >
                      <span
                        className="font-heading font-semibold leading-snug"
                        style={{ fontSize: 'clamp(1rem, 1.8vw, 1.1rem)' }}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`shrink-0 w-6 h-6 flex items-center justify-center border rounded-full transition-transform duration-200 mt-0.5 ${
                          openIndex === i ? 'rotate-45' : ''
                        } ${light ? 'border-cream/25 text-cream' : 'border-green/25 text-green'}`}
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
                      className={`mt-3 font-body text-[14px] leading-relaxed pr-12 ${
                        light ? 'text-cream/60' : 'text-green/65'
                      }`}
                    >
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
                  className={`font-body inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] hover:gap-3 transition-all ${
                    light ? 'text-cream/65 hover:text-cream' : 'text-green hover:text-green-mid'
                  }`}
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
