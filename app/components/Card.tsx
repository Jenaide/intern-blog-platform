import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import vrglasses from '../../public/vr-glasses-gaming.jpg'

const Card = () => {
  return (
    <div className='flex-shrink-0 max-w-[250px] bg-white shadow-2xl rounded-lg overflow-hidden'>
        <div className='w-full h-36 object-cover object-center'>
            <Image src={vrglasses} alt='' className=''/>
        </div>
        <div className='p-4'>
            <h1 className='text-gray-900 font-semibold text-center text-xl my-3'>lorem epson</h1>
            <p className='text-gray-700 text-base text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, praesentium repellendus.
            </p>
            <button className='mt-2 ml-14 font-semibold bg-sky-700 p-2 px-4 rounded-lg w-max text-white hover:bg-sky-900 transition'>
                Read more
            </button>
        </div>
    </div>
  )
}

export default Card