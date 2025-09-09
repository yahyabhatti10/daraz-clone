import SaleProductList from '../components/product/saleProductList/SaleProductList';
import { Container , Row, Col} from 'react-bootstrap';
// import {useContext} from 'react'
// import { ProductContext } from "../context/ProductContext";
import { useSelector } from 'react-redux';

function  SaleProducts() {

//   const {products} = useContext(ProductContext)
const products = useSelector((state) => state.products.products);
const saleProducts = products.filter(product => product.onSale);
  return (
    <>
    <div style={{backgroundColor:"#f5f5f5"}}>
    <Container style={{backgroundColor: "#ffffffff", borderRadius: "0px", padding: "30px"}}>
        <Row>
            <Col>
                <h5>Sale Products</h5>
            </Col>
        </Row>
        {/* <hr /> */}
        <Row>
            <Col>
                <SaleProductList saleProducts={saleProducts}/>
            </Col>
        </Row>
    </Container>
    </div>
    </>
  );
}

export default SaleProducts;