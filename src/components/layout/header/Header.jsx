import { Navbar, Nav, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from "../../../assets/logo.png"
import TopNavbar from '../navbar/Navbar';
import './Header.css'; 

function Header() {
  return (
    <>
    <TopNavbar/>
      <Navbar className="py-2 justify-content-center">
          <Navbar.Brand>
            <img
              src={logo}
              alt=""
              style={{ marginRight: '10px' }}
            />
          </Navbar.Brand>
      
          <Form className="d-flex w-50">
            <FormControl
                type="search"
                placeholder="Search in Daraz"
                className="border-0"
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
    </>
    
  );
}
export default Header;
