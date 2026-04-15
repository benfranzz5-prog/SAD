'use client'

import { useState } from 'react'
import type { Testimonial } from '@/lib/cms'
import SaveButton from './SaveButton'

interface Props {
  initialContent: Testimonial[]
}

export default function TestimonialsEditor({ initialContent }: Props) {
  const [items, setItems] = useState<Testimonial[]>(initialContent)

  const update = (i: number, field: keyof Testimonial, value: string | number) =>
    setItems((prev) => prev.map((item, idx) => idx === i ? { ...item, [field]: value } : item))

  const add = () => setItems((prev) => [...prev, { quote: '', author: '', suburb: '', rating: 5 }])
  const remove = (i: number) => setItems((prev) => prev.filter((_, idx) => idx !== i))

  const inputClass = 'w-full border border-gray-300 text-gray-900 px-3 py-2.5 text-sm rounded focus:outline-none focus:border-blue-500 transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-[0.08em] text-gray-500 mb-1.5'

  return (
    <div className="max-w-2xl">
      <div className="flex flex-col gap-4 mb-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400">Review {i + 1}</span>
              <button onClick={() => remove(i)} className="text-red-500 hover:text-red-700 text-xs font-medium">Remove</button>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className={labelClass}>Quote</label>
                <textarea rows={3} value={item.quote} onChange={(e) => update(i, 'quote', e.target.value)} className={inputClass} />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className={labelClass}>Customer Name</label>
                  <input type="text" value={item.author} onChange={(e) => update(i, 'author', e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Suburb</label>
                  <input type="text" value={item.suburb} onChange={(e) => update(i, 'suburb', e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Rating (1–5)</label>
                  <select value={item.rating} onChange={(e) => update(i, 'rating', Number(e.target.value))} className={inputClass}>
                    {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n} Star{n !== 1 ? 's' : ''}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={add} className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 mb-6 border border-dashed border-blue-300 px-4 py-2.5 rounded w-full justify-center hover:bg-blue-50 transition-colors">
        + Add Review
      </button>
      <SaveButton section="testimonials" getData={() => items} />
    </div>
  )
}
