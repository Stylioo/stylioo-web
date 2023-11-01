import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-gray-800 sm:mt-10 pt-10">
                <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                    {/* Col-1 */}
                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* Col Title */}
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Getting Started
                        </div>
                        {/* Links */}
                        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Home
                        </a>
                        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Services
                        </a>
                        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Help
                        </a>
                    </div>
                    {/* Col-2 */}
                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* Col Title */}
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Ouer services
                        </div>
                        {/* Links */}
                        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Facial
                        </a>
                        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Hair
                        </a>
                        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Manicure & padicure
                        </a>
                    </div>
                    {/* Col-3 */}
                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* Col Title */}
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Branches
                        </div>
                        {/* Links */}
                        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Cairo
                        </a>

                    </div>

                    {/* Col-4 company details */}

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* Col Title */}

                        <p
                            className='text-gray-300 block text-3xl font-medium duration-700'
                        >
                            Stylioo
                        </p>
                        <p
                            className='text-gray-300 my-3 block text-sm font-medium duration-700'
                        >Embrace the style</p>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer