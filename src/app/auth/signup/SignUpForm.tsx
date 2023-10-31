'use client'
import { useState } from 'react'
import '@/styles/auth.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { BsEyeSlash, BsEye } from 'react-icons/bs'
import axios from '@/axios'
import BtnLoading from '@/components/BtnLoading'
import { useAppDispatch } from '@/redux/store'
import { setUser } from '@/redux/features/authSlice'

type signUpFormProps = {
    increamentStep: () => void
}

function SignUpForm({ increamentStep }: signUpFormProps) {

    const router = useRouter()

    const dispatch = useAppDispatch()

    const [isShowPassword, setIsShowPassword] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const handleSignUp = async () => {
        setIsLoading(true)
        if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill all the fields")
            return
        }
        if (password !== confirmPassword) {
            alert("Password and Confirm Password does not match")
            return
        }

        try {
            const response = await axios.post('/auth/customer/signup', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                type: 'CUSTOMER'
            })

            if (response.data.success) {
                dispatch(setUser({
                    id: response.data.data.id,
                    email: response.data.data.email,
                    first_name: response.data.data.first_name,
                    last_name: response.data.data.last_name,
                }))
                router.push('/')
            }

        } catch (err) {
            console.log(err);
        }
        finally {
            setIsLoading(false)
        }
    }

    return (

        <div className=" bg-white p-6">
            <div className="mb-8">
                <h1 className="text-center text-2xl font-bold mb-2">Sign Up!</h1>
                <p className="text-center text-sm text-gray-600">Sign up to Sylioo, Embrace the style</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2 w-[350px] md:w-[400px] ">
                    <label className="text-gray-600 font-[500] text-[0.8rem]" htmlFor="firstName">First Name</label>
                    <input
                        className="h-[40px] w-full rounded-lg border-gray-300 text-sm placeholder:text-gray-400 focus:ring-0 active:right-0" type="text" id="firstName" placeholder='Your First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2 w-[350px] md:w-[400px]">
                    <label className="text-gray-600 font-[500] text-[0.8rem]" htmlFor="lastName">Last Name</label>
                    <input
                        className="h-[40px] w-full rounded-lg border-gray-300 text-sm placeholder:text-gray-400 focus:ring-0 active:right-0" type="text" id="FirstName" placeholder='Your Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2 w-[350px] md:w-[400px]">
                    <label className="text-gray-600 font-[500] text-[0.8rem]" htmlFor="email">Email Address</label>
                    <input
                        className="h-[40px] w-full rounded-lg border-gray-300 text-sm placeholder:text-gray-400 focus:ring-0 active:right-0" type="email" id="email" placeholder='name@sample.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2 w-[350px] md:w-[400px]">
                    <label className="text-gray-600 font-[500] text-[0.8rem]" htmlFor="password">Password</label>
                    <div className="flex">
                        <input
                            className="h-[40px] border-gray-300 grow border-r-0 rounded-l-lg focus:ring-0 active:right-0" type={isShowPassword ? "text" : "password"} id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className='h-[40px] w-10  flex justify-center items-center border border-l-0 border-gray-300 rounded-r-lg'
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {
                                isShowPassword ? <BsEyeSlash className=' text-xl' /> : <BsEye className=' text-xl' />
                            }

                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-[350px] md:w-[400px]">
                    <label className="text-gray-600 font-[500] text-[0.8rem]" htmlFor="confirmPassword">Confirm Password</label>
                    <div className="flex">
                        <input
                            className="h-[40px] border-gray-300 grow border-r-0 rounded-l-lg focus:ring-0 active:right-0" type={isShowPassword ? "text" : "password"} id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            className='h-[40px] w-10  flex justify-center items-center border border-l-0 border-gray-300 rounded-r-lg'
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {
                                isShowPassword ? <BsEyeSlash className=' text-xl' /> : <BsEye className=' text-xl' />
                            }

                        </button>
                    </div>
                </div>
                {/* <div className="flex items-center">
                    <input type="checkbox" id="remember" className="rounded checked:bg-blue-500  focus:ring-0 active:right-0" />
                    <label className="text-gray-600  text-sm ml-2" htmlFor="remember">Accept all privacy and policies</label>
                </div> */}
                <button
                    className="py-2 my-3 bg-blue-700 hover:bg-blue-600 hover:shadow transition duration-300 ease-in-out text-white rounded-lg "
                    onClick={handleSignUp}
                >{isLoading ? <BtnLoading /> : "Sign Up"}</button>
            </div>
            {/* <div className="divider">
                <p>or</p>
            </div>
            <div className="flex flex-col gap-3">
                <button className="px-4 py-2 rounded-lg border-2 shadow flex items-center justify-center gap-4 hover:shadow-lg transition duration-300 ease-in-out">
                    <Image width="50" height="50" className="w-[25px] h-[25px]" src="https://stylioo.blob.core.windows.net/images/icons8-google-480.svg" alt="google" />
                    <p className='text-sm font-semibold text-gray-600'>Sign Up with Google
                    </p>
                </button>
            </div> */}

            <div className="mt-8">
                <p className="text-center text-sm font-semibold">Already have an account? <Link className='text-blue-500' href="/auth/signin">Sign In</Link></p>
            </div>
        </div>
    )
}

export default SignUpForm