import AppContainer from "@/components/AppContainer"
import Image from "next/image"
import Link from "next/link"
import '@/styles/hero.scss'

function Hero() {
    return (
        <div className="bg-cover bg-center  h-screen md:h-[45rem] lg:h-[40rem] relative select-none">
            <Image
                width="1920"
                height="1080"
                className=" absolute top-0 left-0 -z-10 w-full h-screen  md:h-full  object-cover brightness-[0.7]"
                src="https://stylioo.blob.core.windows.net/images/herobg1.png"
                // src="https://stylioo.blob.core.windows.net/images/herobg2.jpg"
                alt="" />
            <AppContainer className="h-full">
                <div className="h-full flex flex-col justify-center items-center text-center gap-4">
                    <div className="text-6xl md:text-7xl text-white font-bold flex flex-col gap-4 md:flex-row mb-4 ">
                        <p>EMBRACE</p>
                        <p>THE</p>
                        <p>STYLE</p>
                    </div>
                    <p className="text-md md:text-lg max-w-sm md:max-w-[700px] text-gray-300">Welcome to Stylioo, where beauty meets confidence, and style is embraced with every touch.</p>
                    <Link
                        className=" bg-red-700 text-white px-6 py-[8px] rounded mt-12 md:mt-10 hover:bg-red-600 transition duration-300 ease-in-out"
                        href="/services">Make An Appointment</Link>
                </div>
                <div className="scroll-indicator">
                    <div className="middle" ></div>
                </div>

            </AppContainer>
        </div>
    )
}

export default Hero