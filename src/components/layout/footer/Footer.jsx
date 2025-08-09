import FooterLinks from "../footerLinks/FooterLinks";
import PaymentMethods from "../paymentMethods/PaymentMethods";
import FooterContent from "../footerContent/FooterContent";
import FooterBottom from "../footerBottom/FooterBottom";
import { Container, Row } from 'react-bootstrap';

function Footer() {
    const dividerStyle = {
        border: "none",
        height: "1px",
        backgroundColor: "#414141ff",
        margin: "20px 0"
    };
    return (
        <footer style={{ backgroundColor: "#f4f4f6"}}>
            <Container>
                <Row style={{ backgroundColor: "#f4f4f6", padding: "40px 0" , borderRadius: "10px" }}>
                    <hr style={dividerStyle} />
                    <FooterLinks />
                </Row>
                <hr style={dividerStyle} />
                <Row style={{padding: "20px 0", backgroundColor: "#ffffff", borderRadius: "10px"}}>
                    <PaymentMethods />
                </Row>
                <hr style={dividerStyle} />
                <Row>
                    <FooterContent />
                </Row>
                <hr style={dividerStyle} />
                <Row>
                    <FooterBottom />
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;