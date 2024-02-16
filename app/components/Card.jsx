import Image from 'next/image'
import React from 'react'
import vrglasses from '../../public/vr-glasses-gaming.jpg'
import Link from 'next/link'

const Card = ({ key, item }) => {
  return (
    <div className='flex-shrink-0 max-w-[250px] bg-white shadow-2xl rounded-lg overflow-hidden' key={key}>
        {item.img && (
        <div className='w-full h-36 object-cover object-center'>
            <Image src={item.img} alt='' className=''/>
        </div>
        )}
        <div className='p-4'>
            <span className=''>{item.createdAt.substring(0, 10)} -{" "}</span>
            <span className=''>{item.catSlug}</span>
            <Link href={`/posts/${item.slug}`}>
                <h1 className='text-gray-900 font-semibold text-center text-xl my-3'>{item.title}</h1>
            </Link>
            <div className='text-gray-700 text-base text-center' dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}>
                <Link href={`/posts/${item.slug}`} className='mt-2 ml-14 font-semibold bg-sky-700 p-2 px-4 rounded-lg w-max text-white hover:bg-sky-900 transition'>
                    Read more
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Card;