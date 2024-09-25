import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/Logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false); // State to track the navbar expansion

  const handleToggle = () => setExpanded(!expanded); // Toggle expanded state

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
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="navbar-nav"
                onClick={handleToggle}
                className="custom-navbar-toggle"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Item>
                    <a
                      onClick={() => {
                        navigate("/");
                        closeNavbar();
                      }}
                      className="text-dark fw-bold px-4 nav-link"
                    >
                      Home
                    </a>
                  </Nav.Item>
                  <Nav.Item>
                    <a
                      onClick={() => {
                        navigate("/about");
                        closeNavbar();
                      }}
                      className="text-dark fw-bold px-4 nav-link"
                    >
                      About
                    </a>
                  </Nav.Item>
                  <Nav.Item>
                    <a
                      onClick={() => {
                        navigate("/events");
                        closeNavbar();
                      }}
                      className="text-dark fw-bold px-4 nav-link"
                    >
                      Events
                    </a>
                  </Nav.Item>
                  <Nav.Item>
                    <a
                      onClick={() => {
                        navigate("/contact");
                        closeNavbar();
                      }}
                      className="text-dark fw-bold px-4 nav-link"
                    >
                      Contact
                    </a>
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
