import { NextRequest, NextResponse } from 'next/server'
import {
  verifyPassword,
  createSessionToken,
  checkRateLimit,
  resetRateLimit,
  getSessionCookieName,
  getSessionCookieOptions,
} from '@/lib/auth'

function getClientIP(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
}

export async function POST(req: NextRequest) {
  const ip = getClientIP(req)

  // Rate limit check
  const { allowed } = checkRateLimit(ip)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many login attempts. Please try again in 15 minutes.' },
      { status: 429 }
    )
  }

  try {
    const { password } = await req.json()

    if (!password || typeof password !== 'string') {
      return NextResponse.json({ error: 'Password required.' }, { status: 400 })
    }

    if (!verifyPassword(password)) {
      return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 })
    }

    // Password correct — clear rate limit and create session
    resetRateLimit(ip)
    const token = createSessionToken()

    const res = NextResponse.json({ success: true })
    res.cookies.set(getSessionCookieName(), token, getSessionCookieOptions())

    return res
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}

// Sign out
export async function DELETE() {
  const res = NextResponse.json({ success: true })
  res.cookies.delete(getSessionCookieName())
  return res
}
