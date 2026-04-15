'use client'

import { useState } from 'react'
import type { TrustItem } from '@/lib/cms'
import SaveButton from './SaveButton'

interface Props {
  initialContent: TrustItem[]
}

const iconOptions = ['shield', 'location', 'person', 'star']

export default function TrustEditor({ initialContent }: Props) {
  const [items, setItems] = useState<TrustItem[]>(initialContent)

  const update = (i: number, field: keyof TrustItem, value: string) =>
    setItems((prev) => prev.map((item, idx) => idx === i ? { ...item, [field]: value } : item))

  const add = () => setItems((prev) => [...prev, { label: '', icon: 'shield' }])
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Label</label>
                <input type="text" value={item.label} onChange={(e) => update(i, 'label', e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Icon</label>
                <select value={item.icon} onChange={(e) => update(i, 'icon', e.target.value)} className={inputClass}>
                  {iconOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={add} className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 mb-6 border border-dashed border-blue-300 px-4 py-2.5 rounded w-full justify-center hover:bg-blue-50 transition-colors">
        + Add Item
      </button>
      <SaveButton section="trust" getData={() => items} />
    </div>
  )
}
