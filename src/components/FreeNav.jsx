import React from "react";
import "./FreeNav.css";
// import { Row, Col } from "react-bootstrap";
// import myResume from "./../assets/resume.pdf";
// import LinkedinLogo from "./../assets/linkedin-logo.png";
// import ContactIcon from "./../assets/contact-us.png";
// import GithubLogo from "./../assets/github.png";
// import InstagramLogo from "./../assets/Instagram-Logo.png";
// import ThumbtackLogo from "./../assets/Thumbtack-Logo.png";
// import ResumeIcon from "./../assets/google-docs.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function FreeNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary link">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FreeNav;
