import React from "react";
import "./Header.css";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import myResume from "./../assets/resume.pdf";

function Header() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {/* Nav Test */}
      <Navbar bg="light" expand={false} fixed="top">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div id="socialLinkss">
                  <div className="links">
                    <a href="https://bitbucket.org/briannnaz/mypersonalsite/src/develop/">
                      Bitbucket
                    </a>
                  </div>
                  <div className="links">
                    <a href="https://www.linkedin.com/in/brian-azubuike">
                      Linkedin
                    </a>
                  </div>
                  <div className="links">
                    <a
                      href={myResume}
                      target={"_blank"}
                      download={"BrianAzubuikeResume.pdf"}
                      rel="noreferrer"
                    >
                      My Resume
                    </a>
                  </div>
                  <div className="links">
                    <Mailto
                      email="brian.azubuike@gmail.com"
                      subject="Hello There Brian!"
                      body="Hey I saw you're website and decided to reach out."
                    >
                      {" "}
                      Contact Me
                    </Mailto>
                  </div>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
