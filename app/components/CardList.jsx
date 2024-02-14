import React from 'react'
import Pagenation from '../components/Pagenation'
import Card from './Card'


const CardList = () => {
  return (
    <div className=''>{/* main container */}
      <h1 className='my-12 font-semibold text-2xl'>Recent Posts</h1>{/* title */}
      <div className='flex flex-wrap gap-8 m-12'>{/* Posts */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagenation />
    </div>
  )
}

export default CardList