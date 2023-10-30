'use client'
import axios from "@/axios"
import { removeUser } from "@/redux/features/authSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import Link from "next/link"
import { useRouter } from "next/navigation"

function Menu() {
    const loggedIn = useAppSelector(state => state.auth.id !== '')
    const dispatch = useAppDispatch()

    const router = useRouter()


    const signoutUser = async () => {
        dispatch(removeUser())
        router.push('/')
    }

    return (
        <div className="flex gap-4 items-center">
            {
                loggedIn ? <div className="flex items-center gap-2">
                    <button onClick={signoutUser} className="text-white text-sm">Sign Out</button>
                </div> :
                    <>
                        <div className="flex items-center gap-2">
                            <Link href='/auth/signin' className="text-white text-sm">Sign In</Link>

                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="/auth/signup" className="text-white text-sm">Sign Up</Link>
                        </div>
                    </>
            }
        </div>
    )
}

export default Menu