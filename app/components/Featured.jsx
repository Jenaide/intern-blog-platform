"use client"
import React from 'react'
import Image from 'next/image'
import Ai from '../../public/ai-bg.jpg'

const Featured = () => {
  return (
    <div className='mt-8'>
      <h1 className='text-center'>
        <b className='text-4xl'>Welcome, To the world best blogging website</b>.<br /></h1>
        <h2 className='text-2xl text-center'>Create great stories. Interactive design for all.</h2>
      
      <div className='mt-10 flex items-center gap-12'>
        <div className='flex-1 h-[400px] relative'>
          <Image src={Ai} alt='mountain' fill className='object-cover rounded-md'/>
        </div>
        <div className='flex-1 flex flex-col gap-5'>
          <h2 className='text-3xl font-medium'>
            In Search Of Artificial Intelligence And Better Outcomes
          </h2>
          <p className='text-xl font-light text-[#626262]'>
          The term “artificial intelligence” was coined more than 60 years ago, but only recently 
          have we begun to realize all the benefits of AI, machine learning and deep learning in our everyday lives.
          Most of us already use smart machines that learn, recognize voices, make decisions, solve problems and make 
          recommendations on everything from the routes we drive, to the movies we watch, to the clothes we buy. We have smartphones 
          in our pockets, intelligent personal assistants on our countertops.
          </p>
          <button className='font-semibold bg-sky-700 p-2 px-4 rounded-lg w-max text-white hover:bg-sky-900 transition '>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured