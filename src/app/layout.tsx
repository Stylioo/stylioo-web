'use client'

import './globals.scss'
import { Poppins } from 'next/font/google'
import ReduxProvider from '@/redux/Provider'
import Navbar from "@/components/Navbar"

import { childrenPropType } from '@/types'
import { usePathname } from 'next/navigation'

const poppins = Poppins({
  weight: "300",
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})


export const metadata = {
  title: 'Stylioo',
  description: 'Stylioo - Online Salon Reservation System',
}

const MainLayout = ({ children }: childrenPropType) => {
  const path = usePathname()

  if (path === '/auth/signin' || path === '/auth/signup') {
    return (
      <>
        {children}
      </>
    )
  }

  return (
    <div
      className="flex flex-col min-h-screen"
    >
      <Navbar />
      <div
        className="mt-14"
      >
        {children}
      </div>
    </div>
  )
}

export default function RootLayout({ children }: childrenPropType) {

  return (
    <html lang="en">
      <body
      // className={poppins.className}
      >
        <ReduxProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </ReduxProvider>
      </body>
    </html>
  )
}

