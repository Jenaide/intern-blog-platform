import Featured from './components/Featured';
import CategoryList from './components/CategoryList';
import CardList from './components/CardList';

export default function Home ({ searchParams }) {

  const { page } = searchParams || 1;

  return (
    <div className=''>{/* main container */}
      <Featured />
      <CategoryList />
      <div className='flex gap-14'>{/* main content */}
        <CardList page={page}/>
      </div>
    </div>
  );
}
