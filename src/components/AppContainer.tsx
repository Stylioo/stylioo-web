import { childrenPropType } from '@/types'

function AppContainer({ children }: childrenPropType) {
    return (
        <main className="max-w-7xl mx-auto px-4">
            {children}
        </main>
    )
}

export default AppContainer
