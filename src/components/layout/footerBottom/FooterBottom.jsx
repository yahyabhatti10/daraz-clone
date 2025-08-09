import { Row, Col } from 'react-bootstrap';
import Facebook from "../../../assets/socialIcons/facebook.png"
import Instagram from "../../../assets/socialIcons/instagram.png"
import Youtube from "../../../assets/socialIcons/youtube.png"
import Twitter from "../../../assets/socialIcons/twitter.png"
import CountryIcon from '../../elements/countryIcon';
import Pakistan from "../../../assets/flags/pakistan.png";
import Bangladesh from "../../../assets/flags/bangladesh.png";
import Srilanka from "../../../assets/flags/srilanka.png";
import Myanmar from "../../../assets/flags/myanmar.png";
import Nepal from "../../../assets/flags/nepal.png";

function FooterBottom() {
    const currentYear = new Date().getFullYear();

    return (
        <Row style={{ backgroundColor:"#ffffff", borderRadius: '10px' ,paddingBottom: "20px", marginBottom:"30px"}}className="align-items-center">
            <Col xs={12} md={6}>
                <h6 style={{paddingBottom:"15px"}}>Daraz International</h6>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <CountryIcon 
                        countryName="Pakistan" 
                        flagImage={Pakistan}
                    />
                    <CountryIcon 
                        countryName="Bangladesh" 
                        flagImage={Bangladesh}
                    />
                    <CountryIcon 
                        countryName="SriLanka" 
                        flagImage={Srilanka}
                    />
                    <CountryIcon 
                        countryName="Myanmar" 
                        flagImage={Myanmar}
                    />
                    <CountryIcon 
                        countryName="Nepal" 
                        flagImage={Nepal}
                    />
                </div>
            </Col>
            <Col xs={12} md={4}> 
                <h6 style={{marginTop: "15px"}}>Follow Us</h6>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <img src={Facebook} alt="Facebook" style={{width:"50px", height:"50px"}} />
                    <img src={Twitter} alt="Twitter" style={{width:"38px", height:"38px"}} />
                    <img src={Instagram} alt="Instagram" style={{width:"60px", height:"65px"}} />
                    <img src={Youtube} alt="YouTube" style={{width:"45px", height:"45px"}} />
                </div>
            </Col>
            <Col xs={12} md={2}>
                <h6>© Daraz {currentYear}</h6>
            </Col>
        </Row>
    );
}

export default FooterBottom;
