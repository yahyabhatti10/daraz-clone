import { useParams } from "react-router-dom";
import ProductList from "../components/product/productList/ProductList";
import data from "../data/data";
import {Container, Row, Col} from "react-bootstrap";


function CategoryProducts() {

  const { categoryKey } = useParams();
  const category = data[categoryKey]
  const categoryProducts = data[categoryKey].products
  // console.log(categoryKey)
  // console.log(category)
  // console.log(categoryProducts)

  return (
    <div>
      {!category ? (
        <h2>Category not found</h2>
      ) : (
        <>
          
          <Container style={{padding: '0px'}}>
            <Row>
              <Col>
                <h2 style={{ margin: '20px 0', color: "#3f3f3fff"}}>{category.name}</h2>
              </Col>
              <hr/>
            </Row>
            <Row>
              <Col>
                <ProductList products={categoryProducts} />
              </Col>
            </Row>
      
          </Container>
          
        </>
      )}
    </div>
  );
} 
export default CategoryProducts;  