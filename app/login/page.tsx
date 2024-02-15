"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'

const LoginPage = () => {
    const {data, status} = useSession(); //Hook
    const router = useRouter()

    if(status === 'loading'){
        return <div className='text-green-600'>Loading</div>
    }
    if (status === 'authenticated'){
        router.push('/')
    }

    return (
        <div className='flex items-center justify-center mt-14'>
            <div className='flex bg-slate-200 px-36 flex-col gap-14 rounded-[10px]'>
                <div 
                    className='p-5 rounded-[5px] mt-5 border-none text-white font-bold cursor-pointer flex items-center justify-center first:bg-orange-500'
                    onClick={() => signIn("google")}
                    >Sign in with Google
                </div>
                <div 
                    className='p-5 rounded-[5px] border-none text-white font-bold cursor-pointer flex items-center justify-center even:bg-[#111]'
                    >Sign in with Github
                </div>
                <div 
                    className='p-5 rounded-[5px] border-none mb-5 text-white font-bold cursor-pointer flex items-center justify-center last:bg-sky-500'
                    >Sign in with Facebook
                </div>
            </div>
        </div>
    )
}

export default LoginPage 