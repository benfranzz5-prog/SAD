# Sebastian's Automotive Detailing

Premium mobile car detailing website — Adelaide, South Australia.

Built with Next.js 14 App Router, Payload CMS v3, Tailwind CSS, and Framer Motion.

---

## Setup

### Prerequisites

- Node.js 20+
- pnpm (recommended)
- Vercel account
- Neon database (via Vercel Storage)
- Vercel Blob store (via Vercel Storage)

### 1. Clone and install

```bash
pnpm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

The required variables are:

| Variable | Where to get it |
|---|---|
| `DATABASE_URL` | Vercel Storage → Neon → Connection strings (pooled) |
| `DATABASE_URL_UNPOOLED` | Vercel Storage → Neon → Connection strings (unpooled) |
| `BLOB_READ_WRITE_TOKEN` | Vercel Storage → Blob → Token |
| `PAYLOAD_SECRET` | Generate a random 32+ char string |
| `NEXT_PUBLIC_SERVER_URL` | `http://localhost:3000` locally, your domain in production |
| `PAYLOAD_ADMIN_EMAIL` | Admin user email |
| `PAYLOAD_ADMIN_PASSWORD` | Admin user password |
| `GTM_ID` | Google Tag Manager ID (e.g. `GTM-XXXXXXX`) — optional |

### 3. Run migrations

```bash
DATABASE_URL=$DATABASE_URL_UNPOOLED pnpm payload migrate
```

### 4. Start the dev server

```bash
pnpm dev
```

Open `http://localhost:3000` for the frontend.
Open `http://localhost:3000/admin` for the CMS.

---

## Adding the Logo

Place `SAD-LOGO11.png` in `/public/images/`. The Navbar and Footer reference it at `/images/SAD-LOGO11.png`.

---

## CMS Collections

| Collection | Purpose |
|---|---|
| `users` | Admin and editor accounts |
| `media` | Images (stored in Vercel Blob in production) |
| `portfolio` | Before/after work photos with location |
| `pricing` | Service pricing (updatable without deployment) |
| `testimonials` | Customer reviews |
| `services` | Service page content |

All content collections support **drafts** — you can save unpublished changes and publish when ready.

---

## Email Setup

The contact form server action (`lib/actions.ts`) is ready for email integration. Uncomment and configure the Resend block (or replace with your preferred email service). Add `RESEND_API_KEY` to your environment variables.

Recommended: [Resend](https://resend.com) — simple API, generous free tier.

---

## Deployment

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel Dashboard → Settings → Environment Variables
4. Vercel will run `pnpm payload migrate && next build` automatically (configured in `vercel.json`)

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **CMS**: Payload v3
- **Database**: Neon (PostgreSQL via Vercel Storage)
- **File storage**: Vercel Blob
- **Styling**: Tailwind CSS + CSS custom properties
- **Animation**: Framer Motion (LazyMotion + domMax)
- **Fonts**: Bebas Neue + DM Sans (next/font/google)
- **Analytics**: Vercel Analytics + Speed Insights
- **Form validation**: Zod + Next.js Server Actions

---

## Contact

Sebastian's Automotive Detailing  
Phone: +61 415 163 873  
Email: Sebastian@SADetailing.net  
Instagram: [@sebastiansautomotivedetailing](https://www.instagram.com/sebastiansautomotivedetailing)  
Facebook: [Sebastian's Automotive Detailing](https://www.facebook.com/share/18PDHaTVoQ/)
