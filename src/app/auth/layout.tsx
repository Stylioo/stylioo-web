import ReduxProvider from '@/redux/Provider'
import React from 'react'

function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            {children}
        </ReduxProvider>
    )
}

export default AuthLayout