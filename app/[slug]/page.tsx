import Image from 'next/image'
import React from 'react'
import john from '../../public/john doe.jpg'
import ai from '../../public/ai-bg.jpg'
import Comments from '../../app/components/Comments'

const SinglePage = () => {
  return (
    <div className='mt-5 p-10'>{/* main container */}
        <div className='flex items-center gap-12'>{/* info container */}
            <div className='flex-1'>{/* text container */}
                <h1 className='text-4xl mb-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                <div className='flex items-center gap-5'>{/* user container */}
                    <div className='w-[50px] h-[50px] relative'>{/* image container */}
                        <Image src={john} alt='' fill className='object-cover rounded-[50%]' />
                    </div>
                    <div className='flex flex-col gap-1 text-slate-600'>{/* user text */}
                        <span className='text-[20px] font-medium'>John Doe</span>
                        <span>14.02.2024</span>
                    </div>
                </div>
            </div>
            <div className='flex-1 h-[350px] relative'>{/* image container */}
                <Image src={ai} alt='' fill className='object-cover rounded-md'/>
            </div>
        </div>
        <div className='flex gap-12'>{/* content container */}
            <div className='flex-1'>{/* post container */}
                <div className='text-[20px] font-light mt-7'>{/* desc container */}
                    <h2 className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur a pariatur magni debitis,
                        vitae sed, obcaecati voluptate quae, esse nam saepe non minus adipisci! Nihil molestias placeat vitae. Ipsum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur a pariatur magni debitis,
                        vitae sed, obcaecati voluptate quae, esse nam saepe non minus adipisci! Nihil molestias placeat vitae. Ipsum.
                    </p>
                    <h2 className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur a pariatur magni debitis,
                        vitae sed, obcaecati voluptate quae, esse nam saepe non minus adipisci! Nihil molestias placeat vitae. Ipsum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur a pariatur magni debitis,
                        vitae sed, obcaecati voluptate quae, esse nam saepe non minus adipisci! Nihil molestias placeat vitae. Ipsum.
                    </p>
                    <h2 className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur a pariatur magni debitis,
                        vitae sed, obcaecati voluptate quae, esse nam saepe non minus adipisci! Nihil molestias placeat vitae. Ipsum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur a pariatur magni debitis,
                        vitae sed, obcaecati voluptate quae, esse nam saepe non minus adipisci! Nihil molestias placeat vitae. Ipsum.
                    </p>
                </div>
                <div>{/* comments container */}
                    <Comments />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePage