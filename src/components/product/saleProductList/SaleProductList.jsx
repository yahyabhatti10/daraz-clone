import { Container, Row, Col, Button } from "react-bootstrap";
import './SaleProductList.css'; 
import data from "../../../data/data";
import ProductCard from "../productCard/ProductCard";


function SaleProductList(){

    const saleProducts = Object.values(data)
    .map(category => category.products.find(product => product.onSale))
    .filter(Boolean)
    .slice(0, 6);
    return (
        <>
           <Container className="sale-product-container">
              <Row className="sale-product-upper">
                <Col className="sale-product-upper-left">
                    <h6 className="sale-tag">On Sale Now</h6>
                </Col>
                <Col className="sale-product-upper-right">
                    <Button className="shop-btn ">SHOP ALL PRODUCTS</Button>
                </Col>
              </Row>
              <hr/>
              <Row className="sale-product-bottom">
                {saleProducts.map((product, index) => (
                  <Col style={{padding: "0px", margin: "0px",}}key={index} md={2} sm={4} xs={6}>
                    <ProductCard product={product} showSale={true}/>
                  </Col>
                ))}
              </Row>
           </Container>

        </>
    )
}
export default SaleProductList;