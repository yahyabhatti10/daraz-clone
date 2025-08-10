import FooterLinks from "../footerLinks/FooterLinks";
import PaymentMethods from "../paymentMethods/PaymentMethods";
import FooterContent from "../footerContent/FooterContent";
import FooterBottom from "../footerBottom/FooterBottom";
import { Container, Row } from 'react-bootstrap';

function Footer() {
    return (
        <footer style={{ backgroundColor: "#f4f4f6"}}>
            <Container>
                <Row style={{ backgroundColor: "#f4f4f6", padding: "40px 0" , borderRadius: "10px" }}>
                    <hr/>
                    <FooterLinks />
                </Row>
                <hr  />
                <Row style={{padding: "20px 0", backgroundColor: "#ffffff", borderRadius: "10px"}}>
                    <PaymentMethods />
                </Row>
                <hr />
                <Row>
                    <FooterContent />
                </Row>
                <hr/>
                <Row>
                    <FooterBottom />
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;