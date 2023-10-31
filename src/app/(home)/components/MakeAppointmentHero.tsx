'use client'
import useAuth from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

function MakeAppointmentHero() {
    const router = useRouter()
    const currentUser = useAuth()
    const handleBtn = () => {
        if (currentUser.id == "") router.push("/auth/signin")
        else router.push("/new")
    }

    return (
        <button
            onClick={handleBtn}
            className=" bg-blue-600 text-xl shadow text-white px-6 py-[12px] rounded-md mt-12 md:mt-10 hover:bg-blue-500 transition duration-300 ease-in-out"
        >Make An Appointment</button>
    )
}

export default MakeAppointmentHero