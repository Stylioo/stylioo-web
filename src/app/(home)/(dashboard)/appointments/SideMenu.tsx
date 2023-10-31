'use client'
import Link from "next/link"
import { AiOutlineSchedule, AiOutlineClockCircle } from "react-icons/ai";
import { BiUserCircle, BiPieChart, BiHelpCircle } from "react-icons/bi";
import { usePathname } from "next/navigation";

const menuItems = [
    {
        name: 'Overview',
        icon: <BiPieChart />,
        slug: '/appointments'
    },
    {
        name: 'Upcomming Appointments',
        icon: <AiOutlineSchedule />,
        slug: '/appointments/upcomming'
    },
    {
        name: 'Completed Appointments',
        icon: <AiOutlineClockCircle />,
        slug: '/appointments/completed'
    },
    {
        name: 'Canceled Appointments',
        icon: <AiOutlineClockCircle />,
        slug: '/appointments/canceled'
    },
    {
        name: 'My Profile',
        icon: <BiUserCircle />,
        slug: '/profile'

    },
    // {
    //     name: 'Help & Support',
    //     icon: <BiHelpCircle />,
    //     slug: '/help'
    // },

]

function SideMenu() {

    const currentPath = usePathname()

    return (
        <div className=" pt-8 pb-4 sticky top-14 px-4 bg-white">
            {/* <Link href="/appointment/new"
                className="w-full transition rounded duration-200 ease-in-out flex items-center justify-start text-left gap-2 px-4 py-3 hover:bg-red-600 hover:text-white"
            >
                Make new appointment
            </Link> */}
            <div className="flex flex-col gap-2" >
                {
                    menuItems.map(item => (
                        <div key={item.slug} className="">
                            <Link href={item.slug} className={`w-full transition rounded duration-200 ease-in-out flex items-center justify-start text-left gap-2 px-4 py-3 hover:bg-red-600 hover:text-white ${item.slug === currentPath && 'bg-red-600 text-white'}`}>
                                <span>{item.icon}</span>
                                <p className="text-sm">{item.name}</p>
                            </Link>
                        </div>
                    ))
                }
            </div >

        </div>
    )
}

export default SideMenu