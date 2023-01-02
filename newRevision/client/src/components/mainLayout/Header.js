import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Finance Track</Navbar.Brand>
          <Nav className="ms-auto ">
            <Link className="nav-link" to="/">
              Login
            </Link>
            <Link className="nav-link" to="">
              Register
            </Link>
            <Link className="nav-link" to="">
              Dashboard
            </Link>
            <Link className="nav-link" to="">
              Logout
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
