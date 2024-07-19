import { React, useState } from "react";
import ResumeBreakDown from "../resume.json";
import "./Experience.css";

function WebWork() {
  let activeStyles = {
    neverunblessed: true,
    godrip: false,
    pullup: false,
  };

  const [showData, setShowData] = useState(activeStyles);

  function contentPicker(type) {
    console.log(type);
    let active = {};

    if (type === "neverunblessed") {
      active.neverunblessed = true;
      active.godrip = false;
      active.pullup = false;

      setShowData((showData) => ({
        ...showData,
        ...active,
      }));
    } else if (type === "godrip") {
      active.neverunblessed = false;
      active.godrip = true;
      active.pullup = false;

      setShowData((showData) => ({
        ...showData,
        ...active,
      }));
    } else if (type === "pullup") {
      active.neverunblessed = false;
      active.godrip = false;
      active.pullup = true;

      setShowData((showData) => ({
        ...showData,
        ...active,
      }));
    }
  }

  const ExperienceDesc = (props) => {
    let jobsData = props.jobsData;
    let displayList = [];

    jobsData.map((kind) => {
      displayList.push(
        <>
          {showData[kind.name] === true && (
            <>
              <h2
                style={{
                  color: "rgb(226, 6, 6)",
                  fontWeight: "bold",
                  borderBottom: "3px solid black",
                }}
              >
                {kind.title}
              </h2>
              <p>{kind.description}</p>
              <p>{kind?.note}</p>
            </>
          )}
        </>
      );
      return kind;
    });

    return <div className="expDetail">{displayList}</div>;
  };

  const ExperienceTitles = (props) => {
    let sites = props.webWork;
    let displayList = [];

    sites.map((kind) => {
      displayList.push(
        <div className="textBox">
          <div
            className={`experienceBox ${kind.name}Image ${
              showData[kind.name] ? "activeCompany" : "inactiveCompany"
            }`}
            onClick={(e) => contentPicker(`${kind.name}`, e)}
          >
            <img src={kind.src} alt={kind.name} />
          </div>
        </div>
      );
      return kind;
    });

    return <div className="container2">{displayList}</div>;
  };

  return (
    <div id="mainContainer">
      <div>
        <div id="titleText">Places I've Worked:</div>
        <p className="sectionDesc">
          Throughout my professional development career, Ive worked with a
          number of different kinds of companies with differing needs.
        </p>
        <div className="expContainer">
          <ExperienceTitles webWork={ResumeBreakDown.WebWork} />
          <div className="descContainer">
            <ExperienceDesc jobsData={ResumeBreakDown.WebWork} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebWork;
