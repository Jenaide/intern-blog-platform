"use client";

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const AuthLinks = () => {

  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href='/login'>Login</Link>
      ) : (
        <>
          <Link href='/write'>Write</Link>
          <span className='cursor-pointer' onClick={signOut}>Logout</span>
        </>
      )}
    </>
  )
}

export default AuthLinks