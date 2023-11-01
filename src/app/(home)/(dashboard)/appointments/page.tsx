import Container from "@/components/Container"
import NoDataFound from "@/components/NoDataFound"
import { appointments } from "@/data/appointments"

function appointmentPage() {
    return (
        <>
            <Container className="">
                <div className="bg-white pt-8 pb-4 border-b sticky top-14">
                    <h1 className="text-xl font-semibold mb-2">Overview</h1>
                </div>
                <div className="bg-white min-h-[50vh]">
                    <NoDataFound />
                </div>
            </Container>
        </>
    )
}

export default appointmentPage