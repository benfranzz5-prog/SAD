import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  service: string
  vehicle: string
  suburb: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, phone, email, service, vehicle, suburb, message } = data

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #003B20; background: #f9f9f9; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 8px; overflow: hidden; }
        .header { background: #003B20; color: #FFF8E6; padding: 32px 40px; }
        .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.01em; }
        .header p { margin: 8px 0 0; opacity: 0.7; font-size: 14px; }
        .body { padding: 40px; }
        .field { margin-bottom: 24px; border-bottom: 1px solid #EBEDEC; padding-bottom: 24px; }
        .field:last-child { border-bottom: none; padding-bottom: 0; }
        .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #999; margin-bottom: 6px; }
        .value { font-size: 16px; color: #003B20; }
        .footer { background: #EBEDEC; padding: 20px 40px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Quote Request</h1>
          <p>Sebastian's Automotive Detailing — Website Enquiry</p>
        </div>
        <div class="body">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Phone</div>
            <div class="value">${phone}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Service Interested In</div>
            <div class="value">${service}</div>
          </div>
          <div class="field">
            <div class="label">Vehicle</div>
            <div class="value">${vehicle}</div>
          </div>
          <div class="field">
            <div class="label">Suburb / Location</div>
            <div class="value">${suburb}</div>
          </div>
          ${message ? `
          <div class="field">
            <div class="label">Message</div>
            <div class="value">${message.replace(/\n/g, '<br/>')}</div>
          </div>
          ` : ''}
        </div>
        <div class="footer">
          Sent from the contact form at SADetailing.net
        </div>
      </div>
    </body>
    </html>
  `

  return getResend().emails.send({
    from: 'quotes@sadetailing.net',
    to: 'Sebastian@SADetailing.net',
    reply_to: email,
    subject: `New Quote Request — ${name} (${suburb})`,
    html,
  })
}
