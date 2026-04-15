import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

const SESSION_COOKIE = 'sad_admin_session'
const SESSION_EXPIRY_HOURS = 8

function getSecret(): string {
  const secret = process.env.SESSION_SECRET
  if (!secret) throw new Error('SESSION_SECRET is not set')
  return secret
}

export function createSessionToken(): string {
  const payload = `${Date.now()}:${Math.random().toString(36).slice(2)}`
  const sig = createHmac('sha256', getSecret()).update(payload).digest('hex')
  return `${payload}.${sig}`
}

export function verifySessionToken(token: string): boolean {
  const lastDot = token.lastIndexOf('.')
  if (lastDot === -1) return false

  const payload = token.slice(0, lastDot)
  const sig = token.slice(lastDot + 1)

  const expectedSig = createHmac('sha256', getSecret()).update(payload).digest('hex')

  try {
    const sigBuf = Buffer.from(sig, 'hex')
    const expectedBuf = Buffer.from(expectedSig, 'hex')
    if (sigBuf.length !== expectedBuf.length) return false
    if (!timingSafeEqual(sigBuf, expectedBuf)) return false
  } catch {
    return false
  }

  // Check expiry
  const [timestampStr] = payload.split(':')
  const timestamp = parseInt(timestampStr, 10)
  const expiryMs = SESSION_EXPIRY_HOURS * 60 * 60 * 1000
  if (Date.now() - timestamp > expiryMs) return false

  return true
}

export function verifyPassword(input: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) return false

  const inputBuf = Buffer.from(input)
  const passwordBuf = Buffer.from(adminPassword)

  if (inputBuf.length !== passwordBuf.length) {
    // Still do the comparison to prevent timing attacks
    timingSafeEqual(Buffer.alloc(passwordBuf.length), passwordBuf)
    return false
  }

  return timingSafeEqual(inputBuf, passwordBuf)
}

export function isAuthenticated(): boolean {
  const cookieStore = cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  if (!token) return false
  return verifySessionToken(token)
}

export function getSessionCookieName(): string {
  return SESSION_COOKIE
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: SESSION_EXPIRY_HOURS * 60 * 60,
    path: '/',
  }
}

// Simple in-memory rate limiter
// For production with multiple instances, use a KV store (e.g. Vercel KV)
interface RateLimitEntry {
  attempts: number
  resetAt: number
}
const rateLimitMap = new Map<string, RateLimitEntry>()

const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000 // 15 minutes

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { attempts: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, remaining: MAX_ATTEMPTS - 1 }
  }

  if (entry.attempts >= MAX_ATTEMPTS) {
    return { allowed: false, remaining: 0 }
  }

  entry.attempts++
  return { allowed: true, remaining: MAX_ATTEMPTS - entry.attempts }
}

export function resetRateLimit(ip: string): void {
  rateLimitMap.delete(ip)
}
