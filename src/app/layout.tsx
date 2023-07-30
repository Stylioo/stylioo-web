import './globals.scss'
import { DM_Mono } from 'next/font/google'
import ReduxProvider from '@/redux/Provider'

import { childrenPropType } from '@/types'

import Navbar from './Navbar'

export const dm_mono = DM_Mono({
  weight: "300",
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})


export const metadata = {
  title: 'Stylioo',
  description: 'Stylioo - Online Salon Reservation System',
}

export default function RootLayout({ children }: childrenPropType) {
  return (
    <html lang="en">
      <body
        className={dm_mono.className}
      >
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
