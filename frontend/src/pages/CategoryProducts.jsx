import { useParams } from "react-router-dom";
import ProductList from "../components/product/productList/ProductList";
// import data from "../data/data";
import {Container, Row, Col} from "react-bootstrap";
import { useState, useEffect } from "react";


function CategoryProducts() {

  const { categoryKey } = useParams();

    const [data, setData] = useState(null);
  
    async function fetchCategoryProducts(){
      try
      {
        const response = await fetch(`https://daraz-clone-s79b.onrender.com//products/${categoryKey}`);
        const data = await response.json()
        console.log("products of category fetched", data)
        return data
      }
      catch(error)
      {
        console.log("Error", error)
      }
    }
  
    useEffect(()=>{
      async function getCategoryProducts(){
        const categoryProducts = await fetchCategoryProducts()
        // if(!categoryProducts || !Array.isArray(categoryProducts))
        // {
        //   console.error("Invalid category products data:", categoryProducts);
        //   setData({ category: "Category not found", products: [] });
        //     return;
        // }
        console.log()
        setData(categoryProducts)
        console.log('get category products in useeffect', categoryProducts)
      }
      getCategoryProducts()

    },[categoryKey])

  // const category = data[categoryKey]
  // const categoryProducts = data[categoryKey].products
  // console.log(categoryKey)
  // console.log(category)
  // console.log(categoryProducts)

  return (
    <div>
      {!data ? (
        <h2>Category not found</h2>
      ) : (
        <>
          
          <Container style={{padding: '0px'}}>
            <Row>
              <Col>
                <h2 style={{ margin: '20px 0', color: "#3f3f3fff"}}>{data.category}</h2>
              </Col>
              <hr/>
            </Row>
            <Row>
              <Col>
                <ProductList products={data.products || []} />
              </Col>
            </Row>
      
          </Container>
          
        </>
      )}
    </div>
  );
} 
export default CategoryProducts;  