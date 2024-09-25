import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/Logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false); // State to track the navbar expansion

  const handleToggle = () => setExpanded(!expanded); // Toggle expanded state

  const closeNavbar = () => setExpanded(false); // Function to close the navbar

  return (
    <header className="header custom-navbar">
      <div className="navigation">
        <div className="container">
          <Navbar expand="lg" expanded={expanded}>
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={Logo}
                  alt="Logo"
                  width={150}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={handleToggle}
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Item>
                    <Link
                      to="/"
                      className="text-dark fw-bold px-4 nav-link"
                      onClick={closeNavbar} // Close navbar on click
                    >
                      Home
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/about"
                      className="text-dark fw-bold px-4 nav-link"
                      onClick={closeNavbar} // Close navbar on click
                    >
                      About
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/gallery"
                      className="text-dark fw-bold px-4 nav-link"
                      onClick={closeNavbar} // Close navbar on click
                    >
                      Gallery
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/contact"
                      className="text-dark fw-bold px-4 nav-link"
                      onClick={closeNavbar} // Close navbar on click
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
