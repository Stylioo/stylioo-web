
import Navbar from "@/components/Navbar/Navbar"
import { childrenPropType } from '@/types'
export default function RootLayout({ children }: childrenPropType) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

