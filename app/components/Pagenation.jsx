"use client"
import React from 'react'

const Pagenation = () => {
  return (
    <div className='flex justify-between'>
      <button className='w-24 border-none p-4 font-semibold bg-sky-700 rounded-lg text-white hover:bg-sky-900 transition'>Previous</button>
      <button className='w-24 border-none p-4 font-semibold bg-sky-700 rounded-lg text-white hover:bg-sky-900 transition'>Next</button>
    </div>
  )
}

export default Pagenation