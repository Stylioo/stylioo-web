import Hero from "./components/Hero"
import Services from "./components/Services"
import InformationBar from "./components/InformationBar";
import MakeAppointmentBtn from "./components/MakeAppointmentBtn";
import Brands from "./components/Brands";
import Banner from "./components/Banner";
import Experts from "./components/Experts";
import ReduxProvider from "@/redux/Provider";

export default function Home() {
  return (
    <>
      <Hero />
      <ReduxProvider>
        <MakeAppointmentBtn />
      </ReduxProvider>
      <InformationBar />
      <Services />
      <Experts />
      <Banner />
      <Brands />
    </>
  )
}


