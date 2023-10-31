import Section from "@/components/Section"
import Image from "next/image"
import Link from "next/link"
import '@/styles/homePage.scss'
import ReduxProvider from "@/redux/Provider"
import MakeAppointmentHero from "./MakeAppointmentHero"

function Hero() {

    return (
        <div className="bg-cover bg-center  h-screen md:h-[40rem] lg:h-[35rem] relative select-none">
            <Image
                width="1920"
                height="1080"
                className=" absolute top-0 left-0 -z-10 w-full h-screen  md:h-full  object-cover brightness-[0.7]"
                // src="https://source.unsplash.com/1920x1080/?salon"
                src="https://stylioo.blob.core.windows.net/images/b1.jpg"
                // src="https://stylioo.blob.core.windows.net/images/herobg2.jpg"
                alt="" />
            <Section className="h-full">
                <div className="h-full flex flex-col items-center text-center gap-4 mt-12">
                    <div className="text-6xl md:text-7xl text-white font-bold flex flex-col gap-4 md:flex-row mb-4 ">
                        <p>EMBRACE</p>
                        <p>THE</p>
                        <p>STYLE</p>
                    </div>
                    <p className="text-md md:text-lg max-w-sm md:max-w-[700px] text-gray-300">Welcome to Stylioo, where beauty meets confidence, and style is embraced with every touch.</p>
                    <ReduxProvider>
                        <MakeAppointmentHero />
                    </ReduxProvider>
                </div>
                <div className="scroll-indicator">
                    <div className="middle" ></div>
                </div>

            </Section>
        </div>
    )
}

export default Hero