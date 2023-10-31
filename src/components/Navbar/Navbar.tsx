'use client'
import Container from "@/components/Container";
import Menu from "./Menu";
import Link from "next/link";

export default function NavbarWithDropdown() {
    return (
        <div className="bg-white h-16 fixed top-0 left-0 right-0 z-[1000] shadow-md">
            <Container className="h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-2 mr-12">
                            {/* <img src="/images/logo.png" alt="logo" className="h-8" /> */}
                            <Link href="/" className="text-blue-600 font-semibold text-xl">Stylioo</Link>
                        </div>
                        {/* <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <p className="text-white text-sm">Home</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-white text-sm">About</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-white text-sm">Contact</p>
                            </div>
                        </div> */}
                    </div>
                    <Menu />
                </div>
            </Container>
        </div>
    )
}


