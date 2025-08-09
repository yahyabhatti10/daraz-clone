import AdSlider from "../components/ads/adSlider/AdSlider";
import DarazAppAd from "../components/ads/darazAppAd/DarazAppAd";
import { Container, Row, Col } from 'react-bootstrap';
import SaleAd from '../components/ads/saleAd/SaleAd'
import CategoryList from "../components/category/categoryList/CategoryList";
import ProductList from "../components/product/productList/ProductList";

function Home()
{
    return(
        <>
        <div style={{backgroundColor:"#f5f5f5"}}>
        <Container style={{alignItems:"center"}}>
          <Row>
            <Col style={{height: '100%'}}  md={10} lg={9}>
              <AdSlider />
            </Col>
            <Col style={{height: '100%'}} md={2} lg={3} className="d-none d-md-block">
              <DarazAppAd />
            </Col>
          </Row>
          <Row>
            <Col style={{paddingTop:"10px", paddingBottom: "10px"}} md={12} >
              <SaleAd/>
            </Col>
          </Row>
          <Row>
            <Col style={{paddingTop:"10px", paddingBottom: "10px"}} md={12}>
              <CategoryList />
            </Col>
          </Row>
          <Row>
            <Col style={{paddingTop:"10px", paddingBottom: "10px"}} md={12}>
              <ProductList />
            </Col>
          </Row>
        </Container>
        </div>
        </>
    )
}
export default Home;