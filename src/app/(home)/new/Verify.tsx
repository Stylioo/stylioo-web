'use client'
import Container from '@/components/Container'
import { newAppointmentStepPropType } from '@/types'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

import { useAppSelector } from '@/redux/store'
import formatNumber from '@/utils/formatNumber'
import axios from '@/axios'
import { useState } from 'react'
import BtnLoading from '@/components/BtnLoading'

type serviceType = {
    id: string,
    name: string,
    category: string,
    description?: string,
    price: number,
    duration: string,
    status: string,
    createdAt: string,
    updatedAt: string,
}

function Verify({ step, handleBack }: newAppointmentStepPropType) {

    let cart = useAppSelector(state => state.cart)
    let currrentUser = useAppSelector(state => state.auth)

    const router = useRouter()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleCheckout = async (e: any) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const response = await axios.post('/appointment', {
                customer_id: currrentUser.id,
                date: cart.date,
                startTime: cart.startTime,
                duration: cart.services?.reduce((total: any, service: any) => total + service.duration, 0) || [],
                beautician_id: cart.beautician.id,
                services: cart.services?.map((service: any) => service.id) || [],
                total: cart.totalPrice,
                advanced_payment_amount: 0,
                sub_total: cart.totalPrice,
            })

            if (response.data.success) {
                console.log("success");
                console.log(response.data.data)
                router.push('/appointments/upcomming')
            }
            else {
                console.log("failed");
                router.push('/new')
            }

        } catch (err) {
            console.log(err)
            router.push('/new')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="sticky top-14 bg-white z-[100] shadow-md lg:shadow-none">
                <Container
                    style={{
                        paddingTop: '1.5rem ',
                        paddingBottom: '0.5rem ',
                    }}
                >
                    <div className="flex justify-between mb-6">
                        <h2 className="font-bold text-2xl mb-2">Checkout</h2>
                        <h3 className="font-medium text-md text-gray-600 mb-2 flex gap-3 items-center">
                            <AiOutlineArrowLeft
                                className="cursor-pointer font-bold text-xl"
                                onClick={handleBack}
                            />
                            <span>STEP <span className="inline-block w-[12px] text-center">{step}</span> OF 4</span></h3>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className=" col-span-2">

                            <div className="flex gap-12 mb-6">
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-600 text-sm">Date</span>
                                    <span className="font-bold">{cart.date}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-600 text-sm">Time</span>
                                    <span className="font-bold">{cart.startTime}</span>
                                </div>
                            </div>

                            <div className="">
                                <div className="">
                                    <h1 className="mb-4 font-semibold border-t pt-4 pb-4">Summery</h1>                                    <div className="">
                                        {
                                            cart.services.map((service: serviceType, index: number) => (
                                                <div key={index}>
                                                    <div className="flex justify-between items-center border-b py-2">
                                                        <div className="flex gap-2">
                                                            <span className="">{service.name}</span>
                                                        </div>
                                                        <span className="">LKR {formatNumber(service.price)}</span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[400px] relative overflow-y-scroll hidden-scroll-bar border-2 px-4 py-6 rounded-lg">
                            <div className="">
                                <div className="flex justify-between">
                                    <p>Total</p>
                                    <p className="font-bold">LKR {formatNumber(cart.totalPrice)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Discount</p>
                                    <p className="font-bold">-</p>
                                </div>
                                <div className="flex justify-between mt-10 pt-4 border-t">
                                    <p>Subtotal</p>
                                    <p className="font-bold">LKR {formatNumber(cart.totalPrice)}</p>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-4 box-shadow">
                                <button
                                    className="px-6 py-2 w-full text-white rounded-lg hover:bg-blue-600 bg-blue-700"
                                    onClick={handleCheckout}
                                >{isLoading ? <BtnLoading /> : "Checkout"}</button>
                            </div>
                        </div>
                    </div>

                </Container >
            </div >
        </>
    )
}

export default Verify