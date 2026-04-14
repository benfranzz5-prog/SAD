import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '@/lib/access'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'customer_name',
    defaultColumns: ['customer_name', 'rating', 'vehicle', 'featured', '_status'],
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
      name: 'quote',
      type: 'textarea',
      required: true,
      admin: {
        description: "The customer's review in their own words.",
      },
    },
    {
      name: 'customer_name',
      type: 'text',
      required: true,
      admin: {
        description: 'First name only or full name if they consent.',
      },
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'e.g. "Norwood, SA"',
      },
    },
    {
      name: 'vehicle',
      type: 'text',
      admin: {
        description: 'e.g. "2022 Toyota Camry"',
      },
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      defaultValue: 5,
      admin: {
        description: 'Rating out of 5 stars.',
        step: 1,
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Featured testimonials appear on the home page.',
      },
    },
    {
      name: 'source',
      type: 'select',
      options: [
        { label: 'Google', value: 'google' },
        { label: 'Facebook', value: 'facebook' },
        { label: 'Instagram', value: 'instagram' },
        { label: 'Direct', value: 'direct' },
      ],
      admin: {
        description: 'Where this review came from.',
      },
    },
  ],
}
