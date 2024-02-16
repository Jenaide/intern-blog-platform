import React from 'react';
import Pagenation from '../components/Pagenation';
import Card from './Card';


const getData = async (page, cat) =>{
  try {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('An error occurred while fetching posts');
    }
    return res.json();

  } catch (error) {
    throw new Error(`An error occurred: ${error.message}`);
  }
};

const CardList = async({ page, cat }) => {

  const { posts, count } = await getData(page, cat);

  const NUMBER_PER_PAGE = 2;

  const previous = NUMBER_PER_PAGE * (page - 1) > 0;
  const next = NUMBER_PER_PAGE * (page - 1) + NUMBER_PER_PAGE < count;
  
  return (
    <div className=''>{/* main container */}
      <h1 className='my-12 font-semibold text-2xl'>Recent Posts</h1>{/* title */}
      <div className='flex flex-wrap gap-8 m-12'>{/* Posts */}
        {posts?.map((item) => {
          <Card item={item} key={item._id} />
        })}
      </div>
      <Pagenation page={page} previous={previous} next={next} />
    </div>
  )
}

export default CardList;