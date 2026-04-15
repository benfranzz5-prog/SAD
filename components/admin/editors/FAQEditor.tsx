'use client'

import { useState } from 'react'
import type { FAQItem } from '@/lib/cms'
import SaveButton from './SaveButton'

interface Props {
  initialContent: FAQItem[]
}

export default function FAQEditor({ initialContent }: Props) {
  const [items, setItems] = useState<FAQItem[]>(initialContent)

  const update = (i: number, field: keyof FAQItem, value: string) =>
    setItems((prev) => prev.map((item, idx) => idx === i ? { ...item, [field]: value } : item))

  const add = () => setItems((prev) => [...prev, { question: '', answer: '' }])

  const remove = (i: number) => setItems((prev) => prev.filter((_, idx) => idx !== i))

  const inputClass = 'w-full border border-gray-300 text-gray-900 px-3 py-2.5 text-sm rounded focus:outline-none focus:border-blue-500 transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-[0.08em] text-gray-500 mb-1.5'

  return (
    <div className="max-w-2xl">
      <div className="flex flex-col gap-4 mb-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400">Q&A {i + 1}</span>
              <button onClick={() => remove(i)} className="text-red-500 hover:text-red-700 text-xs font-medium">
                Remove
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className={labelClass}>Question</label>
                <input type="text" value={item.question} onChange={(e) => update(i, 'question', e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Answer</label>
                <textarea rows={3} value={item.answer} onChange={(e) => update(i, 'answer', e.target.value)} className={inputClass} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={add} className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 mb-6 border border-dashed border-blue-300 px-4 py-2.5 rounded w-full justify-center hover:bg-blue-50 transition-colors">
        + Add Question
      </button>

      <SaveButton section="faq" getData={() => items} />
    </div>
  )
}
