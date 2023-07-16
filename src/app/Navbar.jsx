'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react';

export default function NavbarWithDropdown() {
    return (
        <Navbar
            fluid
            className="bg-navbar-background bg-gray-800 shadow-md text-white"
        >
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-md font-semibold text-white ">
                    Island Nomad
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    inline
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="#"
                    className='text-white'
                >
                    Home
                </Navbar.Link>
                <Navbar.Link
                    href="#"
                    className='text-white'
                >
                    About
                </Navbar.Link>
                <Navbar.Link
                    href="#"
                    className='text-white'
                >
                    Services
                </Navbar.Link>
                <Navbar.Link
                    href="#"
                    className='text-white'
                >
                    Pricing
                </Navbar.Link>
                <Navbar.Link
                    href="#"
                    className='text-white'

                >
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


