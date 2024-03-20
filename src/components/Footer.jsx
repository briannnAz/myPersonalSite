import React from "react";
import "./Footer.css";
import logo from "./../logo.svg";
import { Row, Col } from "react-bootstrap";
import myResume from "./../assets/resume.pdf";
import LinkedinLogo from "./../assets/linkedin-logo.png";
import ContactIcon from "./../assets/contact-us.png";
import GithubLogo from "./../assets/github.png";
import ResumeIcon from "./../assets/google-docs.png";

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
        paddingTop: "400px",
        paddingBottom: "25px",
        backgroundColor: "black",
      }}
    >
      <div id="socialLinks">
        <Row lg={4}>
          <Col>
            <div className="link">
              <a href="https://github.com/briannnAz">
                <img src={GithubLogo} className="Link-logo" alt="github" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="link">
              <a href="https://www.linkedin.com/in/brian-azubuike">
                <img src={LinkedinLogo} className="Link-logo" alt="linkedin" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="link">
              <a href={myResume} download={"BrianAzubuikeResume.pdf"}>
                <img src={ResumeIcon} className="Link-logo" alt="resume" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="link">
              <Mailto
                email="brian.azubuike@gmail.com"
                subject="Hello There Brian!"
                body="Hey I saw you're website and decided to reach out."
              >
                {" "}
                <img src={ContactIcon} className="Link-logo" alt="contact" />
              </Mailto>
            </div>
          </Col>
        </Row>
      </div>
      <div id="reactPower">
        <div>Powered By React</div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Footer;
