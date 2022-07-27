import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoGameControllerOutline } from "react-icons/io5";


function NavbarApp() {
  // API_Star_Wars
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="nav">
      <Container>
        <Navbar.Brand  href="#home"><IoGameControllerOutline/> Videojuegos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Capítulos</Nav.Link>
            <Nav.Link href="#link">Personajes</Nav.Link>
            <Nav.Link href="#link">Planetas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;