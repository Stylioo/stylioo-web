import '@/styles/signin.scss'
import Image from 'next/image'
import Link from 'next/link'

function SignIn() {
    return (
        <div className="h-screen grid lg:grid-cols-2 select-none">

            <div className="hidden lg:block w-full h-full overflow-hidden relative">
                <Image className='brightness-50 absolute -z-10 infinite-zoom h-full w-full object-cover' src="https://stylioo.blob.core.windows.net/images/herobg2.jpg" width="2060" height="3090" alt="banner" />
                <div className="absoulte top-0 left-0 w-full h-full z-[100] flex flex-col justify-center items-center ">
                    <h1 className="text-[6rem] text-white font-bold drop-shadow-lg">Stylioo</h1>
                    <p className="text-white text-xl drop-shadow-lg">Embrace the style</p>
                </div>
            </div>

            <div className="my-auto mx-auto lg:ml-16 ">
                <div className="mb-6">
                    <h1 className="text-center lg:text-left text-3xl font-bold mb-2">Welcome Back !</h1>
                    <p className="text-center lg:text-left text-sm text-gray-600">Sign in to Sylioo, Embrace the style</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-[0.95rem]" htmlFor="email">Email Address</label>
                        <input className="h-[36px] w-[320px] md:w-[400px] rounded-lg border-gray-400" type="email" id="email" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-700 font-[] text-[0.95rem]" htmlFor="password">Password</label>
                        <input className="h-[36px] w-[320px] md:w-[400px] rounded-lg border-gray-400" type="password" id="password" />
                    </div>
                    <button className="py-3 my-4 bg-red-700 hover:bg-red-600 hover:shadow transition duration-300 ease-in-out text-white font-semibold rounded-lg ">Sign In</button>
                </div>
                <div className="flex justify-end">
                    <p className="text-sm font-semibold text-red-500">Forgot Password ?</p>
                </div>
                <div className="divider">
                    <p>or</p>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="px-4 py-2 rounded-lg border-2 shadow flex items-center justify-center gap-4 hover:shadow-lg transition duration-300 ease-in-out">
                        <Image width="50" height="50" className="w-8 h-8" src="https://stylioo.blob.core.windows.net/images/icons8-google-480.svg" alt="google" />
                        <p className='text-sm font-semibold text-gray-600'>Sign In with Google
                        </p>
                    </button>
                    {/* <button className="px-4 py-2 rounded-lg border-2 shadow flex items-center justify-center gap-4">
                        <Image width="50" height="50" className="w-8 h-8" src="https://stylioo.blob.core.windows.net/images/icons8-facebook-480.svg" alt="google" />
                        <p className='text-left w-[200px]'>Sign In with Facebook
                        </p>
                    </button> */}
                </div>

                <div className="mt-12">
                    <p className="text-center lg:text-left text-sm font-semibold">New Customer ? <Link className='text-red-500' href="/signup">Sign Up</Link></p>
                </div>
            </div>

        </div>
    )
}

export default SignIn