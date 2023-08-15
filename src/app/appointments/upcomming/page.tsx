'use client'
import Container from "@/components/Container"
import { appointments } from "@/data/appointments"
import formatNumber from "@/utils/formatNumber"
import axios from "axios"
import { useEffect, useState } from "react"

type UpcommingType = {
    id: string,
    beautician: string,
    beautician_id: string,
    customer: string,
    customer_id: string,
    date: string,
    description: string,
    totalPrice: number,
    duration: string,
    services: string,
    status: string,
    startTime: string,

}

function AppointmentPage() {

    const [Upcomming, setUpcomming] = useState<any[]>([])

    const getAllAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:5400/appointment')
            if (response.data.success) {
                setUpcomming(response.data.data)
                console.log(response.data.data);

            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllAppointments()
    }, [])

    return (
        <>
            <Container className="">
                <div className="bg-white pt-8 pb-4 border-b sticky top-14">
                    <h1 className="text-xl font-semibold mb-2">Upcomming Appointments</h1>
                </div>
                <div className="mt-6">
                    {
                        Upcomming.map((appointment, index) => (
                            <div key={index} className="flex justify-between items-center p-4 border-2 rounded-md service-label cursor-pointer hover:shadow-md transition duration-100 ease-in-out select-none mb-4">
                                <div className="flex flex-col">
                                    <p className="font-semibold transition duration-100 ease-in-out service-name">{appointment.services}</p>
                                    <p className="text-sm">{appointment.date} {appointment.startTime}</p>
                                    <p className="text-sm">{appointment.beautician}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-semibold text-lg transition duration-100 ease-in-out service-name">{
                                        appointment.totalPrice === 0 ? "Free" : `LKR ${formatNumber(appointment.totalPrice)}`
                                    }</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* <div className="">
                    <h1 className="text-xl font-semibold mb-2">Previous Appointments</h1>
                </div> */}

            </Container>
        </>
    )
}

export default AppointmentPage