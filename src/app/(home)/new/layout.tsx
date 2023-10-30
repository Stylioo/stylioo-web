import ReduxProvider from '@/redux/Provider'
import React from 'react'

function AppointmentLayout({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            {children}
        </ReduxProvider>
    )
}

export default AppointmentLayout