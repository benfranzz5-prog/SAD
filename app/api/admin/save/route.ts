import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { updateContentFile } from '@/lib/github'

const VALID_SECTIONS = [
  'hero',
  'services',
  'gallery',
  'testimonials',
  'pricing',
  'faq',
  'contact',
  'trust',
  'seo',
]

export async function POST(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { section, content } = await req.json()

    if (!section || !VALID_SECTIONS.includes(section)) {
      return NextResponse.json({ error: 'Invalid section' }, { status: 400 })
    }

    if (content === undefined || content === null) {
      return NextResponse.json({ error: 'No content provided' }, { status: 400 })
    }

    const filename = `${section}.json`
    await updateContentFile(filename, content, `cms: update ${section}`)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('CMS save error:', err)
    const message = err instanceof Error ? err.message : 'Save failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
