import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import myResume from "./../assets/resume.pdf";
import LinkedinLogo from "./../assets/linkedin-logo.png";
import ContactIcon from "./../assets/contact-us.png";
import GithubLogo from "./../assets/github.png";
import InstagramLogo from "./../assets/Instagram-Logo.png";
import ThumbtackLogo from "./../assets/Thumbtack-Logo.png";
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
        // backgroundColor: "black",
      }}
    >
      <div id="socialLinks">
        <Row lg={4}>
          <Col>
            <div className="link">
              <a href="https://www.instagram.com/jvstforviews/">
                <img
                  src={InstagramLogo}
                  className="Link-logo"
                  alt="instagram"
                />
              </a>
            </div>
          </Col>
          <Col>
            <div className="link">
              <a href="https://www.thumbtack.com/nj/union/web-design/brian-azubuike/service/494693246097989643?utm_medium=web&utm_source=txt&surface=sp&referrer_pk=494693245774422022">
                <img
                  src={ThumbtackLogo}
                  className="Link-logo"
                  alt="thumbtack"
                />
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
    </div>
  );
}

export default Footer;
