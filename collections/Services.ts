import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { isAdminOrEditor } from '@/lib/access'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'from_price', '_status'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description:
          'URL slug — e.g. "ceramic-coating". Must match one of the 5 defined service slugs.',
      },
    },
    {
      name: 'short_description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'One or two sentences. Used on the services overview page.',
      },
    },
    {
      name: 'steps',
      type: 'richText',
      editor: lexicalEditor({}),
      admin: {
        description: 'Full service description — what is included, the process, etc.',
      },
    },
    {
      name: 'from_price',
      type: 'number',
      admin: {
        description: 'Starting price in AUD. Leave blank to show "POA".',
        step: 1,
      },
    },
    {
      name: 'hero_image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
