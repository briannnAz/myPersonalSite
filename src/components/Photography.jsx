import {
  React,
  //  useState
} from "react";
import "./Photography.css";

const images = require.context("../../public/assets/photos", true);
const imageList = images
  .keys()
  .map((image) => image.replace("./", "/assets/photos/"));

const SitePics = () => {
  let typeList = [];
  let displayList = [];

  Object.keys(imageList).forEach((value) => {
    console.log(`${imageList[value]}`);
    typeList.push(imageList[value]);
    displayList.push(
      <img
        alt="pic"
        key={value}
        className="animatePics expImages"
        src={imageList[value]}
      />
    );
  });

  return (
    <div className="images" id={"photos"}>
      {displayList}
    </div>
  );
};

function Photography() {
  return (
    <>
      <div id="mainContainer">
        <h1 id="titleText">Things I've Created</h1>
        <p className="sectionDesc">
          Alot of the media i've create is centered around photography/
          videography, but its not limited them. Here's a couple examples of
          concepts i've either created or collaborated with others to execute.
        </p>
        <div id="photographyBox">
          <SitePics />
        </div>
      </div>
    </>
  );
}

export default Photography;
