'use client'
import { useState } from "react"
import SelectBeautician from "./SelectBeautician"
import SelectService from "./SelectService"
import SelectTime from "./SelectTime"
import Verify from "./Verify"


function NewAppointmentPage() {

    const [step, setStep] = useState(1)

    if (step === 1) return <SelectService step={step} setStep={setStep} />
    else if (step === 2) return <SelectBeautician step={step} setStep={setStep} />
    else if (step === 3) return <SelectTime step={step} setStep={setStep} />
    else if (step === 4) return <Verify step={step} setStep={setStep} />

}

export default NewAppointmentPage