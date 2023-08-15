'use client'
import '@/styles/auth.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SignUpForm from './SignUpForm'
// import CompleteProfile from '../complete/page'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/store'

function SignUp() {

    const [step, setStep] = useState(1)

    const router = useRouter()


    const loggedIn = useAppSelector(state => state.auth.uid !== '')

    useEffect(() => {
        if (loggedIn) {
            router.push('/')
        }
    }, [loggedIn, router])


    const increamentStep = () => {
        if (step !== 3) setStep(step + 1)
    }

    // const decreamentStep = () => {
    //     if (step !== 1) setStep(step - 1)
    // }

    return (
        <div className="h-screen flex justify-center items-center select-none">

            {/* <div className="hidden lg:block w-full h-full overflow-hidden relative">
                <Image className='brightness-50 absolute -z-10 infinite-zoom h-full w-full object-cover' src="https://stylioo.blob.core.windows.net/images/herobg2.jpg" width="2060" height="3090" alt="banner" />
                <div className="absoulte top-0 left-0 w-full h-full z-[100] flex flex-col justify-center items-center ">
                    <h1 className="text-[6rem] text-white font-bold drop-shadow-lg">Stylioo</h1>
                    <p className="text-white text-xl drop-shadow-lg">Embrace the style</p>
                </div>
            </div> */}

            {/* form */}
            {
                <SignUpForm increamentStep={increamentStep} />
                // step === 2 ? <CompleteProfile increamentStep={increamentStep} /> : <h1>step 3</h1>
            }

        </div>
    )
}

export default SignUp