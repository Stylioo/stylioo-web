'use client';

import Container from "@/components/Container";
import Link from "next/link";

export default function NavbarWithDropdown() {
    return (
        <div className="bg-gray-800 h-14 fixed top-0 left-0 right-0 z-[1000]">
            <Container className="h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-2 mr-12">
                            {/* <img src="/images/logo.png" alt="logo" className="h-8" /> */}
                            <p className="text-white font-semibold text-lg">Stylioo</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <p className="text-white text-sm">Home</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-white text-sm">About</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-white text-sm">Contact</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-2">
                            <Link href="/auth/signin" className="text-white text-sm">Sign In</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="/auth/signup" className="text-white text-sm">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}


