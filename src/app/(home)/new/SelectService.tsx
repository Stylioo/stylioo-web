'use client'
import Container from "@/components/Container"
import "@/styles/newAppointment.scss"
import { newAppointmentStepPropType } from "@/types"
import { serviceCategories } from "@/data/services"
import { useRef, useState, useEffect, ChangeEvent } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";

import useAxios from "@/hooks/useAxios"
import { useAppSelector, useAppDispatch } from "@/redux/store"
import { addToCart, removeFromCart } from "@/redux/features/cartSlice"
import formatNumber from "@/utils/formatNumber"
import Loading from "@/components/Loading"
import axios from "@/axios"
import { BiXCircle } from "react-icons/bi"
import { covertMinToHMin } from "@/utils/covertMinToHMin"

type serviceType = {
    id: string,
    name: string,
    category: string,
    description?: string,
    price: number,
    duration: number,
    status: string,
    createdAt: string,
    updatedAt: string,
}

function SelectService({ step, handleNext }: newAppointmentStepPropType) {


    const dispatch = useAppDispatch()
    let cart = useAppSelector(state => state.cart)

    const serviceRef = useRef<HTMLDivElement>(null)

    const [services, setServices] = useState<serviceType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const handleScrollLeft = () => {
        serviceRef.current?.scrollBy({ left: -200, behavior: 'smooth' })
    }
    const handleScrollRight = () => {
        serviceRef.current?.scrollBy({ left: 200, behavior: 'smooth' })
    }
    const handleCheckbox = (e: any) => {
        let service = services?.find((service: any) => service.id === e.target.id)
        if (service) {
            if (e.target.checked) {
                dispatch(addToCart(service))
            } else {
                dispatch(removeFromCart(service))
            }
        }

    }

    const remove = (serviceId: string) => {
        let service = services?.find((service: any) => service.id === serviceId)
        if (service) {
            dispatch(removeFromCart(service))

        }
    }

    const [searchTerm, setSearchTerm] = useState("")

    const getAllServices = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get('/service')
            if (res.data.success) {
                setServices(res.data.data)
            } else {
                console.log([])
            }

        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    const searchServices = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            setIsLoading(true)
            let value = e.target.value
            setSearchTerm(value)
            const response = await axios.post('/service/search', {
                q: value
            })
            if (response.data.success) {
                setServices(response.data.data)
            }
        } catch (error) {
            console.log(error)
            setServices([])
        } finally {
            setIsLoading(false)
        }
    }

    const [selectedCategory, setSelectedCategory] = useState<string>('')

    const handleCategorySelect = (e: ChangeEvent<HTMLInputElement>) => {
        const categoryId = e.target.id
        setSelectedCategory(categoryId)
        // search function
    }

    const searchByCategory = async (categoryId: string) => {
        try {
            setIsLoading(true)
            const response = await axios.post(`/service/search/category`, {
                q: categoryId
            })
            if (response.data.success) {
                setServices(response.data.data)
            }
        } catch (error) {
            console.log(error)
            setServices([])
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        console.log(selectedCategory);

        if (selectedCategory !== '') {
            searchByCategory(selectedCategory)
        }
    }, [selectedCategory])


    useEffect(() => {
        getAllServices()
    }, [])


    return (
        <>
            <div className="sticky top-14 bg-white z-[100]">
                <Container
                    style={{
                        paddingBlock: '1.5rem '
                    }}
                >
                    <div className="flex justify-between mb-6">
                        <h2 className="font-bold text-2xl">Select Services</h2>
                        <h3 className="font-medium text-md text-gray-600 mb-2">
                            <span>STEP <span className="inline-block w-[12px] text-center">{step}</span> OF 4</span></h3>
                    </div>
                    <div className="flex flex-col gap-4 lg:items-center lg:flex-row lg:gap-16">
                        <div className=" flex lg:min-w-[400px] mb-2">
                            <input type="text" className=" border rounded-lg px-4 grow search-box" onChange={searchServices} placeholder="Search" />
                            {/* <button className="border border-l-0 border-blue-700 bg-blue-700 text-white rounded-r-lg px-4 hover:bg-blue-600 hover:border-blue-600 transition duration-300 ease-in-out" ><AiOutlineSearch className="text-xl" /></button> */}
                        </div>
                        <div className="flex gap-4  overflow-y-auto hidden-scroll-bar ">
                            <button
                                // className="border border-gray-300 rounded-full flex justify-center items-center p-3 bg-gray-800 hover:bg-gray-700 text-white transition duration-300 ease-in-out"
                                className="rounded-full flex justify-center items-center p-3 hover:bg-gray-100 transition duration-300 ease-in-out"
                                onClick={handleScrollLeft}
                            >
                                <AiOutlineLeft />
                            </button>
                            <div ref={serviceRef} className="flex gap-2 overflow-y-auto hidden-scroll-bar ">
                                {
                                    serviceCategories.map((category, index) => (
                                        <div key={index} className="flex min-w-fit cursor-grab">
                                            <input name="type" type="radio" id={category.id} className="hidden t-check-box" onChange={handleCategorySelect} />
                                            <label htmlFor={category.id} className="cursor-grab px-4 py-2 border-2 min-w-fit rounded-2xl text-sm t-label">{category.name}</label>
                                        </div>
                                    ))
                                }
                            </div>
                            <button
                                className="rounded-full flex justify-center items-center p-3 hover:bg-gray-100 transition duration-300 ease-in-out"
                                onClick={handleScrollRight}
                            >
                                <AiOutlineRight />
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
            <Container className="grid lg:grid-cols-5 gap-8" >
                <div className="lg:col-span-3">
                    {
                        isLoading ? <Loading /> : services.length <= 0 ? <p className="text-gray-400">No services found</p> :
                            services?.map((service: any, index: number) => (
                                <div key={index} className="mb-4">
                                    <input type="checkbox" id={service.id} className="hidden service-check-box" onChange={handleCheckbox}
                                        checked={cart.services.find((item: serviceType) => item.id === service.id) ? true : false}
                                    />
                                    <label htmlFor={service.id} className="block w-full p-4 border-2 rounded-md service-label cursor-pointer hover:shadow-md transition duration-100 ease-in-out select-none">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex flex-col">
                                                <p className="font-bold text-lg transition duration-100 ease-in-out service-name">{service.name}</p>
                                                <p className="text-sm">{covertMinToHMin(service.duration)}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <p className="font-semibold text-lg transition duration-100 ease-in-out service-name">{
                                                    service.price === 0 ? "Free" : `LKR ${formatNumber(service.price)}`
                                                }</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="text-sm">{service.description}</p>
                                        </div>
                                    </label>
                                </div>
                            ))
                    }

                </div>
                <div className="lg:hidden min-h-[50px]"></div>

                <div className="lg:col-span-2">
                    <div className="min-h-[100px] fixed bottom-0 left-0 right-0 lg:pt-6 bg-white lg:min-h-[450px] lg:sticky lg:top-[210px] lg:border-2 lg:rounded-lg lg:flex lg:flex-col">

                        <div className="grow lg:h-[350px] overflow-y-scroll hidden-scroll-bar hidden lg:block ">
                            {
                                cart.services.length > 0 ?
                                    cart.services.map((item: serviceType, index) => (
                                        <div key={index} className="justify-between items-end mb-4 lg:flex mx-6 border-b-2 pb-2">
                                            <div className="flex flex-col gap-1 w-full">
                                                <div className="flex justify-between w-full">
                                                    <p className="font-semibold text-md">{item.name}</p>
                                                    <button
                                                        onClick={() => remove(item.id)}
                                                    >
                                                        <AiOutlineClose />
                                                    </button>
                                                </div>
                                                {/* <p className="text-sm ">{covertMinToHMin(service.duration)}</p> */}
                                                <p className="text-sm">{
                                                    item.price === 0 ? "Free" : `LKR ${formatNumber(item.price)}`
                                                }</p>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    <div className="flex justify-center items-center h-full">
                                        <p className="text-gray-400">No services selected</p>
                                    </div>
                            }


                        </div>

                        <div className="flex justify-between items-end w-full px-6 py-4 box-shadow">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm ">{cart.services.length > 0 ? cart.services.length : "No"} Service {
                                    cart.services.length > 0 &&
                                    " - (ET) " + covertMinToHMin(cart.services.reduce((acc: number, item: serviceType) => acc + item.duration, 0))
                                }</p>
                                <p className="font-bold text-xl">{cart.totalPrice === 0 ? "-" : `LKR ${formatNumber(cart.totalPrice)}`}</p>
                            </div>
                            <button
                                className="px-6 py-2 bg-blue-700 hover:bg-blue-600 transition duration-300 ease-in-out text-white rounded"
                                onClick={handleNext}
                                disabled={cart.services.length <= 0 || cart.totalPrice <= 0}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default SelectService