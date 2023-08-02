
import { Button,Container,Nav,Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>E-comm dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="me-auto">Home</Link>
            <Link to="/add" className="me-auto">Add Product</Link>
            <Link to="/update" className="me-auto">Update Product</Link>
          </Nav>
          <Nav className="lsbtn">
          <Button variant="outline-primary"  size="sm"><Link to="/login" className="me-auto">Login</Link></Button>  
          <Button variant="outline-success"><Link to="/signup" className="me-auto"> SignUp </Link></Button>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
