import Container from "@/components/Container"
import SelectBeautician from "./SelectBeautician"
import SelectService from "./SelectService"
import SelectTime from "./SelectTime"
import Verify from "./Verify"


function NewAppointmentPage() {
    return (
        <>
            <Container >
                <h3 className="font-medium text-md text-gray-600 mb-2">STEP 1 OF 4</h3>
                <SelectService />
            </Container>
            {/* <SelectBeautician /> */}
            {/* <SelectTime /> */}
            {/* <Verify /> */}
        </>
    )
}

export default NewAppointmentPage