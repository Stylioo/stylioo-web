'use client'
import '@/styles/auth.scss'

type completeProfileProps = {
    increamentStep: () => void
}

function CompleteProfile({ increamentStep }: completeProfileProps) {

    return (

        <div className=" bg-white p-4">
            <div className="mb-8">
                <h1 className="text-center text-2xl font-bold mb-2">Complete your profile</h1>
                <p className="text-center text-sm text-gray-600">Sign up to Sylioo, Embrace the style</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2 w-[350px] md:w-[400px] ">
                    <label className="text-gray-600 font-[500] text-[0.8rem]" htmlFor="firstName">First Name</label>
                    <input className="h-[40px] w-full rounded-lg border-gray-300 text-sm placeholder:text-gray-400 focus:ring-0 active:right-0" type="text" id="firstName" placeholder='Your First Name' />
                </div>
                <div className="flex flex-col gap-2 w-[350px] md:w-[400px]">
                    <label className="text-gray-600 font-[500] text-[0.8rem]" htmlFor="lastName">Last Name</label>
                    <input className="h-[40px] w-full rounded-lg border-gray-300 text-sm placeholder:text-gray-400 focus:ring-0 active:right-0" type="text" id="FirstName" placeholder='Your Last Name' />
                </div>
                <button className="py-2 my-3 bg-red-700 hover:bg-red-600 hover:shadow transition duration-300 ease-in-out text-white rounded-lg ">Sign Up</button>
            </div>
        </div>
    )
}

export default CompleteProfile