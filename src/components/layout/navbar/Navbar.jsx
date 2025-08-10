import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'; 

function Navbar1() {
  return (
    <>
      <div className="top-bar">
        <Navbar>
        <Container>
          <Nav className="ms-auto">
            <Nav.Link className="top-link" href="#">SAVE MORE ON APP</Nav.Link>
            <Nav.Link className="top-link" href="#">SELL ON DARAZ</Nav.Link>
            <Nav.Link className="top-link" href="#">HELP & SUPPORT</Nav.Link>
            <Nav.Link className="top-link" href="#">SIGN UP</Nav.Link>
            <Nav.Link className="top-link" href="#">LOGIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </>
  );
}

export default Navbar1;
