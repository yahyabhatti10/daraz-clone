import data from '../../../data/data';
import CategoryCard from '../categoryCard/CategoryCard';

function CategoryList() {

  return (
    <>
    <div className="category-list" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {Object.entries(data).map(([catKey, category]) => (
        <CategoryCard key={catKey} categoryKey={catKey} category={category} />
      ))}
    </div>
    </>
  );
} 

export default CategoryList;
