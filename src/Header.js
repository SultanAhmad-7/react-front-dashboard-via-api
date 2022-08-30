
import {Nav,Navbar,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header(){
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
          <Nav className="me-auto">
            <Link to="/addproduct">Add Products</Link>
            <Link to="/updateproduct">Update Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Nav>
        
      </Container>
    </Navbar>
  );
}

export default Header;