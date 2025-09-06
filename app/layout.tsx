import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Spotlight from '../components/Spotlight'
import SeoJsonLd from '../components/SeoJsonLd'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://vividalis.dev/'),
  title: {
    default: 'Vividalis — Web Designer',
    template: '%s | Vividalis — Web Designer'
  },
  description: 'Web designer building modern, eye-catching, SEO-optimized sites using Next.js and Tailwind.',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://vividalis.dev/',
    siteName: 'Vividalis — Web Designer',
    title: 'Vividalis — Web Designer',
    description: 'Modern, eye-catching, SEO-optimized websites.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Vividalis — Web Designer' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vividalis — Web Designer',
    description: 'Modern, eye-catching, SEO-optimized websites.',
    images: ['/og.jpg']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SeoJsonLd />
        <Spotlight />
        {children}
	    </body>
    </html>
  )
}
