import Featured from '../app/components/Featured';
import CategoryList from '../app/components/CategoryList';
import CardList from '../app/components/CardList';

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div>
        <CardList />
      </div>
    </div>
  );
}
