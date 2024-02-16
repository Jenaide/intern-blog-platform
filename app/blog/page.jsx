import React from 'react'
import CardList from '../components/CardList'

const BlogPage = ({ searchParams }) => {

  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div>{/* main container */}
        <h1 className='bg-slate-500 text-white py-1 text-center text-2xl'>{cat} Blog</h1>
        <div className='flex gap-12'>{/* content container */}
            <CardList page={page} cat={cat} />
        </div>
    </div>
  )
}

export default BlogPage