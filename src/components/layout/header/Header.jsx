import { Navbar, Nav, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from "../../../assets/logo/logo.png"
import TopNavbar from '../navbar/Navbar';
import './Header.css'; 
import {Link} from 'react-router-dom';

function Header() {

  const navStyle = {
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 2050,

  }
  return (
    <>
    <div style={navStyle}>
      <TopNavbar/>
      <Navbar className="py-2 justify-content-center">
          <Navbar.Brand>
            <Link to="/"><img
              src={logo}
              alt=""
              
              style={{ marginRight: '10px' }}
            /></Link>
          </Navbar.Brand>
      
          <Form style={{display: 'flex', width: '50%'}}>
            <FormControl
                type="search"
                placeholder="Search in Daraz"
                style={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  borderTopLeftRadius: "3px",
                  borderBottomLeftRadius: "3px",
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                }}
          />
          <Button
            variant="light"
            style={{
              backgroundColor: "#ffe1d2",
              border: "none",
              borderTopRightRadius: "3px",
              borderBottomRightRadius: "3px",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
          >
            <FaSearch style={{ color: "#f85606" }} />
          </Button>
          </Form>
          <Button variant="link" className="text-white fs-5">
            <FaShoppingCart/>
          </Button>
      </Navbar> 
      </div>
      <div style={{height:"102px"}}></div>
    </>
    
  );
}
export default Header;
