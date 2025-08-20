// import data from '../../../data/data';
import { useEffect } from 'react'
import CategoryCard from '../categoryCard/CategoryCard'
import {
  selectAllCategories,
  getCategoriesStatus,
} from '../../../store/categories/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import fetchCategories from '../../../store/categories/categoryThunk'

function CategoryList() {
  // const [data, setData] = useState([])

  // async function fetchCategories() {
  //   try {
  //     const response = await fetch('https://daraz-clone-s79b.onrender.com/categories')
  //     const data = await response.json()
  //     console.log('categories fetched', data)
  //     return data
  //   } catch (error) {
  //     console.log('Error', error)
  //   }
  // }

  // useEffect(() => {
  //   async function getCategories() {
  //     const categories = await fetchCategories()
  //     if (!categories || !Array.isArray(categories)) {
  //       console.error('Invalid categories data:', categories)
  //       return
  //     }
  //     setData(categories)
  //     console.log('get categories in useeffect', categories)
  //   }
  //   getCategories()
  // }, [])

  const dispatch = useDispatch()
  const categories = useSelector(selectAllCategories)
  const status = useSelector(getCategoriesStatus)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories())
    }
  }, [status, dispatch])

  return (
    <>
      {/* <div className="category-list" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {Object.entries.map(([catKey, category]) => (
        <CategoryCard key={catKey} categoryKey={catKey} category={category} />
      ))}
    </div> */}
      <div
        className="category-list"
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            categoryKey={category._id}
            category={category}
          />
        ))}
      </div>
    </>
  )
}

export default CategoryList
