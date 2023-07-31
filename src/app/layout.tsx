import './globals.scss'
import { Poppins } from 'next/font/google'
import ReduxProvider from '@/redux/Provider'

import { childrenPropType } from '@/types'

import Navbar from './Navbar'

const poppins = Poppins({
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
      // className={poppins.className}
      >
        <ReduxProvider>
          <Navbar />
          <div
            className="mt-14"
          >
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
