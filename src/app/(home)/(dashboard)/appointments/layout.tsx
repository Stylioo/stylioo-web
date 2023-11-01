'use client'

import Container from '@/components/Container'
import { AppointmentLayoutPropType } from '@/types/layout'

import Navbar from "@/components/Navbar/Navbar"
import SideMenu from './SideMenu'
import { usePathname } from 'next/navigation'
import ReduxProvider from '@/redux/Provider'
import Footer from '@/components/Footer'

function AppointmentLayout({ children }: AppointmentLayoutPropType) {

    return (
        <>
            <ReduxProvider>
                <Container
                    className='my-[2rem] flex flex-col lg:flex-row gap-8'
                >
                    <div className="min-w-[200px] ">
                        <SideMenu />
                    </div>

                    <div className="flex-grow">
                        {children}
                    </div>
                </Container>
                <Footer />
            </ReduxProvider>
        </>
    )
}

export default AppointmentLayout
