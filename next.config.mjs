import { withPayload } from '@payloadcms/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@payloadcms/richtext-lexical'],
  outputFileTracingIncludes: {
    '/app/(payload)/admin/[[...segments]]/page': [
      './node_modules/@payloadcms/next/dist/**',
    ],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.vercel-storage.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

export default withPayload(nextConfig)
