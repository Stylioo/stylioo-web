'use client'
import useAuth from '@/hooks/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

function MakeAppointmentBtn() {

    const [show, setShow] = useState(false)

    const currentUser = useAuth()
    const router = useRouter()


    const handleBtn = () => {
        if (currentUser.id == "") router.push("/auth/signin")
        else router.push("/new")
    }

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
        <button onClick={handleBtn}
            className={`${!show && 'hidden'}
            bg-blue-600 text-white text-center text-lg px-6 py-[12px] rounded-md  hover:bg-blue-500 transition duration-300 ease-in-out cursor-pointer
            fixed right-1/2 transform translate-x-1/2 md:right-10 md:translate-x-0 bottom-10
            hover:scale-105
            floating-btn
            `}
        >Make An Appointment</button>
    )
}

export default MakeAppointmentBtn