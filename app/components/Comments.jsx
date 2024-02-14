import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import john from '../../public/john doe.jpg'

const Comments = () => {

    const status = 'authenticated';
    return (
        <>
            <div className='mt-12'>{/* main container */}
                <h1 className='text-stone-600 mb-3 text-xl'>Comments</h1>{/* title */}
                {status === 'authenticated' ? (
                <div className='flex flex-col items-center justify-between gap-7'>
                    <textarea placeholder='comment here....' className='p-[20px] w-[100%] bg-stone-200 rounded-lg' />
                    <button className='font-semibold bg-sky-700 p-2 px-4 rounded-lg w-max text-white hover:bg-sky-900 transition'>submit</button>
                </div>
                ) : (
                    <Link href='/login'>Login to write a comment</Link>
                )}
            </div>
            <div className='mt-12'>{/* comments */}
                <div className='mb-12'>{/* single comment */}
                    <div className='flex items-center gap-5 mb-5'>{/* user */}
                        <Image src={john} alt='' width={50} height={50} className='object-cover rounded-[50%]' />
                        <div className='flex flex-col gap-1 text-slate-600'>
                            <span className='text-[20px] font-medium'>John Doe</span>
                            <span className='text-sm'>14.02.2024</span>
                        </div>
                    </div>
                    <p className='text-[18px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum voluptatem molestiae blanditiis nam accusantium 
                        dignissimos eaque, beatae harum quo expedita temporibus dolorum perferendis officiis officia praesentium quibusdam sunt debitis?
                    </p>
                </div>
            </div>
            <div className='mt-12'>{/* comments */}
                <div className='mb-12'>{/* single comment */}
                    <div className='flex items-center gap-5 mb-5'>{/* user */}
                        <Image src={john} alt='' width={50} height={50} className='object-cover rounded-[50%]' />
                        <div className='flex flex-col gap-1 text-slate-600'>
                            <span className='text-[20px] font-medium'>John Doe</span>
                            <span className='text-sm'>14.02.2024</span>
                        </div>
                    </div>
                    <p className='text-[18px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum voluptatem molestiae blanditiis nam accusantium 
                        dignissimos eaque, beatae harum quo expedita temporibus dolorum perferendis officiis officia praesentium quibusdam sunt debitis?
                    </p>
                </div>
            </div>
            <div className='mt-12'>{/* comments */}
                <div className='mb-12'>{/* single comment */}
                    <div className='flex items-center gap-5 mb-5'>{/* user */}
                        <Image src={john} alt='' width={50} height={50} className='object-cover rounded-[50%]' />
                        <div className='flex flex-col gap-1 text-slate-600'>
                            <span className='text-[20px] font-medium'>John Doe</span>
                            <span className='text-sm'>14.02.2024</span>
                        </div>
                    </div>
                    <p className='text-[18px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum voluptatem molestiae blanditiis nam accusantium 
                        dignissimos eaque, beatae harum quo expedita temporibus dolorum perferendis officiis officia praesentium quibusdam sunt debitis?
                    </p>
                </div>
            </div>
        </>
    );
};

export default Comments