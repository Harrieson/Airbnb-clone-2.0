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
            <div>
                <p></p>
            </div>
        </div>
    )
}

export default Banner