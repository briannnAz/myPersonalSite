import React from "react";
import "./Footer.css";
import logo from "./../logo.svg";
import { Row, Col } from "react-bootstrap";
import myResume from "./../assets/resume.pdf";

function Footer() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <div
      style={{
        maxHeight: "fit-content",
        color: "white",
        width: "100%",
        margin: "auto",
        paddingTop: "25px",
        backgroundColor: "black",
      }}
    >
      <div> - Getting Better One Step At A Time - </div>
      <div id="socialLinks">
        <Row>
          <Col lg="3" sm="12">
            <div className="link">
              <a href="https://bitbucket.org/briannnaz/mypersonalsite/src/develop/">
                Bitbucket
              </a>
            </div>
          </Col>
          <Col lg="3" sm="12">
            <div className="link">
              <a href="https://www.linkedin.com/in/brian-azubuike">Linkedin</a>
            </div>
          </Col>
          <Col lg="3" sm="12">
            <div className="link">
              <a href={myResume} download={"BrianAzubuikeResume.pdf"}>
                Resume
              </a>
            </div>
          </Col>
          <Col lg="3" sm="12">
            <div className="link">
              <Mailto
                email="brian.azubuike@gmail.com"
                subject="Hello There Brian!"
                body="Hey I saw you're website and decided to reach out."
              >
                {" "}
                Contact
              </Mailto>
            </div>
          </Col>
        </Row>
      </div>
      <div id="reactPower">
        <div>Powered By React</div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="footerText">&#169;2022 Copyright</div>
    </div>
  );
}

export default Footer;
