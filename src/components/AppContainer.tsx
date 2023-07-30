import { appContainerPropType } from "@/types"

function AppContainer({ children, className }: appContainerPropType) {
    return (
        <main className={`max-w-7xl mx-auto px-4 ${className}`}>
            {children}
        </main>
    )
}

export default AppContainer
