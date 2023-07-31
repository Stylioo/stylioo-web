import Container from '@/components/Container'
import { newAppointmentStepPropType } from '@/types'
import { AiOutlineArrowLeft } from "react-icons/ai";

function SelectBeautician({ step, setStep }: newAppointmentStepPropType) {
    return (
        <div className="sticky top-14 bg-white z-[100]">
            <Container
                style={{
                    paddingBlock: '1.5rem '
                }}
            >
                <div className="flex justify-between mb-6">
                    <h2 className="font-bold text-2xl">Select Beautician</h2>
                    <h3 className="font-medium text-md text-gray-600 mb-2 flex gap-3 items-center">
                        <AiOutlineArrowLeft
                            className="cursor-pointer font-bold text-xl"
                            onClick={() => setStep(step - 1)}
                        />
                        <span>STEP <span className="inline-block w-[12px] text-center">{step}</span> OF 4</span></h3>

                </div>
            </Container >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div >
    )
}

export default SelectBeautician