'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const sections = [
  { slug: 'hero', label: 'Hero', icon: '🏠' },
  { slug: 'services', label: 'Services', icon: '🔧' },
  { slug: 'gallery', label: 'Gallery', icon: '🖼️' },
  { slug: 'testimonials', label: 'Testimonials', icon: '⭐' },
  { slug: 'pricing', label: 'Pricing', icon: '💰' },
  { slug: 'faq', label: 'FAQ', icon: '❓' },
  { slug: 'contact', label: 'Contact', icon: '📞' },
  { slug: 'trust', label: 'Trust Bar', icon: '✅' },
  { slug: 'seo', label: 'SEO', icon: '🔍' },
]

export default function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin')
    router.refresh()
  }

  return (
    <aside className="w-56 shrink-0 bg-white border-r border-gray-200 flex flex-col min-h-screen">
      <div className="p-5 border-b border-gray-200">
        <Link href="/" target="_blank" className="font-heading text-lg font-700 text-forest block">
          SAD
        </Link>
        <p className="text-xs text-gray-400 mt-0.5">Content Management</p>
      </div>

      <nav className="flex-1 p-3" aria-label="Admin sections">
        <ul className="flex flex-col gap-0.5" role="list">
          {sections.map((s) => {
            const href = `/admin/${s.slug}`
            const active = pathname === href
            return (
              <li key={s.slug}>
                <Link
                  href={href}
                  className={`admin-sidebar-link ${active ? 'active' : ''}`}
                >
                  <span aria-hidden="true">{s.icon}</span>
                  {s.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-3 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="admin-sidebar-link w-full text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          Sign Out
        </button>
      </div>
    </aside>
  )
}
