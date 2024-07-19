import React from "react";
import { Col } from "react-bootstrap";
import "./Tools.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import ResumeBreakDown from "../resume.json";

const ToolGenerator = (props) => {
  let toolList = [];

  props.tools.map((tool) => {
    toolList.push(<p className="toolItem">{tool}</p>);
    return tool;
  });
  return toolList;
};

function Tools() {
  return (
    <div id="mainContainer">
      {/* <h1>Tools</h1> */}

      <div id="titleText">Tools I Use</div>
      <p className="sectionDesc">
        When it comes to getting any job done, these are my tools of choice but,
        it doesnt stop here. I'm always willing to try something new.
      </p>
      <div className="container">
        <div className="textBox">
          <Col className="toolContainer" sm="12" lg="4">
            <div className="toolTitle">
              <FontAwesomeIcon icon={faPenRuler} />
              <h2 className="titleText">Design</h2>
            </div>

            <div id="designTools" className="tools">
              <ToolGenerator tools={ResumeBreakDown.Tools.designTools} />
            </div>
            <div></div>
            {/* <div id="designTools"></div> */}
          </Col>
          <Col className="toolContainer" sm="12" lg="4">
            <div className="toolTitle">
              <FontAwesomeIcon icon={faLaptopCode} />
              <h2 className="titleText">Develop</h2>
            </div>

            <div id="developerTools" className="tools">
              <ToolGenerator tools={ResumeBreakDown.Tools.developerTools} />
            </div>
            <div></div>
            {/* <div id="devTools"></div> */}
          </Col>
          <Col className="toolContainer" sm="12" lg="4">
            <div className="toolTitle">
              <FontAwesomeIcon icon={faPhotoFilm} />
              <h2 className="titleText">Media</h2>
            </div>

            <div id="mediaTools" className="tools">
              <ToolGenerator tools={ResumeBreakDown.Tools.mediaTools} />
            </div>
            <div></div>
            {/* <div id="multiTools"></div> */}
          </Col>
        </div>
      </div>
      {/* <div style={{
          margin:"auto",
          color:"white"
      }}> *Scroll to See all tools</div> */}
    </div>
  );
}

export default Tools;
