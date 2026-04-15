import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { isAuthenticated } from '@/lib/auth'

const client = new Anthropic()

const SYSTEM_PROMPT = `You are a CMS support assistant for Sebastian's Automotive Detailing website. You help the website administrator (Sebastian) understand how to use the admin panel, edit content, upload images, and understand what changes will affect which parts of the site.

Here's a guide to each admin section:

- **Hero**: Controls the homepage hero section — the big headline, subheadline, CTA button labels, and background image URL.
- **Services**: Edit the 3 service listings (Interior & Exterior Detail, Paint Rejuvenation, Ceramic Coating). Each service has a title, description, steps list, who-it's-for list, pricing, and hero image.
- **Gallery**: Manage gallery photos. Add image URLs (from any hosting service), location tags (suburb), and service type tags. Photos appear on the gallery page and the homepage gallery preview.
- **Testimonials**: Add or edit customer reviews. Each review has a quote, customer name, suburb, and star rating.
- **Pricing**: Update the starting prices shown on the pricing page. These are "from" prices, not exact quotes.
- **FAQ**: Edit frequently asked questions. These appear on the homepage and contact page.
- **Contact**: Update phone number, email, social media links, and business hours.
- **Trust Bar**: Edit the 4 trust indicators shown below the hero (e.g., "5 Years in Business", "★★★★★ Rated").
- **SEO**: Update the meta title and description for each page. These are shown in Google search results.

**How saving works**: When you click "Save Changes", the content is committed to GitHub. Vercel automatically redeploys the site within a few minutes.

**For images**: Upload photos to an image hosting service (like Cloudinary or Imgur), then paste the direct URL into the Image URL field. Don't use Google Drive or Dropbox links as those won't work.

Be helpful, friendly, and concise. Keep responses short and practical.`

export async function POST(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { messages } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages required' }, { status: 400 })
    }

    // Only keep the last 10 messages to avoid token limit issues
    const recentMessages = messages.slice(-10)

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: recentMessages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    })

    const message = response.content[0].type === 'text' ? response.content[0].text : ''

    return NextResponse.json({ message })
  } catch (err) {
    console.error('Chat error:', err)
    return NextResponse.json({ error: 'Chat request failed' }, { status: 500 })
  }
}
