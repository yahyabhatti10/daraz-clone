import { Container, Row, Col, Button } from "react-bootstrap";
import './SaleProductList.css'; 
import data from "../../../data/data";
import ProductCard from "../productCard/ProductCard";
import { useNavigate } from "react-router-dom";


function SaleProductList({showAll=true}){


    const navigate = useNavigate();

    let saleProducts = Object.values(data)
    .map(category => category.products.find(product => product.onSale))
    .filter(Boolean)
    if(!showAll ){
      saleProducts = saleProducts.slice(0, 6);
    }


    function handleShopAll() {
        navigate("/sale-products");
    }
    return (
        <>
           <Container className="sale-product-container">
              {!showAll && (<Row className="sale-product-upper">
                <Col className="sale-product-upper-left">
                    <h6 className="sale-tag">On Sale Now</h6>
                </Col>
                <Col className="sale-product-upper-right">
                    <Button onClick={()=>handleShopAll()}className="shop-btn ">SHOP ALL PRODUCTS</Button>
                </Col>
              </Row>)
}
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