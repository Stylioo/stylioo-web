import Container from "@/components/Container"
import { appointments } from "@/data/appointments"

function appointmentPage() {
    return (
        <>
            <Container className="">
                <div className="bg-white pt-8 pb-4 border-b sticky top-14">
                    <h1 className="text-xl font-semibold mb-2">Overview</h1>
                </div>
                {/* <div className="mt-6">
                    {
                        appointments.map((appointment, index) => (
                            <div key={index} className="flex justify-between items-center p-4 border-2 rounded-md service-label cursor-pointer hover:shadow-md transition duration-100 ease-in-out select-none mb-4">
                                <div className="flex flex-col">
                                    <p className="font-semibold transition duration-100 ease-in-out service-name">{appointment.title}</p>
                                    <p className="text-sm">{new Date('2021-07-30T09:00:00.000Z').toUTCString()}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-semibold text-lg transition duration-100 ease-in-out service-name">{
                                        appointment.price === 0 ? "Free" : `LKR ${appointment.price}`
                                    }</p>
                                </div>
                            </div>
                        ))
                    }
                </div> */}

                {/* <div className="">
                    <h1 className="text-xl font-semibold mb-2">Previous Appointments</h1>
                </div> */}

            </Container>
        </>
    )
}

export default appointmentPage