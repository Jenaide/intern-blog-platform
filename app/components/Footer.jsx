import Link from 'next/link'
import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa'
import { ImFacebook2 } from 'react-icons/im'
import { SiTiktok, SiYoutube } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='flex mt-12 justify-between px-6 text-stone-800 mb-6'>{/* main container */}
      <div className='flex-1 flex flex-col gap-3'>{/* info */}
        <div className='flex'>{/* logo container */}
          {/*<Image src={} alt='' />*/}
          <h1 className='font-black text-2xl'>Bloggers Corner</h1>
        </div>
        <p>
          At <b>BLOGGERS CORNER</b>, we're passionate about sharing insights, ideas, and inspiration on various topics. 
          Whether you're a seasoned professional or just starting your journey, our blog is your go-to destination 
          for valuable resources, practical advice, and thought-provoking content.
        </p>
        <div className='flex gap-4'>{/* icons container */}
          <Link href='#'><ImFacebook2 className='w-5 h-5'/></Link>
          <Link href=''><SiTiktok className='w-5 h-5' /></Link>
          <Link href=''><FaInstagramSquare className='w-5 h-5' /></Link>
          <Link href=''><SiYoutube className='w-5 h-5'/></Link>
        </div>
      </div>
      <div className='flex flex-1 justify-end gap-24'>
        <div className='flex flex-col gap-2 font-light'>{/* links container */}
          <span className='font-bold'>Links</span>
          <Link href=''>Home</Link>
          <Link href=''>About</Link>
          <Link href=''>Careers</Link>
          <Link href=''>Contact</Link>
        </div>
        <div className='flex flex-col gap-2 font-light '>{/* tags container */}
          <span className='font-bold'>Community</span>
          <Link href=''>Bloggers</Link>
        </div>
        <div className='flex flex-col gap-2 font-light'>{/* links container */}
          <span className='font-bold'>Developers</span>
          <Link href=''>Blogger API</Link>
          <Link href=''>Dev Forum</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer