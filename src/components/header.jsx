import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const closeNavbar = () => setExpanded(false);

  const navigate = useNavigate();

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
                  loading="lazy"
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="navbar-nav"
                onClick={handleToggle}
                className="custom-navbar-toggle"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link
                    onClick={() => {
                      navigate("/");
                      closeNavbar();
                    }}
                    className="text-dark fw-bold px-4 nav-link"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      navigate("/about");
                      closeNavbar();
                    }}
                    className="text-dark fw-bold px-4 nav-link"
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      navigate("/events");
                      closeNavbar();
                    }}
                    className="text-dark fw-bold px-4 nav-link"
                  >
                    Events
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      navigate("/contact");
                      closeNavbar();
                    }}
                    className="text-dark fw-bold px-4 nav-link"
                  >
                    Contact
                  </Nav.Link>
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
