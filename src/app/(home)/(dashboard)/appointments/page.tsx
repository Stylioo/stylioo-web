import Container from "@/components/Container"
import { appointments } from "@/data/appointments"

function appointmentPage() {
    return (
        <>
            <Container className="">
                <div className="bg-white pt-8 pb-4 border-b sticky top-14">
                    <h1 className="text-xl font-semibold mb-2">Overview</h1>
                </div>
            </Container>
        </>
    )
}

export default appointmentPage