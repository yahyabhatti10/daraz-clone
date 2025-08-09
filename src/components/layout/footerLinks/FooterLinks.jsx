import { Col, Row } from 'react-bootstrap';
import AppStore from '../../../assets/downloadApp/appStore.png'
import GooglePlay from '../../../assets/downloadApp/googlePlay.png'
import AppGallery from '../../../assets/downloadApp/appGallery.png'
import LogoBG from '../../../assets/logoBG.png'
import './FooterLinks.css';

function FooterLinks() {
    return (
        <>
            <Col md={3}>
                <h6 className="footer-heading">Customer Care</h6>
                <div className="footer-links">
                    <a href="https://buyer-helpcenter.daraz.pk/s/page?spm=a2a0e.tm80335142.footer_top.1.4ce84076hJEYfn" className="footer-link">Help Center</a>
                    <a href="https://helpcenter.daraz.pk/page/knowledge?spm=a2a0e.tm80335142.footer_top.2.4ce84076hJEYfn&language=en&pageId=12&category=1000001086&scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335285_7708089&knowledge=1000006565" className="footer-link">How to Buy</a>
                    <a href="https://www.daraz.pk/daraz-corporate/?spm=a2a0e.tm80335142.footer_top.3.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335286_7708089" className="footer-link">Corporate & Bulk Purchasing</a>
                    <a href="https://www.daraz.pk/how-to-return/?spm=a2a0e.tm80335142.footer_top.4.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335287_7708089" className="footer-link">Returns & Refunds</a>
                    <a href="https://www.daraz.pk/daraz-shop/?spm=a2a0e.tm80335142.footer_top.5.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335288_7708089" className="footer-link">Daraz Shop</a>
                    <a href="https://www.daraz.pk/contact-us/?spm=a2a0e.tm80335142.footer_top.6.4ce84076hJEYfn&hybrid=1&scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335289_7708089" className="footer-link">Contact Us</a>
                    <a href="https://www.daraz.pk/purchase-protection/?spm=a2a0e.tm80335142.footer_top.7.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335290_7708089" className="footer-link">Purchase Protection</a>
                    <a href="https://www.daraz.pk/wow/i/pk/localisation/pick-up-points?spm=a2a0e.tm80335142.footer_top.8.4ce84076hJEYfn&hybrid=1&scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335291_7708089" className="footer-link">Daraz Pick up Points</a>
                </div>
            </Col>

            <Col md={3}>
                <h6 className="footer-heading">Daraz</h6>
                <div className="footer-links">
                    <a href="https://www.daraz.pk/about-us/?spm=a2a0e.tm80335142.footer_top.9.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6852930.OTHER_6502476577_7722624" className="footer-link">About Us</a>
                    <a href="https://pages.daraz.pk/wow/gcp/daraz/channel/pk/payment-promotions/digital-payments?spm=a2a0e.tm80335142.footer_top.10.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6852930.OTHER_6502476578_7722624" className="footer-link">Digital Payments</a>
                    <a href="https://www.daraz.pk/wow/gcp/daraz/channel/pk/daraz-donates/hp?spm=a2a0e.tm80335142.footer_top.11.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6852930.OTHER_6502476579_7722624" className="footer-link">Daraz Donates</a>
                    <a href="https://blog.daraz.pk/?spm=a2a0e.tm80335142.footer_top.12.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6852930.OTHER_6502476580_7722624" className="footer-link">Daraz Blog</a>
                    <a href="https://pages.daraz.pk/wow/gcp/route/daraz/pk/upr/router?spm=a2a0e.tm80335142.footer_top.13.4ce84076hJEYfn&hybrid=1&data_prefetch=true&prefetch_replace=1&at_iframe=1&wh_pid=/lazada/channel/pk/terms-and-condition/user-terms-and-conditions" className="footer-link">Terms & Conditions</a>
                    <a href="https://www.daraz.pk/privacy-agreement/?spm=a2a0e.tm80335142.footer_top.14.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6852930.OTHER_6502476582_7722624" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">NTN Number : 4012118-5</a>
                    <a href="#" className="footer-link">STRN Number : 1700401211818</a>
                    <a href="https://www.daraz.pk/mobile-apps/?spm=a2a0e.tm80335142.footer_top.15.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6852930.OTHER_6502476585_7722624" className="footer-link">Online Shopping App</a>
                    <a href="https://www.daraz.pk/dmart/?spm=a2a0e.tm80335142.footer_top.16.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6852930.OTHER_6502476586_7722624" className="footer-link">Online Grocery Shopping</a>
                    <a href="https://www.daraz.pk/daraz-exclusive-products/?spm=a2a0e.tm80335142.footer_top.17.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6852930.OTHER_6502476587_7722624" className="footer-link">Daraz Exclusive</a>
                    <a href="https://university.daraz.pk/?spm=a2a0e.tm80335142.footer_top.18.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6818663.OTHER_6053378281_7609922" className="footer-link">Daraz University</a>
                    <a href="https://www.daraz.pk/wow/gcp/daraz/channel/pk/landing-pages/sell-on-daraz?spm=a2a0e.tm80335142.footer_top.19.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-6818663.OTHER_6053378282_7609922" className="footer-link">Sell on Daraz</a>
                    <a href="https://www.daraz.pk/wow/i/pk/landingpage/daraz-affiliate-program?spm=a2a0e.tm80335142.footer_top.20.4ce84076hJEYfn&hybrid=1&scm=1003.4.icms-zebra-5029545-6818663.OTHER_6053378283_7609922" className="footer-link">Join Daraz Affiliate Program</a>
                </div>
            </Col>
            <Col md={3}>
                <Row>
                    <Col xs={4} style={{padding: "0px", display:"flex",justifyContent: "flex-end"}}>
                        <img src={LogoBG} style={{ height: "50px"}} alt="Daraz Logo" />
                    </Col>
                    <Col xs={8} style={{paddingLeft: "10px"}}>
                        <h4 style={{ color: "#f85606", fontSize: "20px", marginBottom: "4px"}}>
                            Happy Shopping
                        </h4>
                        <h5 style={{ color: "#1b275f", fontSize: "15px" }}>Download App</h5>
                    </Col>
                </Row>
            </Col>
            <Col md={3}>
                <a href="https://itunes.apple.com/app/id978058048?spm=a2a0e.tm80335142.footer_top.app_store.4ce84076hJEYfn&mt=8&scm=1003.4.icms-zebra-5029545-2832850.OTHER_5370750400_2485531"><img className="app-links-img" src={AppStore} alt="App Store Button" /></a>
                <a href="https://play.google.com/store/apps/details?spm=a2a0e.tm80335142.footer_top.android.4ce84076hJEYfn&id=com.daraz.android&scm=1003.4.icms-zebra-5029545-2832850.OTHER_5370750400_2485531"><img className="app-links-img" src={GooglePlay} alt="Google Play Button" /></a>
                <a href="https://appgallery.huawei.com/?spm=a2a0e.tm80335142.footer_top.huawei.4ce84076hJEYfn&scm=1003.4.icms-zebra-5029545-2832850.OTHER_5370750400_2485531#/app/C100948133"><img className="app-links-img" src={AppGallery} alt="App Gallery Button" /></a>
            </Col>
        </>
    );
}

export default FooterLinks;
