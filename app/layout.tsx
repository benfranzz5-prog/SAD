import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Sebastian's Automotive Detailing | Mobile Car Detailing Adelaide",
  description:
    'Premium mobile car detailing in Adelaide. Interior & exterior details, cut & polish, and ceramic coating. We come to you.',
  metadataBase: new URL('https://www.sadetailing.net'),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: "Sebastian's Automotive Detailing",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
