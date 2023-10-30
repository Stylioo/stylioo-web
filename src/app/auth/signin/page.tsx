'use client'
import { useEffect, useState } from 'react'
import '@/styles/auth.scss'
import Image from 'next/image'
import Link from 'next/link'

import { BsEyeSlash, BsEye } from 'react-icons/bs'

import { useRouter } from 'next/navigation'

import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setUser } from '@/redux/features/authSlice'
import axios from '@/axios'

function SignIn() {


    const router = useRouter()
    const loggedIn = useAppSelector(state => state.auth.id !== '')

    useEffect(() => {
        if (loggedIn) {
            router.push('/')
        }
    }, [loggedIn, router])

    const dispatch = useAppDispatch()

    const [isShowPassword, setIsShowPassword] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleEmailChange = (e: any) => {
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        const value = e.target.value
        setEmail(value)
    }

    const handlePasswordChange = (e: any) => {
        const value = e.target.value
        setPassword(value)
    }

    const handleSignIn = async () => {
        if (email === '' || password === '') {
            alert('Please fill all the fields')
            return
        }
        try {
            const response = await axios.post('/auth/signin', {
                email: email,
                password: password,
                type: 'CUSTOMER'
            })

            if (response.status === 200) {
                const data = response.data
                console.log(data);
                if (!data.success) {
                    alert(data.message)
                    return
                }

                dispatch(setUser({
                    id: data.data.uid,
                    email: data.data.email,
                    first_name: data.data.first_name,
                    last_name: data.data.last_name,
                }))

                router.push('/')
            }

        } catch (error) {
            console.log(error);

        }

    }



    return (
        <div className="h-screen flex justify-center items-center select-none">

            {/* <div className="hidden lg:block w-full h-full overflow-hidden relative">
                <Image className='brightness-50 absolute -z-10 infinite-zoom h-full w-full object-cover' src="https://stylioo.blob.core.windows.net/images/herobg2.jpg" width="2060" height="3090" alt="banner" />
                <div className="absoulte top-0 left-0 w-full h-full z-[100] flex flex-col justify-center items-center ">
                    <h1 className="text-[6rem] text-white font-bold drop-shadow-lg">Stylioo</h1>
                    <p className="text-white text-xl drop-shadow-lg">Embrace the style</p>
                </div>
            </div> */}

            <div className="bg-white p-6 ">
                <div className="mb-12">
                    <h1 className="text-center text-2xl font-bold mb-2">Welcome Back !</h1>
                    <p className="text-center text-sm text-gray-600">Sign in to Sylioo, Embrace the style</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 w-[350px] md:w-[400px]">
                        <label className="text-gray-600 font-[500] text-[0.8rem]" htmlFor="email">Email Address</label>
                        <input
                            className="h-[40px] w-full rounded-lg border-gray-300 text-sm placeholder:text-gray-400 focus:ring-0 active:right-0" type="email" id="email" placeholder='name@sample.com'
                            onChange={handleEmailChange} value={email}
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-[350px] md:w-[400px]">
                        <label className="text-gray-600 font-[500] text-[0.8rem]" htmlFor="password">Password</label>
                        <div className="flex">
                            <input
                                className="h-[40px] border-gray-300 grow border-r-0 rounded-l-lg focus:ring-0 active:right-0" type={isShowPassword ? "text" : "password"} id="password"
                                onChange={handlePasswordChange} value={password}
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
                </div>
                <div className="flex justify-between mt-4 mb-2">
                    <div className="flex items-center">
                        <input type="checkbox" id="remember" className="rounded checked:bg-red-500  focus:ring-0 active:right-0" />
                        <label className="text-gray-600 font-[500] text-[0.9rem] ml-2" htmlFor="remember">Remember Me</label>
                    </div>
                    <p className="text-sm font-semibold text-red-500">Forgot Password ?</p>
                </div>

                <button className="py-3 my-3 w-full bg-red-700 hover:bg-red-600 hover:shadow transition duration-300 ease-in-out text-white font-semibold rounded-lg "
                    onClick={handleSignIn}
                >Sign In</button>

                {/* <div className="divider">
                    <p>or</p>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="px-4 py-2 rounded-lg border-2 shadow flex items-center justify-center gap-4 hover:shadow-lg transition duration-300 ease-in-out">
                        <Image width="50" height="50" className="w-[25px] h-[25px]" src="https://stylioo.blob.core.windows.net/images/icons8-google-480.svg" alt="google" />
                        <p className='text-sm font-semibold text-gray-600'>Sign In with Google
                        </p>
                    </button>
                    <button className="px-4 py-2 rounded-lg border-2 shadow flex items-center justify-center gap-4">
                        <Image width="50" height="50" className="w-8 h-8" src="https://stylioo.blob.core.windows.net/images/icons8-facebook-480.svg" alt="google" />
                        <p className='text-left w-[200px]'>Sign In with Facebook
                        </p>
                    </button>
                </div> */}

                <div className="mt-8">
                    <p className="text-center text-sm font-semibold">New Customer ? <Link className='text-red-500' href="/auth/signup">Sign Up</Link></p>
                </div>
            </div>

        </div>
    )
}

export default SignIn