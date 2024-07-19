import { React, useState } from "react";
import Logos from "../components/Logos";
import Photography from "../components/Photography";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import WebWork from "../components/WebWork";

function CreativeHome() {
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
    <div className="contentSection">
      <>
        <Row id="titleRow" sm={0}>
          <Col lg="4" sm="12">
            <div id="sectionSelect">
              <a
                onClick={(e) => contentPicker("tools", e)}
                href="#toolsSection"
                className={`${showData.tools ? "activeMenu" : "inactiveMenu"}`}
              >
                Photo + Video
              </a>
            </div>
          </Col>
          <Col lg="4" sm="12">
            <div id="sectionSelect">
              <a
                onClick={(e) => contentPicker("experience", e)}
                href="#experienceSection"
                className={`${
                  showData.experience ? "activeMenu" : "inactiveMenu"
                }`}
              >
                Designs
              </a>
            </div>
          </Col>
          <Col lg="4" sm="12">
            <div id="sectionSelect">
              <a
                onClick={(e) => contentPicker("projects", e)}
                href="#projectsSection"
                className={`${
                  showData.projects ? "activeMenu" : "inactiveMenu"
                }`}
              >
                Web Work
              </a>
            </div>
          </Col>
        </Row>
        <Col id="contentBox" sm="12">
          <Row id="toolsSection">
            <Photography />
          </Row>

          <Row id="experienceSection">
            <Logos />
          </Row>

          <Row id="projectsSection">
            <WebWork />
          </Row>
        </Col>
      </>
    </div>
  );
}

export default CreativeHome;
