import { React, useState } from "react";
import Tools from "../components/Tools";
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
    <div>
      <>
        <Row id="titleRow">
          <Col lg="4">
            <div id="sectionSelect">
              <a
                onClick={(e) => contentPicker("tools", e)}
                href="#toolsSection"
                className={`${showData.tools ? "activeMenu" : "inactiveMenu"}`}
              >
                Skills
              </a>
            </div>
          </Col>
          <Col lg="4">
            <div id="sectionSelect">
              <a
                onClick={(e) => contentPicker("experience", e)}
                href="#experienceSection"
                className={`${
                  showData.experience ? "activeMenu" : "inactiveMenu"
                }`}
              >
                Work
              </a>
            </div>
          </Col>
          <Col lg="4">
            <div id="sectionSelect">
              <a
                onClick={(e) => contentPicker("projects", e)}
                href="#projectsSection"
                className={`${
                  showData.projects ? "activeMenu" : "inactiveMenu"
                }`}
              >
                Create
              </a>
            </div>
          </Col>
        </Row>
        <Row id="contentBox">
          <Row id="toolsSection">
            <Col>
              <Tools />
            </Col>
          </Row>

          <Row id="experienceSection">
            <Col>
              <Experience />
            </Col>
          </Row>

          <Row id="projectsSection">
            <Projects />
          </Row>
        </Row>
      </>
    </div>
  );
}

export default Home;
