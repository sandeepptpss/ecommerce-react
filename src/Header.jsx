import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
const user = JSON.parse(localStorage.getItem('user-info'));
const navigate = useNavigate();
const Logout = () => {
  localStorage.clear();
  navigate('/login');
};
const Profile = () => {
  navigate('/profile');
}
return (
  <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto nav_bar-wrapper">
          <Link to="/" >Home</Link>
          {
            localStorage.getItem('user-info') ?
              <>
                <Link to="/addproduct">Add Product</Link>
                <Link to="/collections">Shop</Link>
              </>
              :
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
          }
        </Nav>
        <div className="d-flex">
          <input
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <button variant="outline-success">Search</button>
        </div>
        {localStorage.getItem('user-info') ?
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item onClick={Profile}>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          : null}
      </Container>
    </Navbar>

  </div>
)
}
export default Header;