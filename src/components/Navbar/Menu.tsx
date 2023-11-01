'use client'
import axios from "@/axios"
import { removeUser } from "@/redux/features/authSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BiLogOut, BiLogOutCircle } from "react-icons/bi"
import { BsCalendar4Week } from "react-icons/bs"
import Image from "next/image"
import { useState } from "react"
import useAuth from "@/hooks/useAuth"

function Menu() {
    const loggedIn = useAppSelector(state => state.auth.id !== '')
    const dispatch = useAppDispatch()

    const router = useRouter()

    const currentUser = useAuth()


    const signoutUser = async () => {
        dispatch(removeUser())
        router.push('/')
    }

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className="flex gap-4 items-center relative">
            {
                loggedIn ?
                    <>

                        <button className="flex gap-3 items-center"
                            onClick={toggleMenu}
                        >
                            <Image src="https://stylioo.blob.core.windows.net/images/cat.png" alt="user" width={40} height={40} />
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-sm text-gray-200">{currentUser.first_name} {currentUser.last_name}</p>
                                <p className="text-[10px] text-blue-200">{currentUser.email} </p>
                            </div>
                        </button>

                        <div
                            onClick={toggleMenu}
                            className={`${openMenu ? "flex" : "hidden"} flex-col gap-2 absolute top-14 -right-4 bg-white shadow-md rounded-sm min-h-[50px] w-[160px]`}>
                            <Link href='/appointments' className="flex gap-2 items-center hover:bg-gray-100 px-3 py-2 pt-4">
                                <BsCalendar4Week />
                                <p className="text-sm">Appointments</p>
                            </Link>
                            <button onClick={signoutUser} className=" flex gap-2 items-center hover:bg-gray-100 px-3 py-2 pb-4">
                                <BiLogOut />
                                <p className="text-sm text-left">Sign Out</p>
                            </button>
                        </div>

                    </> :
                    <>
                        <div className="flex items-center gap-2">
                            <Link href='/auth/signin' className="text-white text-sm bg-blue-700 border border-blue-700 hover:bg-blue-600 px-3 py-2 rounded">Sign In</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="/auth/signup" className="text-blue-700 text-sm bg-transparent border border-blue-700 + px-3 py-2 rounded">Sign Up</Link>
                        </div>
                    </>
            }
        </div>
    )
}

export default Menu