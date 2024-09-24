import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="header custom-navbar">
      <div className="navigation">
        <div className="container">
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={Logo}
                  alt="Logo"
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Item>
                    <Link to="/" className="text-white fw-bold px-4 nav-link">
                      Home
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/about"
                      className="text-white fw-bold px-4 nav-link"
                    >
                      About
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/gallery"
                      className="text-white fw-bold px-4 nav-link"
                    >
                      Gallery
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/contact"
                      className="text-white fw-bold px-4 nav-link"
                    >
                      Contact
                    </Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
