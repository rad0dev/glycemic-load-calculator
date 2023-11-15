import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/organisms/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Glycemic Load Calculator',
  description: 'An application for calculating the glycemic load of a meal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white antialiased">
      <body className={`flex h-full flex-col ${inter.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
