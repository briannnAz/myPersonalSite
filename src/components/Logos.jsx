import React from "react";
import { Col } from "react-bootstrap";
import "./Tools.css";
import ResumeBreakDown from "../resume.json";

const LogoGenerator = (props) => {
  let logoList = [];

  props.logos.map((logo) => {
    logoList.push(
      <Col className="toolContainer" sm="12" lg="4">
        <div className="toolTitle">
          <h2 className="titleText">{logo.name}</h2>
        </div>
        <div id="designTools" className="logos">
          <img src={logo.src} alt={logo.name} />
        </div>
      </Col>
    );

    console.log(logoList);
    return logo;
  });
  return logoList;
};

function Logos() {
  return (
    <div id="mainContainer">
      <div id="titleText">Logos Created</div>
      <p className="sectionDesc">
        Here are a couple designs I've came up with recently. Whether its a
        redesign or an original idea, it'll be handle.
      </p>
      <div className="container">
        <div className="textBox">
          <LogoGenerator logos={ResumeBreakDown.Logos} />
        </div>
      </div>
      {/* <div style={{
          margin:"auto",
          color:"white"
      }}> *Scroll to See all tools</div> */}
    </div>
  );
}

export default Logos;
