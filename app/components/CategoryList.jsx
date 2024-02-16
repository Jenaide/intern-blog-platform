
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const getData = async () =>{
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  });

  if (!res.ok){
    throw new Error('An error occured while fetching categories')
  }

  return res.json();
};

const CategoryList = async () => {

  const data = await getData();

  return (
    <div>
      <h1 className='my-8 text-4xl font-semibold'>Categories</h1>{/* title */}
      <div className='flex flex-wrap justify-between gap-3'>{/* categories */}
          {data?.map(item => (
            <div className='flex capitalize font-semibold items-center p-2'>
                <Link 
                  href='/blog?cat=style' 
                  className={`flex items-center gap-3 rounded-lg w-[160px] h-[50px] p-3 ${
                  item.slug === 'fashion' ? 'bg-gradient-to-r from-pink-400 to-pink-700' :
                  item.slug === 'food' ? 'bg-gradient-to-r from-slate-400 to-slate-700' :
                  item.slug === 'code' ? 'bg-gradient-to-r from-purple-400 to-purple-700' :
                  item.slug === 'technology' ? 'bg-gradient-to-r from-sky-500 to-sky-700' :
                  item.slug === 'culture' ? 'bg-gradient-to-r from-fuchsia-400 to-fuchsia-700' :
                  ''
                  }`}
                  key={item._id}
                  >
                  {item.img && (
                    <Image 
                      src={item.img} 
                      alt='' 
                      width={32} 
                      height={32} 
                      className='rounded-[50%]' 
                    />
                  )}
                  {item.title}
                </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CategoryList