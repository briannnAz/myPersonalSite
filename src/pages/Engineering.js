import "./Main.css";
import Home from "./Home";
import Footer from "../components/Footer";
import { Row, Col } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import MePic from "./../assets/meCasual.png";

function Engineering() {
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
                  <strong>Designer</strong>.
                </h4>
                <h4 className="mainText">
                  <strong>Developer</strong>.
                </h4>
                <h4 className="mainText">
                  <strong>Creator</strong>.
                </h4>
                <Footer />
              </div>
            </Col>
            <Col lg="8" sm="12">
              <div className="homeContainer">
                <Home />
              </div>
            </Col>
          </Row>
        </header>
        <body></body>
      </div>
    </ThemeProvider>
  );
}

export default Engineering;
