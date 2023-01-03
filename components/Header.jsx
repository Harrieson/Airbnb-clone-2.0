import React from 'react'
import Image from 'next/legacy/image'
import Logo from "../public/images/qd3.png"
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UserIcon,
    MenuIcon
} from '@heroicons/react/solid'

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src={Logo} alt=''
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input type="text" placeholder='Start Your Search' className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2' />
            </div>
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a Host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex space-x-2 items-center border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6 cursor-pointer' />
                    <UserCircleIcon className='h-6 cursor-pointer' />
                </div>
            </div>
        </header>
    )
}

export default Header