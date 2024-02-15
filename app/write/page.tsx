"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { IoVideocamOutline } from 'react-icons/io5';
import { PiImageThin, PiPlusCircleThin } from 'react-icons/pi'
import { RiUpload2Fill } from 'react-icons/ri';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const WritePage = () => {

    const { status } = useSession();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    if (status === 'loading') {
        return <div className=''>Loading...</div>
    }
    if (status === 'authenticated') {
        router.push('/')
    }

    return (
        <div className='relative flex flex-col mt-5'>{/* main container */}
            <input type="text" placeholder='Title' className='text-5xl flex gap-5 border-none outline-none bg-transparent ml-8' />
            <div className='gap-5 h-[700px]'>{/* editor container */}
                <button onClick={() => setOpen(!open)} className='bg-transparent items-center justify-center cursor-pointer'>
                    <PiPlusCircleThin className='w-11 h-11'/>
                </button>
                {open && (
                    <div className='flex gap-3 absolute z-[999] w-[100%] left-12'>
                        <button className='flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-transparent border cursor-pointer hover:border-2'>
                            <PiImageThin />
                        </button>
                        <button className='flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-transparent border cursor-pointer hover:border-2'>
                            <RiUpload2Fill />
                        </button>
                        <button className='flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-transparent border cursor-pointer hover:border-2'>
                            <IoVideocamOutline />
                        </button>
                    </div>
                )}
                <ReactQuill 
                    theme='bubble' 
                    value={value} 
                    onChange={setValue} 
                    placeholder='What is on your mind?'
                    className='w-[100%] mt-3'
                    />
            </div>
            <button className='absolute top-8 right-5 pt-[10px] px-3 py-3 border-none bg-green-500 text-white rounded-md hover:bg-green-800'>Publish</button>
        </div>
    )
}

export default WritePage