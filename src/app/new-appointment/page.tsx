'use client'
import { useState } from "react"
import SelectBeautician from "./SelectBeautician"
import SelectService from "./SelectService"
import SelectTime from "./SelectTime"
import Verify from "./Verify"


function NewAppointmentPage() {

    const [step, setStep] = useState(1)

    const handleNext = () => {
        window.scrollTo(0, 0)
        setStep(step + 1)
    }

    const handleBack = () => {
        window.scrollTo(0, 0)
        setStep(step - 1)
    }

    if (step === 1) return <SelectService step={step} handleNext={handleNext} />
    else if (step === 2) return <SelectBeautician step={step} handleNext={handleNext} handleBack={handleBack} />
    else if (step === 3) return <SelectTime step={step} handleNext={handleNext} handleBack={handleBack} />
    else if (step === 4) return <Verify step={step} handleBack={handleBack} />

}

export default NewAppointmentPage