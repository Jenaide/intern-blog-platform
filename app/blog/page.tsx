import React from 'react'
import CardList from '../components/CardList'

const BlogPage = () => {
  return (
    <div>{/* main container */}
        <h1 className='bg-slate-500 text-white py-1 text-center text-2xl'>Style Blog</h1>
        <div className='flex gap-12'>{/* content container */}
            <CardList />
        </div>
    </div>
  )
}

export default BlogPage