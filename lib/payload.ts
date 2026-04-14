import configPromise from '@payload-config'
import { getPayload, type Payload } from 'payload'

let cached: Payload | null = null

export async function getPayloadClient(): Promise<Payload> {
  if (cached) {
    return cached
  }

  const payload = await getPayload({
    config: configPromise,
  })

  cached = payload
  return payload
}
