'use client'
import axios from "@/axios"
import Container from "@/components/Container"
import Loading from "@/components/Loading"
import NoDataFound from "@/components/NoDataFound"
import formatNumber from "@/utils/formatNumber"
import moment from "moment"
import Image from "next/image"
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
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getAllAppointments = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get('/appointment?type=upcomming')
            if (response.data.success) {
                setUpcomming(response.data.data)
                console.log(response.data.data);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false)
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
                <div className="mt-6 min-h-[325px]">
                    {
                        isLoading ? <Loading /> : Upcomming.length <= 0 ? <NoDataFound /> : Upcomming.map((appointment, index) => {
                            console.log(appointment);
                            return (
                                <div key={index} className="flex flex-col p-4 border-2 rounded-md service-label cursor-pointer hover:shadow-md transition duration-100 ease-in-out select-none mb-4">
                                    <div className="flex justify-between">

                                        <div className="flex gap-2 pt-2 flex-grow">
                                            {
                                                appointment.service.map((service: any, index: number) => (
                                                    <div key={index} className="flex items-center px-4 py-1 border border-blue-500 rounded-lg">
                                                        <p className="text-sm transition text-blue-500 duration-100 ease-in-out">{
                                                            service.name
                                                        }</p>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <div className="flex flex-col">
                                            <p className="font-semibold text-xl transition duration-100 ease-in-out">{
                                                appointment.total_price === 0 ? "Free" : `LKR ${formatNumber(appointment.total_price)}`
                                            }</p>
                                            <p className="text-xs text-gray-500">{moment(appointment.appointment_date).format('YYYY-MM-DD')} - {appointment.start_time}</p>
                                        </div>

                                    </div>
                                    <div className="flex mt-4 items-end justify-between">

                                        <div className="flex items-center gap-2">
                                            <Image width={30} height={30} src={appointment.beautician.image ? `https://stylioo.blob.core.windows.net/images/${appointment.beautician.image}` : 'https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51'} alt="test" />
                                            <div className="flex flex-col">
                                                <p className="font-semibold text-md transition duration-100 ease-in-out">{appointment.beautician.first_name} {appointment.beautician.last_name}</p>
                                                {/* <p className="text-xs text-gray-500">{moment(appointment.appointment_date).format('YYYY-MM-DD')} - {appointment.start_time}</p> */}
                                            </div>
                                        </div>

                                        <button
                                            className="border-gray-500 text-gray-600 border px-3 py-1 rounded-lg text-sm mt-2 mr-2"
                                        >cancel</button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>



            </Container>
        </>
    )
}

export default AppointmentPage