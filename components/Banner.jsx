import React from 'react'
import BannerImage from '../public/images/0fm.png'
import Image from 'next/legacy/image'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[480px] lg:h-[580px] xl:h-[680px] 2xl:h-[1080px]'>
            <Image src={BannerImage} alt=''
                layout='fill'
                objectFit='cover'
            />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm sm:text-lg'>Not sure where you want to go?</p>
                <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3
                hover:shadow-xl active:scale-90 transition duration-150'>I&apos;m Flexible</button>
            </div>
        </div>
    )
}

export default Banner