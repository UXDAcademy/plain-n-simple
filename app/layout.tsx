import React from "react"
import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-instrument-serif"
});
const crimsonPro = { variable: "--font-crimson-pro" }; // Declaring crimsonPro variable

export const metadata: Metadata = {
  metadataBase: new URL('https://useplainandsimple.app'),
  title: 'Plain n\' Simple: Bullsh*t Job Detector | Job postings in plain English',
  description: 'See what LinkedIn job descriptions really mean before you waste time applying. A Chrome extension that translates corporate jargon into plain English.',
  keywords: ['job posting', 'LinkedIn', 'Chrome extension', 'job search', 'corporate jargon', 'job description translator'],
  authors: [{ name: 'UXD Academy' }],
  openGraph: {
    title: 'Plain n\' Simple: Bullsh*t Job Detector',
    description: 'See what LinkedIn job descriptions really mean before you waste time applying.',
    type: 'website',
    url: 'https://useplainandsimple.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Plain n\' Simple app icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plain n\' Simple: Bullsh*t Job Detector',
    description: 'See what LinkedIn job descriptions really mean before you waste time applying.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
