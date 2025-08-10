import { Container, Row, Col } from "react-bootstrap";
import saleAd from "../../../assets/ads/saleAd.webp"

function SaleAd()
{
    return (
        <Container>
         <Row>
           <Col>
              <a href="https://pages.daraz.pk/wow/gcp/route/daraz/pk/upr/router?pha=true&wx_navbar_transparent=true&hybrid=1&data_prefetch=true&prefetch_replace=1&at_iframe=1&wh_pid=%2Flazada%2Fmegascenario%2Fpk%2F8-8-pk%2F8-8-sale&spm=a2a0e.tm80335142.countdownPC.d_0"><img 
              src={saleAd} 
              alt="Sale AD"
              style={{ width: "100%", height: "auto", display: "block" }}/>
              </a>
           </Col>
         </Row>
        </Container>
    )
}
export default SaleAd;