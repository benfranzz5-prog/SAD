'use client'

import { useState } from 'react'
import type { SEOContent } from '@/lib/cms'
import SaveButton from './SaveButton'

interface Props {
  initialContent: SEOContent
}

const pageLabels: Record<string, string> = {
  home: 'Homepage',
  services: 'Services Overview',
  serviceInteriorExterior: 'Service: Interior & Exterior',
  servicePaintRejuvenation: 'Service: Paint Rejuvenation',
  serviceCeramicCoating: 'Service: Ceramic Coating',
  gallery: 'Gallery',
  pricing: 'Pricing',
  testimonials: 'Reviews',
  contact: 'Contact / Quote',
}

export default function SEOEditor({ initialContent }: Props) {
  const [content, setContent] = useState<SEOContent>(initialContent)

  const update = (page: string, field: 'title' | 'description', value: string) =>
    setContent((prev) => ({
      ...prev,
      [page]: { ...prev[page], [field]: value },
    }))

  const inputClass = 'w-full border border-gray-300 text-gray-900 px-3 py-2.5 text-sm rounded focus:outline-none focus:border-blue-500 transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-[0.08em] text-gray-500 mb-1.5'

  return (
    <div className="max-w-2xl">
      <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-5 text-sm text-blue-700">
        <strong>SEO Tips:</strong> Keep titles under 60 characters and descriptions under 160 characters. Include Adelaide and the service type in each page&apos;s title.
      </div>

      <div className="flex flex-col gap-5">
        {Object.keys(pageLabels).map((page) => (
          <div key={page} className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-bold text-sm text-gray-900 mb-4">{pageLabels[page]}</h3>
            <div className="flex flex-col gap-3">
              <div>
                <label className={labelClass}>
                  Meta Title
                  <span className="ml-2 font-normal normal-case text-gray-400">
                    ({(content[page]?.title || '').length}/60 chars)
                  </span>
                </label>
                <input
                  type="text"
                  value={content[page]?.title || ''}
                  onChange={(e) => update(page, 'title', e.target.value)}
                  className={inputClass}
                  maxLength={80}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Meta Description
                  <span className="ml-2 font-normal normal-case text-gray-400">
                    ({(content[page]?.description || '').length}/160 chars)
                  </span>
                </label>
                <textarea
                  rows={2}
                  value={content[page]?.description || ''}
                  onChange={(e) => update(page, 'description', e.target.value)}
                  className={inputClass}
                  maxLength={200}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <SaveButton section="seo" getData={() => content} />
      </div>
    </div>
  )
}
