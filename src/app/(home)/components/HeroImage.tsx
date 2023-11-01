'use client'

import Image from 'next/image'
import { useEffect, useState } from "react"

function HeroImage() {

    const imgs = ['bn1', 'bn2', 'bn3', 'bn4']
    const [currentImg, setCurrentImg] = useState("")

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            setCurrentImg(imgs[i])
            i++
            if (i === imgs.length) {
                i = 0
            }
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Image
            width="1920"
            height="1080"
            className=" absolute top-0 left-0 -z-10 w-full h-screen  md:h-full  object-cover brightness-[0.7]"
            // src="https://source.unsplash.com/1920x1080/?salon"
            // src="https://stylioo.blob.core.windows.net/images/b1.jpg"
            // src="https://stylioo.blob.core.windows.net/images/herobg2.jpg"
            src={`https://stylioo.blob.core.windows.net/images/${currentImg}.jpg`}
            alt="" />
    )
}

export default HeroImage