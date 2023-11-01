import Section from "@/components/Section"
import Image from "next/image"
import Link from "next/link"
import '@/styles/homePage.scss'
import ReduxProvider from "@/redux/Provider"
import MakeAppointmentHero from "./MakeAppointmentHero"
import HeroImage from "./HeroImage"

function Hero() {

    return (
        <div className="bg-cover bg-center  h-screen md:h-[40rem] lg:h-[35rem] relative select-none">
            <HeroImage />
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