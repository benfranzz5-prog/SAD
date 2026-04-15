'use client'

import { useState } from 'react'

interface SaveButtonProps {
  section: string
  getData: () => unknown
}

export default function SaveButton({ section, getData }: SaveButtonProps) {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSave() {
    setStatus('saving')
    setErrorMsg('')

    try {
      const res = await fetch('/api/admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, content: getData() }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Save failed')
      }

      setStatus('saved')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Save failed')
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleSave}
        disabled={status === 'saving'}
        className="bg-forest text-white text-sm font-bold uppercase tracking-[0.08em] px-6 py-2.5 rounded hover:bg-green-900 transition-colors disabled:opacity-60"
      >
        {status === 'saving' ? 'Saving...' : 'Save Changes'}
      </button>
      {status === 'saved' && (
        <p className="text-green-600 text-sm font-medium flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          Saved! Vercel will redeploy shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}
    </div>
  )
}
