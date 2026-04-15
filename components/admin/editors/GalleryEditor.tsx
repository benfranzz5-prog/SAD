'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { GalleryItem } from '@/lib/cms'
import SaveButton from './SaveButton'

interface Props {
  initialContent: GalleryItem[]
}

const serviceOptions = [
  { value: 'interior-exterior-detail', label: 'Interior & Exterior Detail' },
  { value: 'paint-rejuvenation', label: 'Paint Rejuvenation' },
  { value: 'ceramic-coating', label: 'Ceramic Coating' },
]

export default function GalleryEditor({ initialContent }: Props) {
  const [items, setItems] = useState<GalleryItem[]>(initialContent)

  const update = (i: number, field: keyof GalleryItem, value: string) =>
    setItems((prev) => prev.map((item, idx) => idx === i ? { ...item, [field]: value } : item))

  const add = () => setItems((prev) => [...prev, { src: '', alt: '', location: '', service: 'interior-exterior-detail' }])
  const remove = (i: number) => setItems((prev) => prev.filter((_, idx) => idx !== i))
  const move = (i: number, dir: -1 | 1) => {
    const newItems = [...items]
    const j = i + dir
    if (j < 0 || j >= newItems.length) return
    ;[newItems[i], newItems[j]] = [newItems[j], newItems[i]]
    setItems(newItems)
  }

  const inputClass = 'w-full border border-gray-300 text-gray-900 px-3 py-2.5 text-sm rounded focus:outline-none focus:border-blue-500 transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-[0.08em] text-gray-500 mb-1.5'

  return (
    <div className="max-w-2xl">
      <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-5 text-sm text-blue-700">
        <strong>How to add photos:</strong> Upload your photo to an image host (e.g. Cloudinary, Imgur, or your own server), then paste the direct URL here. Add a suburb for the location tag — this helps with local SEO.
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400">Photo {i + 1}</span>
              <div className="flex gap-2">
                <button onClick={() => move(i, -1)} disabled={i === 0} className="text-gray-400 hover:text-gray-700 disabled:opacity-30 text-xs">↑</button>
                <button onClick={() => move(i, 1)} disabled={i === items.length - 1} className="text-gray-400 hover:text-gray-700 disabled:opacity-30 text-xs">↓</button>
                <button onClick={() => remove(i)} className="text-red-500 hover:text-red-700 text-xs font-medium">Remove</button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className={labelClass}>Image URL *</label>
                <input type="url" value={item.src} onChange={(e) => update(i, 'src', e.target.value)} className={inputClass} placeholder="https://..." />
              </div>

              {item.src && (
                <div className="relative w-full h-32 bg-gray-100 rounded overflow-hidden">
                  <Image src={item.src} alt={item.alt || 'Preview'} fill className="object-cover" sizes="400px" />
                </div>
              )}

              <div>
                <label className={labelClass}>Alt Text (describe the image)</label>
                <input type="text" value={item.alt} onChange={(e) => update(i, 'alt', e.target.value)} className={inputClass} placeholder="e.g. Black BMW after machine polish" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Location (suburb) *</label>
                  <input type="text" value={item.location} onChange={(e) => update(i, 'location', e.target.value)} className={inputClass} placeholder="e.g. Norwood" />
                </div>
                <div>
                  <label className={labelClass}>Service *</label>
                  <select value={item.service} onChange={(e) => update(i, 'service', e.target.value)} className={inputClass}>
                    {serviceOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={add} className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 mb-6 border border-dashed border-blue-300 px-4 py-2.5 rounded w-full justify-center hover:bg-blue-50 transition-colors">
        + Add Photo
      </button>

      <SaveButton section="gallery" getData={() => items} />
    </div>
  )
}
