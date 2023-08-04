'use client'

import Container from '@/components/Container'
import { AppointmentLayoutPropType } from '@/types/layout'

import SideMenu from './SideMenu'
import { usePathname } from 'next/navigation'

function AppointmentLayout({ children }: AppointmentLayoutPropType) {

    const path = usePathname()

    // if (path === '/appointment/new')
    //     return (
    //         <Container
    //             className='my-[2rem]'
    //         >
    //             <div className="col-span-3">{children}</div>

    //         </Container>
    //     )

    return (
        <Container
            className='my-[2rem] flex flex-col lg:flex-row gap-8'
        >
            <div className="min-w-[200px] ">
                <SideMenu />
            </div>

            <div className="grow">
                {children}
            </div>

        </Container>
    )
}

export default AppointmentLayout