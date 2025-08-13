import AdSlider from "../components/ads/adSlider/AdSlider";
import DarazAppAd from "../components/ads/darazAppAd/DarazAppAd";
import { Container, Row, Col } from 'react-bootstrap';
import SaleAd from '../components/ads/saleAd/SaleAd'
import CategoryList from "../components/category/categoryList/CategoryList";
import ProductList from "../components/product/productList/ProductList";
import SaleProductList from "../components/product/saleProductList/SaleProductList";
import {useContext} from 'react'
import { ProductContext } from "../context/ProductContext";

function Home()
{

    // const [data, setData] = useState([]);

    const {products} = useContext(ProductContext)
    const saleProducts = products.filter(product => product.onSale);
      
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
            <Col style={{paddingTop:"20px", paddingBottom: "10px"}} md={12} >
              <h4 style={{marginLeft:"5px", fontSize: "20px", fontWeight:"400"}}>Flash Sale</h4>
              <SaleProductList showAll={false} saleProducts={saleProducts}/>
            </Col>
          </Row>
          <Row>
            <Col style={{paddingTop:"20px", paddingBottom: "10px"}} md={12}>
              <h4 style={{marginLeft:"10px" , fontSize: "20px", fontWeight:"400"}}>Categories</h4>
              <CategoryList />
            </Col>
          </Row>
          <Row>
            <Col style={{paddingTop:"20px", paddingLeft:"0px" ,paddingBottom: "5px"}} md={12}>
              <h4 style={{marginLeft:"30px", fontSize: "20px", fontWeight:"400"}}>Just for You</h4>
              <ProductList products={products}/>
            </Col>
          </Row>
        </Container>
        </div>
        </>
    )
}
export default Home;