import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './Navbar.css'; 

function Navbar1() {
  return (
    <>
      <div className="top-bar">
        <Navbar>
        <Container>
          <Nav className="ms-auto">
            <Nav.Link className="top-link" href="https://play.google.com/store/apps/details?id=com.daraz.android">SAVE MORE ON APP</Nav.Link>
            <Nav.Link className="top-link" href="https://pages.daraz.pk/wow/gcp/route/daraz/pk/upr/router?spm=a2a0e.tm80335142.header.sell_on.35e34076VzydW6&hybrid=1&data_prefetch=true&prefetch_replace=1&at_iframe=1&wh_pid=/lazada/channel/pk/promotions/sell-on-daraz">SELL ON DARAZ</Nav.Link>
            <Nav.Link className="top-link" href="https://buyer-helpcenter.daraz.pk/s/page?spm=a2a0e.tm80335142.header.5.62aa4076YaH9VH">HELP & SUPPORT</Nav.Link>
            <Nav.Link className="top-link" as={Link} to="/signup">SIGN UP</Nav.Link>
            <Nav.Link className="top-link" as={Link} to="/login">LOGIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </>
  );
}

export default Navbar1;
