import React from 'react'
import AuthLinks from '../components/authLinks'
import { ImFacebook2 } from "react-icons/im";
import { SiTiktok, SiYoutube } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex h-24 items-center justify-between'>
      <div className='text-center font-extrabold text-5xl'>
        <Link href="/" className='' >|B C|</Link>
      </div>
      <div className='flex gap-3 text-xl font-semibold'>
        <Link href="/">Home</Link>
        <Link href=''>Contact</Link>
        <Link href=''>About</Link>
        <AuthLinks />
      </div>
      <div className='flex gap-3'>
        <Link href='#'><ImFacebook2 className='w-5 h-5'/></Link>
        <Link href=''><SiTiktok className='w-5 h-5' /></Link>
        <Link href=''><FaInstagramSquare className='w-5 h-5' /></Link>
        <Link href=''><SiYoutube className='w-5 h-5'/></Link>
      </div>
    </div>
  )
}

export default Navbar
