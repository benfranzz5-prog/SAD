'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters')
    .trim(),
  phone: z
    .string()
    .min(8, 'Enter a valid phone number')
    .max(20, 'Phone number too long')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Enter a valid phone number')
    .trim(),
  email: z
    .string()
    .email('Enter a valid email address')
    .max(200, 'Email too long')
    .trim()
    .toLowerCase(),
  service: z.enum(
    [
      'interior-exterior-detailing',
      'paint-rejuvenation',
      'ceramic-coating',
      'interior-details',
      'exterior-details',
      'not-sure',
    ],
    { errorMap: () => ({ message: 'Select a service' }) },
  ),
  message: z
    .string()
    .min(10, 'Tell us a bit more — at least 10 characters')
    .max(2000, 'Message too long (max 2000 characters)')
    .trim(),
})

export type ContactFormState = {
  success: boolean
  error: string | null
  fieldErrors: Partial<Record<keyof z.infer<typeof contactSchema>, string>>
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message'),
  }

  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    const fieldErrors: ContactFormState['fieldErrors'] = {}
    parsed.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof z.infer<typeof contactSchema>
      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message
      }
    })
    return {
      success: false,
      error: 'Please fix the errors below.',
      fieldErrors,
    }
  }

  const { name, phone, email, service, message } = parsed.data

  const serviceLabels: Record<string, string> = {
    'interior-exterior-detailing': 'Interior & Exterior Detailing',
    'paint-rejuvenation': 'Paint Rejuvenation / Cut & Polish',
    'ceramic-coating': 'Ceramic Coating',
    'interior-details': 'Interior Detail (standalone)',
    'exterior-details': 'Exterior Detail (standalone)',
    'not-sure': "Not sure yet — need advice",
  }

  const body = [
    `New quote request from sebastiansadetailing.com.au`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${serviceLabels[service] ?? service}`,
    ``,
    `Message:`,
    message,
  ].join('\n')

  try {
    // In production, integrate with Resend, Nodemailer, or similar.
    // For now, log to console and return success.
    // Replace this block with your email sending logic.
    console.log('[Contact Form Submission]', body)

    // Example Resend integration (add resend package + RESEND_API_KEY env var):
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@sebastiansadetailing.com.au',
    //   to: 'Sebastian@SADetailing.net',
    //   replyTo: email,
    //   subject: `New Quote Request — ${name}`,
    //   text: body,
    // })

    return {
      success: true,
      error: null,
      fieldErrors: {},
    }
  } catch (err) {
    console.error('[Contact Form Error]', err)
    return {
      success: false,
      error: 'Something went wrong on our end. Please call or text directly.',
      fieldErrors: {},
    }
  }
}
