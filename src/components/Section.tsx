import { sectionPropType } from "@/types"

function Section({ children, className, style }: sectionPropType) {
    return (
        <section
            className={`max-w-7xl mx-4 md:mx-10 lg:mx-auto px-4 py-[50px] ${className}`}
            style={style}
        >
            {children}
        </section>
    )
}

export default Section
