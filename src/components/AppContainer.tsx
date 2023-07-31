import { appContainerPropType } from "@/types"

function AppContainer({ children, className }: appContainerPropType) {
    return (
        <main className={`max-w-7xl mx-4 md:mx-10 lg:mx-auto px-4 py-[50px] ${className}`}>
            {children}
        </main>
    )
}

export default AppContainer
