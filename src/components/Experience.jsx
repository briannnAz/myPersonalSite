import { React, useState } from "react";
import ResumeBreakDown from '../resume.json';
import "./Experience.css";
import ADPLogo from './../assets/ADP-logo.png';
import CPLogo from './../assets/Colgate-Palmolive-Logo.png';
import PullupLogo from './../assets/pulluplogorounded.png';

let adp = ResumeBreakDown.Experience.ADP;
let colgate = ResumeBreakDown.Experience.Colgate;
let pullup = ResumeBreakDown.Experience.Pullup;

const ExperienceDesc = (props) => {
  let jobs = props.company;
  let displayList = [];

  jobs.map((kind) => {
    displayList.push(<li>{kind}</li>);
    return kind;
  });

  return <div id={props.company} className="expBox">{displayList}</div>;
};

function Experience() {
  let activeStyles = {
    adp: true,
    colgate: false,
    pullup: false,
  };

  const [showData, setShowData] = useState(activeStyles);

  function contentPicker(type) {
    console.log(type);
    let active = {};

    if (type === "adp") {
      active.adp = true;
      active.colgate = false;
      active.pullup = false;
      console.log(active.adp);

      setShowData((showData) => ({
        ...showData,
        ...active,
      }));
    } else if (type === "colgate") {
      active.adp = false;
      active.colgate = true;
      active.pullup = false;
      console.log(active.colgate);

      setShowData((showData) => ({
        ...showData,
        ...active,
      }));
    } else if (type === "pullup") {
      console.log("pullup");
      active.adp = false;
      active.colgate = false;
      active.pullup = true;
      console.log(active.pullup);

      setShowData((showData) => ({
        ...showData,
        ...active,
      }));
    }
  }
  return (
    <div id="mainContainer">
      {/* <h1>Experience</h1> */}
      
      <div>
        <div id="titleText">
          Places I've Worked:
        </div>
        <p className="sectionDesc">
        Throughout my professional development career, Ive worked in several different teams that varied in sizes, functions, and technologies. 
      </p>
        <div className="expContainer">
          <div className="container2">
            <div className="textBox">
              <div
                id="ADPwork"
                className={`experienceBox ${showData.adp ? "activeCompany" : "inactiveCompany"}`}
                onClick={(e) => contentPicker("adp", e)}
              >
                <img src={ADPLogo} alt="ADP" />
              </div>
            </div>
            <div className="textBox">
              <div
                id="ColgateWork"
                className={`experienceBox ${showData.colgate ? "activeCompany" : "inactiveCompany"}`}
                onClick={(e) => contentPicker("colgate", e)}
              >
                <img src={CPLogo} alt="Colgate" />
              </div>
            </div>
            <div className="textBox">
              <div
                id="PullupWork"
                className={`experienceBox ${showData.pullup ? "activeCompany" : "inactiveCompany"}`}
                onClick={(e) => contentPicker("pullup", e)}
              >
                <img src={PullupLogo} alt="Pullup" />
              </div>
            </div>
          </div>
          <div className="descContainer">
            <div className="expDetail">
              {showData.adp === true && <><h2 style={{color:"rgb(226, 6, 6)", fontWeight:"bold", borderBottom:"3px solid black"}}>ADP: Associate Application Developer</h2><ExperienceDesc company={adp} /></>}
              {showData.colgate === true && <><h2 style={{color:"rgb(6, 86, 185)", fontWeight:"bold", borderBottom:"3px solid black"}}>Colgate-Palmolive: Application Development Intern</h2><ExperienceDesc company={colgate} /></> }
              {showData.pullup === true && <><h2 style={{color:"rgb(6, 185, 182)", fontWeight:"bold", borderBottom:"3px solid black"}}>Pullup.io: Web Designer/ Media Content Creator</h2><ExperienceDesc company={pullup} /></>}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
