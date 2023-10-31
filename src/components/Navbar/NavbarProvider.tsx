import ReduxProvider from '@/redux/Provider'
import Navbar from './Navbar'

function NavbarProvider() {
    return (
        <ReduxProvider>
            <Navbar />
        </ReduxProvider>
    )
}

export default NavbarProvider