import Container from "@/components/Container"
import "@/styles/newAppointment.scss"
import { newAppointmentStepPropType } from "@/types"
import { serviceCategories, services } from "@/data/services"
import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";



function SelectService({ step, handleNext }: newAppointmentStepPropType) {

    const serviceRef = useRef<HTMLDivElement>(null)

    const handleScrollLeft = () => {
        serviceRef.current?.scrollBy({ left: -200, behavior: 'smooth' })
    }
    const handleScrollRight = () => {
        serviceRef.current?.scrollBy({ left: 200, behavior: 'smooth' })
    }


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
                            <input type="text" className=" border rounded-l-lg px-4 grow border-r-0 search-box" placeholder="Search" />
                            <button className="border border-l-0 border-red-700 bg-red-700 text-white rounded-r-lg px-4 hover:bg-red-600 hover:border-red-600 transition duration-300 ease-in-out" ><AiOutlineSearch className="text-xl" /></button>
                        </div>
                        <div className="flex gap-4  overflow-y-auto hidden-scroll-bar ">
                            <button
                                className="border border-gray-300 rounded-full flex justify-center items-center p-3 bg-gray-800 hover:bg-gray-700 text-white transition duration-300 ease-in-out"
                                onClick={handleScrollLeft}
                            >
                                <AiOutlineLeft />
                            </button>
                            <div ref={serviceRef} className="flex gap-2 overflow-y-auto hidden-scroll-bar ">
                                {
                                    serviceCategories.map((category, index) => (
                                        <div key={index} className="flex min-w-fit cursor-grab">
                                            <input name="type" type="radio" id={category.id} className="hidden t-check-box" />
                                            <label htmlFor={category.id} className="cursor-grab px-4 py-2 border-2 min-w-fit rounded-2xl text-sm t-label">{category.name}</label>
                                        </div>
                                    ))
                                }
                            </div>
                            <button
                                className="border border-gray-300 rounded-full flex justify-center items-center p-3 bg-gray-800 hover:bg-gray-700 text-white transition duration-300 ease-in-out"
                                onClick={handleScrollRight}
                            >
                                <AiOutlineRight />
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
            <Container className="grid lg:grid-cols-3 gap-8" >
                <div className="lg:col-span-2">
                    {
                        services.map((service, index) => (
                            <div key={index} className="mb-4">
                                <input type="checkbox" id={service.id} className="hidden service-check-box" />
                                <label htmlFor={service.id} className="block w-full p-4 border-2 rounded-md service-label cursor-pointer hover:shadow-md transition duration-100 ease-in-out select-none">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex flex-col">
                                            <p className="font-bold text-lg transition duration-100 ease-in-out service-name">{service.name}</p>
                                            <p className="text-sm">{service.duration} min</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-semibold text-lg transition duration-100 ease-in-out service-name">{
                                                service.price === 0 ? "Free" : `LKR ${service.price}`
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

                <div className="">
                    <div className="min-h-[100px] fixed bottom-0 left-0 right-0 lg:pt-6 bg-white lg:min-h-[450px] lg:sticky lg:top-[210px] lg:border-2 lg:rounded-lg lg:flex lg:flex-col">

                        <div className="grow lg:max-h-[400px] overflow-y-scroll hidden-scroll-bar hidden lg:block">
                            {
                                [1, 2, 3].map((item, index) => (
                                    <div key={index} className="justify-between items-end mb-4 lg:flex mx-6 border-b-2 pb-2">
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold text-md">Treatment name</p>
                                            <p className="text-sm ">30 min</p>
                                        </div>
                                        <p className="font-semibold text-lg">{
                                            'LKR 60,000'
                                        }</p>
                                    </div>
                                ))
                            }


                        </div>

                        <div className="flex justify-between items-end w-full px-6 py-4 box-shadow">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm ">3 Service</p>
                                <p className="font-bold text-xl">LKR 180,000</p>
                            </div>
                            <button
                                className="px-6 py-2 bg-red-700 hover:bg-red-600 transition duration-300 ease-in-out text-white rounded"
                                onClick={handleNext}
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