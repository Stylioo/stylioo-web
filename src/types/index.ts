export type childrenPropType = {
    children: React.ReactNode
}

export type sectionPropType = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export type containerPropType = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export type newAppointmentStepPropType = {
    step?: number,
    handleNext?: () => void,
    handleBack?: () => void,
}
