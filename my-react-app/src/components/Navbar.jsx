import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Navbarcomponent = () => {
    return (
        <div>

<Navbar bg="dark" variant="dark" expand="lg" sticky="top" data-aos="fade-up">
      <Container fluid>
        {/* Brand Logo */}
        <Navbar.Brand href="#home" className="fw-bold">Galvanx Technology</Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-content" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-content" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link href="home" active>Home</Nav.Link>
            <Nav.Link href="aboutus" active>About Us</Nav.Link>
            <Nav.Link href="services" active>Services</Nav.Link>
            <Nav.Link href="courses" active>Courses</Nav.Link>
            <Nav.Link href="contact" active>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        </div>
    )
}

export default Navbarcomponent
