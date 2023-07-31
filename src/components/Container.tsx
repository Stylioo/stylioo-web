import { containerPropType } from "@/types"

function Container({ children, className, style }: containerPropType) {
    return (
        <main
            className={`max-w-7xl mx-4 md:mx-10 lg:mx-auto px-4 py-0 ${className}`}
            style={style}
        >
            {children}
        </main>
    )
}

export default Container
