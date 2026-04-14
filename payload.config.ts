import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { en } from 'payload/i18n/en'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Portfolio } from './collections/Portfolio'
import { Pricing } from './collections/Pricing'
import { Testimonials } from './collections/Testimonials'
import { Services } from './collections/Services'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: "— Sebastian's Automotive Detailing",
    },
  },
  collections: [Users, Media, Portfolio, Pricing, Testimonials, Services],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET ?? 'change-me-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL ?? '',
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    },
  }),
  plugins: [
    vercelBlobStorage({
      enabled: process.env.NODE_ENV === 'production',
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN ?? '',
    }),
  ],
  i18n: {
    supportedLanguages: { en },
  },
  onInit: async (payload) => {
    const adminEmail = process.env.PAYLOAD_ADMIN_EMAIL ?? 'Sebastian@SADetailing.net'
    const adminPassword = process.env.PAYLOAD_ADMIN_PASSWORD ?? 'change-me'

    const existingUsers = await payload.find({
      collection: 'users',
      where: { email: { equals: adminEmail } },
    })

    if (existingUsers.totalDocs === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: adminEmail,
          password: adminPassword,
          role: 'admin',
        },
      })
      payload.logger.info(`Admin user created: ${adminEmail}`)
    }
  },
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000',
})
