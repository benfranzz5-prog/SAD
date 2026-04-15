'use client'

import { useState } from 'react'
import type { Service } from '@/lib/cms'
import SaveButton from './SaveButton'

interface Props {
  initialContent: Service[]
}

export default function ServicesEditor({ initialContent }: Props) {
  const [items, setItems] = useState<Service[]>(initialContent)
  const [activeIdx, setActiveIdx] = useState(0)

  const item = items[activeIdx]

  const updateField = (field: keyof Service, value: string | number) =>
    setItems((prev) => prev.map((s, i) => i === activeIdx ? { ...s, [field]: value } : s))

  const updateArrayItem = (field: 'steps' | 'whoFor', i: number, value: string) =>
    setItems((prev) => prev.map((s, si) => {
      if (si !== activeIdx) return s
      const arr = [...s[field]]
      arr[i] = value
      return { ...s, [field]: arr }
    }))

  const addArrayItem = (field: 'steps' | 'whoFor') =>
    setItems((prev) => prev.map((s, i) => i === activeIdx ? { ...s, [field]: [...s[field], ''] } : s))

  const removeArrayItem = (field: 'steps' | 'whoFor', i: number) =>
    setItems((prev) => prev.map((s, si) => {
      if (si !== activeIdx) return s
      return { ...s, [field]: s[field].filter((_, idx) => idx !== i) }
    }))

  const inputClass = 'w-full border border-gray-300 text-gray-900 px-3 py-2.5 text-sm rounded focus:outline-none focus:border-blue-500 transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-[0.08em] text-gray-500 mb-1.5'

  return (
    <div className="max-w-2xl">
      {/* Service tabs */}
      <div className="flex gap-2 mb-6">
        {items.map((s, i) => (
          <button
            key={s.slug}
            onClick={() => setActiveIdx(i)}
            className={`px-4 py-2 text-sm font-medium rounded transition-colors ${activeIdx === i ? 'bg-forest text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Title</label>
              <input type="text" value={item.title} onChange={(e) => updateField('title', e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>From Price ($)</label>
              <input type="number" value={item.fromPrice} onChange={(e) => updateField('fromPrice', Number(e.target.value))} className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Short Description</label>
            <textarea rows={2} value={item.shortDescription} onChange={(e) => updateField('shortDescription', e.target.value)} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Hero Image URL</label>
            <input type="url" value={item.heroImage} onChange={(e) => updateField('heroImage', e.target.value)} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Price Note</label>
            <input type="text" value={item.note} onChange={(e) => updateField('note', e.target.value)} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Sebastian&apos;s Note (optional)</label>
            <textarea rows={2} value={item.sebastianNote ?? ''} onChange={(e) => updateField('sebastianNote', e.target.value)} className={inputClass} />
          </div>

          {/* Steps */}
          <div>
            <label className={labelClass}>What&apos;s Included (steps)</label>
            <div className="flex flex-col gap-2 mb-2">
              {item.steps.map((step, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <span className="text-xs text-gray-400 w-6 shrink-0">{i + 1}.</span>
                  <input type="text" value={step} onChange={(e) => updateArrayItem('steps', i, e.target.value)} className={inputClass} />
                  <button onClick={() => removeArrayItem('steps', i)} className="text-red-400 hover:text-red-600 text-lg leading-none shrink-0">×</button>
                </div>
              ))}
            </div>
            <button onClick={() => addArrayItem('steps')} className="text-xs text-blue-600 hover:text-blue-800 font-medium">+ Add step</button>
          </div>

          {/* Who for */}
          <div>
            <label className={labelClass}>Who It&apos;s For</label>
            <div className="flex flex-col gap-2 mb-2">
              {item.whoFor.map((entry, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <input type="text" value={entry} onChange={(e) => updateArrayItem('whoFor', i, e.target.value)} className={inputClass} />
                  <button onClick={() => removeArrayItem('whoFor', i)} className="text-red-400 hover:text-red-600 text-lg leading-none shrink-0">×</button>
                </div>
              ))}
            </div>
            <button onClick={() => addArrayItem('whoFor')} className="text-xs text-blue-600 hover:text-blue-800 font-medium">+ Add entry</button>
          </div>
        </div>
      </div>

      <SaveButton section="services" getData={() => items} />
    </div>
  )
}
