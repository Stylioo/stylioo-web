'use client'
import { useState, useEffect } from 'react'

function MakeAppointmentBtn() {

    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={`${!show && 'hidden'}
            bg-red-700 text-white text-center px-6 py-[8px] rounded  hover:bg-red-600 transition duration-300 ease-in-out cursor-pointer
            fixed right-1/2 transform translate-x-1/2 md:right-10 md:translate-x-0 bottom-10
            hover:scale-105
            floating-btn
            `}
        >Make An Appointment</div>
    )
}

export default MakeAppointmentBtn