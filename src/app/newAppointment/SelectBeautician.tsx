import Container from '@/components/Container'
import { newAppointmentStepPropType } from '@/types'
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import Image from 'next/image';
// import { beauticians } from '@/data/services';
import DefaultBeauticians from '@/assets/images/icons8-team-64.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useAppSelector, useAppDispatch } from "@/redux/store"
import { addBeautician } from '@/redux/features/cartSlice'
import formatNumber from '@/utils/formatNumber';
import useAxios from '@/hooks/useAxios';
import Loading from '@/components/Loading';

function SelectBeautician({ step, handleNext, handleBack }: newAppointmentStepPropType) {

    const dispatch = useAppDispatch()
    let cart = useAppSelector(state => state.cart)


    const handleRadioBtnCheck = (e: any) => {
        if (e.target.id === 'any') {
            dispatch(addBeautician({
                uid: 'any',
                first_name: 'No Preference',
                last_name: '',
                email: '',
            }))
        } else {
            const beautician = beauticians.find((beautician: any) => beautician.uid === e.target.id)
            dispatch(addBeautician({
                uid: beautician.uid,
                first_name: beautician.first_name,
                last_name: beautician.last_name,
                email: beautician.email,
            }))
        }

    }

    const [beauticians, error, loading, axiosFetch] = useAxios()

    useEffect(() => {
        axiosFetch({ method: 'get', url: '/employee' })
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
                        <h2 className="font-bold text-2xl">Select Beautician</h2>
                        <h3 className="font-medium text-md text-gray-600 mb-2 flex gap-3 items-center">
                            <AiOutlineArrowLeft
                                className="cursor-pointer font-bold text-xl"
                                onClick={handleBack}
                            />
                            <span>STEP <span className="inline-block w-[12px] text-center">{step}</span> OF 4</span></h3>
                    </div>

                    <div className="flex flex-col gap-4 lg:items-center lg:flex-row lg:gap-16">
                        <div className=" flex lg:min-w-[400px] mb-2">
                            <input type="text" className=" border rounded-l-lg px-4 grow border-r-0 search-box" placeholder="Search" />
                            <button className="border border-l-0 border-red-700 bg-red-700 text-white rounded-r-lg px-4 hover:bg-red-600 hover:border-red-600 transition duration-300 ease-in-out" ><AiOutlineSearch className="text-xl" /></button>
                        </div>
                    </div>

                </Container >
            </div >

            <Container>
                {loading ? <Loading /> :
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="">
                                <input type="radio" name="beautician" id="any" className="hidden beautician-check-box" onChange={handleRadioBtnCheck} />
                                <label htmlFor="any" className="flex items-center gap-6 border-2 rounded-xl hover:shadow transition duration-100 ease-in-out p-4 cursor-pointer beautician-label">
                                    <Image width="64" height="64" className="rounded-xl no-preference-image" src={DefaultBeauticians} alt=""></Image>
                                    <div className="">
                                        <h4 className="text-lg font-semibold">No Preference</h4>
                                        <p className='text-sm text-gray-600'>Maximum availability</p>
                                    </div>
                                </label>
                            </div>

                            {
                                beauticians?.map((beautician: any, index: number) => (
                                    <div key={index}>
                                        <input type="radio" name="beautician" id={beautician.uid} className="hidden beautician-check-box" onChange={handleRadioBtnCheck} />
                                        <label htmlFor={beautician.uid} className="flex items-center gap-6 border-2 rounded-xl hover:shadow transition duration-100 ease-in-out p-4 cursor-pointer select-none beautician-label">
                                            <Image width="64" height="64" className="rounded-full border-2 border-white" src={beautician.image ?? DefaultBeauticians} alt=""></Image>
                                            <div className="">
                                                <h4 className="text-lg font-semibold">{beautician.first_name} {beautician.last_name}</h4>
                                                <p className='text-sm text-gray-600'>Beautician</p>
                                            </div>
                                        </label>
                                    </div>
                                ))
                            }

                        </div >
                    </>

                }
            </Container >
            <div className="min-h-[120px]"></div>
            <div className="min-h-[100px] fixed bottom-0 left-0 right-0 bg-white box-shadow ">
                <div className="max-w-7xl lg:mx-auto flex justify-between items-end w-full px-6 py-4 ">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm ">{cart.services.length > 0 ? cart.services.length : "No"} Service</p>
                        <p className="font-bold text-xl">{cart.totalPrice === 0 ? "-" : `LKR ${formatNumber(cart.totalPrice)}`}</p>
                    </div>
                    <button
                        className="px-6 py-2 bg-red-700 hover:bg-red-600 transition duration-300 ease-in-out text-white rounded"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default SelectBeautician
