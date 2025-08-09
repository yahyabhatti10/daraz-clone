import { Container, Row, Col } from "react-bootstrap";
import saleAd from "../../../assets/ads/saleAd.webp"

function SaleAd()
{
    return (
        <Container>
         <Row>
           <Col>
              <img 
              src={saleAd} 
              alt="Sale AD"
              style={{ width: "100%", height: "auto", display: "block" }}/>
           </Col>
         </Row>
        </Container>
    )
}
export default SaleAd;