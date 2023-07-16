import './globals.scss'
import { Inter } from 'next/font/google'
import ReduxProvider from '@/redux/Provider'

import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stylioo',
  description: 'Stylioo - Online Salon Reservation System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={inter.className}
      >
        <ReduxProvider>
          <Navbar />
          <main className="max-w-7xl mx-auto mt-4 px-4">
            {children}
          </main>
        </ReduxProvider>
      </body>
    </html>
  )
}
