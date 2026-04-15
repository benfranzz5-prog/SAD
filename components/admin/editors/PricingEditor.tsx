'use client'

import { useState } from 'react'
import type { PricingItem } from '@/lib/cms'
import SaveButton from './SaveButton'

interface Props {
  initialContent: PricingItem[]
}

export default function PricingEditor({ initialContent }: Props) {
  const [items, setItems] = useState<PricingItem[]>(initialContent)

  const update = (i: number, field: keyof PricingItem, value: string | number) =>
    setItems((prev) => prev.map((item, idx) => idx === i ? { ...item, [field]: value } : item))

  const add = () => setItems((prev) => [...prev, { service: '', from: 0, note: '' }])
  const remove = (i: number) => setItems((prev) => prev.filter((_, idx) => idx !== i))

  const inputClass = 'w-full border border-gray-300 text-gray-900 px-3 py-2.5 text-sm rounded focus:outline-none focus:border-blue-500 transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-[0.08em] text-gray-500 mb-1.5'

  return (
    <div className="max-w-2xl">
      <div className="flex flex-col gap-4 mb-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400">Item {i + 1}</span>
              <button onClick={() => remove(i)} className="text-red-500 hover:text-red-700 text-xs font-medium">Remove</button>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className={labelClass}>Service Name</label>
                <input type="text" value={item.service} onChange={(e) => update(i, 'service', e.target.value)} className={inputClass} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>From Price ($)</label>
                  <input type="number" value={item.from} onChange={(e) => update(i, 'from', Number(e.target.value))} className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Note</label>
                <input type="text" value={item.note} onChange={(e) => update(i, 'note', e.target.value)} className={inputClass} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={add} className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 mb-6 border border-dashed border-blue-300 px-4 py-2.5 rounded w-full justify-center hover:bg-blue-50 transition-colors">
        + Add Pricing Item
      </button>
      <SaveButton section="pricing" getData={() => items} />
    </div>
  )
}
