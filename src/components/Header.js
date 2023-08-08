import { Button, Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CollapsibleExample() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user);
  function logout() {
    localStorage.clear();
    navigate("/signup");
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>E-comm dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/add" className="me-auto">
                  Add Product
                </Link>
                <Link to="/update" className="me-auto">
                  Update Product
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="me-auto">
                  Login
                </Link>
                <Link to="/signup" className="me-auto">
                  {" "}
                  SignUp{" "}
                </Link>
              </>
            )}
          </Nav>
          { (localStorage.getItem('user-info')) ?
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {user && user.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
: null
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
