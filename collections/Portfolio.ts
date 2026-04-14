import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '@/lib/access'

export const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'service_category', 'location', 'date', '_status'],
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
      admin: {
        description: 'e.g. "2023 BMW M3 — Full Ceramic Coating"',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. "Glenelg, SA" or "North Adelaide"',
      },
    },
    {
      name: 'service_category',
      type: 'select',
      required: true,
      options: [
        { label: 'Interior & Exterior Detailing', value: 'interior-exterior' },
        { label: 'Paint Rejuvenation / Cut & Polish', value: 'paint-rejuvenation' },
        { label: 'Ceramic Coating', value: 'ceramic-coating' },
        { label: 'Interior Detail', value: 'interior' },
        { label: 'Exterior Detail', value: 'exterior' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Short description of the work done.',
      },
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
  ],
}
