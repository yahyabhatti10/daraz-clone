import SaleProductList from '../components/product/saleProductList/SaleProductList';
import { Container , Row, Col} from 'react-bootstrap';

function  SaleProducts() {
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
                <SaleProductList/>
            </Col>
        </Row>
    </Container>
    </div>
    </>
  );
}

export default SaleProducts;