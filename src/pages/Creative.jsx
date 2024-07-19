import "./Main.css";
import CreativeHome from "./CreativeHome";
import Footer from "../components/FreeFooter";
import { Row, Col } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";
// import MePic from "./../assets/meCasual.png";

function Creative() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className="App">
        <header className="App-header">
          <Row>
            <Col lg="4" sm="12">
              <div id="headerText">
                <Row id="welcomeText">
                  <h3>Hi I'm </h3>
                  <h1>
                    <bold>Brian Azubuike.</bold>
                  </h1>
                </Row>

                <h4 className="mainText">
                  <strong>Freelancer Content Creator</strong>
                </h4>
                <h6 className="mainText">Photography.</h6>
                <h6 className="mainText">Video Production.</h6>
                <h6 className="mainText">Web Design.</h6>
                <Footer />
              </div>
            </Col>
            <Col lg="8" sm="12">
              <div className="homeContainer">
                <CreativeHome />
              </div>
            </Col>
          </Row>
        </header>
        <body></body>
      </div>
    </ThemeProvider>
  );
}

export default Creative;
