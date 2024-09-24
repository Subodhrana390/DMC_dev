import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="header custom-navbar">
      <div className="navigation">
        <div className="container ">
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={Logo}
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="/" className="text-white fw-bold px-4">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/about" className="text-white fw-bold px-4">
                    About
                  </Nav.Link>
                  <Nav.Link href="/gallery" className="text-white fw-bold px-4">
                    Gallery
                  </Nav.Link>
                  <Nav.Link href="/contact" className="text-white fw-bold px-4">
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
