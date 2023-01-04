/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'


function SmallCard({ img, distance, location }) {
    return (
        <div className='flex'>
            <div className='relative h-16 w-16'>
                <Image src={img} alt='image' className='rounded-lg' width={400} height={20} />
            </div>

            <div>
                <h2>{location}</h2>
                <h3>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard