'use client'

import { useState } from 'react'
import type { HeroContent } from '@/lib/cms'
import SaveButton from './SaveButton'

interface Props {
  initialContent: HeroContent
}

export default function HeroEditor({ initialContent }: Props) {
  const [content, setContent] = useState<HeroContent>(initialContent)

  const update = (field: keyof HeroContent, value: string) =>
    setContent((prev) => ({ ...prev, [field]: value }))

  const updateCTA = (cta: 'ctaPrimary' | 'ctaSecondary', field: 'label' | 'href', value: string) =>
    setContent((prev) => ({
      ...prev,
      [cta]: { ...prev[cta], [field]: value },
    }))

  const inputClass = 'w-full border border-gray-300 text-gray-900 px-3 py-2.5 text-sm rounded focus:outline-none focus:border-blue-500 transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-[0.08em] text-gray-500 mb-1.5'

  return (
    <div className="max-w-2xl">
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="font-bold text-gray-900 mb-5">Hero Content</h2>

        <div className="flex flex-col gap-5">
          <div>
            <label className={labelClass}>Headline *</label>
            <input
              type="text"
              value={content.headline}
              onChange={(e) => update('headline', e.target.value)}
              className={inputClass}
            />
            <p className="text-xs text-gray-400 mt-1">Main homepage heading. Shown large over the hero image.</p>
          </div>

          <div>
            <label className={labelClass}>Subheadline *</label>
            <input
              type="text"
              value={content.subheadline}
              onChange={(e) => update('subheadline', e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Background Image URL *</label>
            <input
              type="url"
              value={content.backgroundImage}
              onChange={(e) => update('backgroundImage', e.target.value)}
              className={inputClass}
              placeholder="https://..."
            />
            <p className="text-xs text-gray-400 mt-1">Use a high-resolution image (at least 1920px wide). Recommend Unsplash or your own hosted image.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Primary CTA Label</label>
              <input
                type="text"
                value={content.ctaPrimary.label}
                onChange={(e) => updateCTA('ctaPrimary', 'label', e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Primary CTA Link</label>
              <input
                type="text"
                value={content.ctaPrimary.href}
                onChange={(e) => updateCTA('ctaPrimary', 'href', e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Secondary CTA Label</label>
              <input
                type="text"
                value={content.ctaSecondary.label}
                onChange={(e) => updateCTA('ctaSecondary', 'label', e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Secondary CTA Link</label>
              <input
                type="text"
                value={content.ctaSecondary.href}
                onChange={(e) => updateCTA('ctaSecondary', 'href', e.target.value)}
                className={inputClass}
                placeholder="tel:+61415163873"
              />
            </div>
          </div>
        </div>
      </div>

      <SaveButton section="hero" getData={() => content} />
    </div>
  )
}
