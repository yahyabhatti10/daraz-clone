import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <div className="top-bar text-end px-3 py-1 text-white">
      <Link to="" className="top-link me-3">SAVE MORE ON APP</Link>
      <Link to="" className="top-link me-3">SELL ON DARAZ</Link>
      <Link to="" className="top-link me-3">HELP & SUPPORT</Link>
      <Link to="" className="top-link me-3">LOGIN</Link>
      <Link to="" className="top-link me-3">SIGN UP</Link>
    </div>
  );
}

export default Navbar;
