import type { Metadata } from 'next'
import { Manrope, Lexend, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
  weight: ['400', '600', '700', '800']
});

const lexend = Lexend({ 
  subsets: ["latin"],
  variable: '--font-lexend',
  weight: ['300', '400', '500', '600']
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '600']
});

export const metadata: Metadata = {
  title: 'NextGenSync | Future-Ready Education',
  description: 'The first unified AI platform designed specifically for Indian classrooms. Bridge the gap between traditional excellence and technological foresight.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} ${lexend.variable} ${inter.variable} font-lexend bg-[var(--background)] text-[var(--on-background)] antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
