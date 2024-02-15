"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import coding from '../../public/coding.jpg';
import tech from '../../public/tech.jpg';
import fashion from '../../public/fashion.jpg';
import culture from '../../public/culture.jpg';
import food from '../../public/food.jpg';


const categoryLink = 'flex items-center gap-3 capitalize ml-6 font-semibold'
const imageLink = 'rounded-[50%] '
const CategoryList = () => {

  return (
    <div>
      <h1 className='my-8 text-4xl font-semibold'>Categories</h1>{/* title */}
      <div className='flex flex-wrap justify-between gap-3'>{/* categories */}
        <div className='flex items-center gap-3 capitalize w-[15%] h-[60px] bg-gradient-to-r from-sky-500 to-sky-700 rounded-lg'>{/* category */}
          <Link href='' className={categoryLink}>
            <Image src={tech} alt='' width={32} height={32} className={imageLink} />
            Technology
          </Link>
        </div>
        <div className='flex items-center gap-3 capitalize w-[15%] h-[60px] bg-gradient-to-r from-slate-400 to-slate-700 rounded-lg'>
          <Link href='' className={categoryLink}>
            <Image src={food} alt='' width={32} height={32} className={imageLink}/>
            Food
          </Link>
        </div>
        <div className='flex items-center gap-3 capitalize w-[15%] h-[60px] bg-gradient-to-r from-fuchsia-400 to-fuchsia-700 rounded-lg'>
          <Link href='' className={categoryLink}>
            <Image src={culture} alt='' width={32} height={32} className={imageLink} />
            Culture
          </Link>
        </div>
        <div className='flex items-center gap-3 capitalize w-[15%] h-[60px] bg-gradient-to-r from-pink-400 to-pink-700 rounded-lg'>
          <Link href='' className={categoryLink}>
            <Image src={fashion} alt='' width={32} height={32} className={imageLink}/>
            Fashion
          </Link>
        </div>
        <div className='flex items-center gap-3 capitalize w-[15%] h-[60px] bg-gradient-to-r from-purple-400 to-purple-700 rounded-lg'>
          <Link href='' className={categoryLink}>
            <Image src={coding} alt='' width={32} height={32} className={imageLink}/>
            Coding
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryList