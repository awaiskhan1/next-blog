import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-bl from-purple-700 via-purple-900 to-fuchsia-900`}>
        <Navigation />
        <div className='relative pt-[74px] overflow-hidden active'>
          {children}
        </div>
      </body>
    </html>
  )
}
