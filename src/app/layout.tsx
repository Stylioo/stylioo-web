import './globals.scss'
import { Inter, DM_Mono, Roboto } from 'next/font/google'
import ReduxProvider from '@/redux/Provider'

import { childrenPropType } from '@/types'

import Navbar from './Navbar'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: '300',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

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
        suppressHydrationWarning={true}
        className={roboto.className}
      >
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
