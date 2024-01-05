import { React, useState } from "react";
import Tools from "../components/Tools";
// import Header from "../components/Header";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import { Row, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  let homeViews = {
    tools: true,
    experience: false,
    projects: false,
  };

  const [showData, setShowData] = useState(homeViews);

  function contentPicker(type) {
    console.log(type);
    let active = {};

    if (type === "tools") {
      active.tools = true;
      active.experience = false;
      active.projects = false;
    } else if (type === "experience") {
      active.tools = false;
      active.experience = true;
      active.projects = false;
    } else if (type === "projects") {
      active.tools = false;
      active.experience = false;
      active.projects = true;
    }
    setShowData((showData) => ({
      ...showData,
      ...active,
    }));
  }
  return (
    <div
      style={
        {
          // marginTop: "25px",
        }
      }
    >
      <>
        <Row id="titleRow">
          <Col lg="3">
            <div id="sectionSelect">
              <div
                onClick={(e) => contentPicker("tools", e)}
                className={`${
                  showData.tools ? "activeCompany" : "inactiveCompany"
                }`}
              >
                Skills
              </div>
            </div>
          </Col>
          <Col lg="5">
            <div id="sectionSelect">
              <div
                onClick={(e) => contentPicker("experience", e)}
                className={`${
                  showData.experience ? "activeCompany" : "inactiveCompany"
                }`}
              >
                Experience
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div id="sectionSelect">
              <div
                onClick={(e) => contentPicker("projects", e)}
                className={`${
                  showData.projects ? "activeCompany" : "inactiveCompany"
                }`}
              >
                Creative
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>{showData.tools && <Tools />}</div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div>{showData.experience && <Experience />}</div>
          </Col>
        </Row>

        <Row>
          <div>{showData.projects && <Projects />}</div>
        </Row>
      </>
    </div>
  );
}

export default Home;
