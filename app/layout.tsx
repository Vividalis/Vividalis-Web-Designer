import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Spotlight from '../components/Spotlight'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Vividalis | Web Design',
  description: 'Clean, minimal portfolio scaffold',
  metadataBase: new URL('http://localhost:3000')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Spotlight />
        {children}
	    </body>
    </html>
  )
}
