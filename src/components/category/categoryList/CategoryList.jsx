import data from '../../../data/data';
import CategoryCard from '../categoryCard/CategoryCard';

function CategoryList() {
  return (
    <>
    <h4 style={{marginLeft:"10px"}}>Categories</h4>
    <div className="category-list" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {Object.values(data).map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
    </>
  );
} 

export default CategoryList;
