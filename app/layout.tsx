import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://sebastiansadetailing.com.au'),
  title: {
    default: "Sebastian's Automotive Detailing — Mobile Car Detailing Adelaide",
    template: "%s | Sebastian's Automotive Detailing",
  },
  description:
    'Premium mobile car detailing in Adelaide SA. Interior & exterior detailing, cut & polish, ceramic coatings. We come to you. Call +61 415 163 873.',
  keywords: [
    'car detailing Adelaide',
    'mobile detailing Adelaide',
    'paint correction Adelaide',
    'ceramic coating Adelaide',
    'mobile car detailing near me',
    'car polish Adelaide',
    'auto detailing SA',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/',
    siteName: "Sebastian's Automotive Detailing",
    title: "Sebastian's Automotive Detailing — Premium Mobile Detailing Adelaide",
    description:
      'Professional mobile car detailing in Adelaide SA. We come to you — ceramic coatings, paint correction, full interior & exterior details.',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sebastian's Automotive Detailing",
    description: 'Premium mobile car detailing Adelaide SA.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const GTM_ID = process.env.GTM_ID ?? ''

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  )
}
