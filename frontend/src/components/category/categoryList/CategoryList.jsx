// import data from '../../../data/data';
import { useState , useEffect} from 'react';
import CategoryCard from '../categoryCard/CategoryCard';

function CategoryList() {

  const [data, setData] = useState([]);

  async function fetchCategories(){
    try
    {
      const response = await fetch("http://localhost:8000/categories");
      const data = await response.json()
      console.log("categories fetched", data)
      return data
    }
    catch(error)
    {
      console.log("Error", error)
    }
  }

  useEffect(()=>{
    async function getCategories(){
      const categories = await fetchCategories()
      if(!categories || !Array.isArray(categories))
      {
        console.error("Invalid categories data:", categories);
          return;
      }
      setData(categories)
      console.log('get categories in useeffect', categories)
    }
    getCategories()
  },[])

  
  return (
    <>
    {/* <div className="category-list" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {Object.entries.map(([catKey, category]) => (
        <CategoryCard key={catKey} categoryKey={catKey} category={category} />
      ))}
    </div> */}
    <div className="category-list" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {data.map((category) => (
        <CategoryCard key={category._id} categoryKey={category._id} category={category} />
      ))}
    </div>
    </>
  );
} 

export default CategoryList;
