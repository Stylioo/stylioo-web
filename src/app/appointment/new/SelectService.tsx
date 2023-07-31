import Container from "@/components/Container"
import "@/styles/newAppointment.scss"

import { serviceCategories, services } from "@/data/services"

function SelectService() {
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
                        <h3 className="font-medium text-md text-gray-600 mb-2">STEP 1 OF 4</h3>
                    </div>
                    <div className="flex gap-2 overflow-y-auto hidden-scroll-bar ">
                        {
                            serviceCategories.map((category, index) => (
                                <div key={index} className="flex min-w-fit cursor-grab">
                                    <input name="type" type="radio" id={category.id} className="hidden t-check-box" />
                                    <label htmlFor={category.id} className="cursor-grab px-4 py-2 border-2 min-w-fit rounded-2xl text-sm t-label">{category.name}</label>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </div>
            <Container className="grid lg:grid-cols-3 gap-8" >
                <div className="lg:col-span-2">
                    {
                        services.map((service, index) => (
                            <div key={index} className="p-4 border-2 rounded-lg mb-4">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex flex-col">
                                        <p className="font-bold text-lg">{service.name}</p>
                                        <p className="text-sm">{service.duration} min</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold text-lg">{
                                            service.price === 0 ? "Free" : `LKR ${service.price}`
                                        }</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-sm">{service.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="fixed bottom-0 left-0 right-0 box-shadow lg:box-shadow-none lg:relative lg:block">
                    <div className="py-6 min-h-[90px]  lg:border-2 lg:rounded-lg lg:sticky lg:top-[200px] lg:min-h-[450px] bg-white">

                        <div className="px-6">
                            <div className=" hidden justify-between items-end mb-4 lg:flex border-b-2 pb-2">
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold text-md">Treatment name</p>
                                    <p className="text-sm ">30 min</p>
                                </div>
                                <p className="font-semibold text-lg">{
                                    'LKR 60,000'
                                }</p>
                            </div>
                            <div className=" hidden justify-between items-end mb-4 lg:flex border-b-2 pb-2">
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold text-md">Treatment name</p>
                                    <p className="text-sm ">30 min</p>
                                </div>
                                <p className="font-semibold text-lg">{
                                    'LKR 60,000'
                                }</p>
                            </div>
                            <div className=" hidden justify-between items-end mb-4 lg:flex border-b-2 pb-2">
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold text-md">Treatment name</p>
                                    <p className="text-sm ">30 min</p>
                                </div>
                                <p className="font-semibold text-lg">{
                                    'LKR 60,000'
                                }</p>
                            </div>
                            <div className="flex justify-between items-end w-full lg:absolute lg:bottom-4 bg-white lg:left-0 lg:right-0 lg:border-t-2 lg:pt-4 px-6">
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm ">3 Service</p>
                                    <p className="font-bold text-xl">LKR 180,000</p>
                                </div>
                                <div className="px-6 py-2 bg-red-700 text-white rounded">
                                    Next
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SelectService