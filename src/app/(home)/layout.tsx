
import Footer from "@/components/Footer"
import NavbarProvider from "@/components/Navbar/NavbarProvider"
import ReduxProvider from "@/redux/Provider"
import { childrenPropType } from '@/types'
export default function RootLayout({ children }: childrenPropType) {
  return (
    <div>
      <main
        className="mt-16"
      >
        <NavbarProvider />
        {children}
      </main>
    </div>
  )
}

