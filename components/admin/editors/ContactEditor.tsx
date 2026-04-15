'use client'

import { useState } from 'react'
import type { ContactContent } from '@/lib/cms'
import SaveButton from './SaveButton'

interface Props {
  initialContent: ContactContent
}

export default function ContactEditor({ initialContent }: Props) {
  const [content, setContent] = useState<ContactContent>(initialContent)

  const update = (field: keyof ContactContent, value: string) =>
    setContent((prev) => ({ ...prev, [field]: value }))

  const inputClass = 'w-full border border-gray-300 text-gray-900 px-3 py-2.5 text-sm rounded focus:outline-none focus:border-blue-500 transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-[0.08em] text-gray-500 mb-1.5'

  return (
    <div className="max-w-2xl">
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="font-bold text-gray-900 mb-5">Contact Details</h2>
        <div className="flex flex-col gap-5">
          {(Object.keys(content) as (keyof ContactContent)[]).map((field) => (
            <div key={field}>
              <label className={labelClass}>{field}</label>
              <input
                type="text"
                value={content[field]}
                onChange={(e) => update(field, e.target.value)}
                className={inputClass}
              />
            </div>
          ))}
        </div>
      </div>
      <SaveButton section="contact" getData={() => content} />
    </div>
  )
}
