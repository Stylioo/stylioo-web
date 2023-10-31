
import ReduxProvider from '@/redux/Provider'
import './globals.scss'
import { childrenPropType } from '@/types'


// export const metadata = {
//   title: 'Stylioo',
//   description: 'Stylioo - Online Salon Reservation System',
// }

export default function RootLayout({ children }: childrenPropType) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

