import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '@/lib/access'

export const Pricing: CollectionConfig = {
  slug: 'pricing',
  admin: {
    useAsTitle: 'service_name',
    defaultColumns: ['service_name', 'from_price', 'is_seasonal_special', '_status'],
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
      name: 'service_name',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. "Interior & Exterior Detailing"',
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
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Short description of what is included.',
      },
    },
    {
      name: 'is_seasonal_special',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Check this to highlight as a seasonal special.',
      },
    },
    {
      name: 'special_label',
      type: 'text',
      admin: {
        description: 'e.g. "Summer Special" — shown on the pricing card.',
        condition: (data) => Boolean(data?.is_seasonal_special),
      },
    },
    {
      name: 'sort_order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Lower numbers appear first.',
        step: 1,
      },
    },
  ],
}
