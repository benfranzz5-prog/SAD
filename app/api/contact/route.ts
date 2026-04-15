import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, type ContactFormData } from '@/lib/email'

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(str: string): string {
  return str.trim().slice(0, 1000)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, phone, email, service, vehicle, suburb, message } = body

    // Validate required fields
    if (!name || !phone || !email || !service || !vehicle || !suburb) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const data: ContactFormData = {
      name: sanitize(name),
      phone: sanitize(phone),
      email: sanitize(email),
      service: sanitize(service),
      vehicle: sanitize(vehicle),
      suburb: sanitize(suburb),
      message: sanitize(message || ''),
    }

    await sendContactEmail(data)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Failed to send your message. Please try calling or texting directly.' },
      { status: 500 }
    )
  }
}
