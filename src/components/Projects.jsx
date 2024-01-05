import {
  React,
  //  useState
} from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Projects.css";

// Photos
import skate from "./../assets/photos/ChrisSkate.JPG";
import grad from "./../assets/photos/PeterGrad.JPG";
import outdoor from "./../assets/photos/AshBday.jpg";
import costume from "./../assets/photos/SpiderDerick.jpeg";

// Media
import gym from "./../assets/photos/CFTH.jpg";
import blue from "./../assets/photos/JrBlueLight.jpg";
import bday from "./../assets/photos/JinyBday.JPG";
import island from "./../assets/photos/JayPR.JPG";

// Graphics
import ben from "./../assets/photos/BenBDay.jpeg";
import pro from "./../assets/photos/DavidHeadshot2.jpg";
import converse from "./../assets/photos/KirbyConverse2.jpg";
import baby from "./../assets/photos/NicoBabyShower.JPG";

// Other
import frank from "./../assets/photos/FrankGrad.jpg";
import weekend from "./../assets/photos/remake2.jpeg";
import lifting from "./../assets/photos/angeloLift.jpeg";
import lexus from "./../assets/photos/lexusDrive.jpeg";

const medias = [blue, gym, island, bday];
const photos = [skate, grad, outdoor, costume];
const graphics = [ben, pro, converse, baby];
const other = [frank,lexus, weekend, lifting  ];

const TypePics = (props) => {
  console.log("PROPS: ", props.artType);
  let typeList = [];
  let displayList = [];
  Object.keys(props.artType).forEach((value) => {
    typeList.push(props.artType[value]);
    displayList.push(
      <img
        alt="pic"
        key={value}
        className="animatePics expImages"
        src={props.artType[value]}
      />
    );
  });

  console.log(typeList, displayList);
  // typeList.map((kind) => {
  //   displayList.push(<img className="animatePics expImages" src={kind} />);
  // });
  return (
    <div className="images" id={props.typeStyle}>
      {displayList}
    </div>
  );
};

function Projects() {
  // let activeStyles = {
  //   media: true,
  //   photos: false,
  //   graphics: false,
  // };

  // let listType = medias;
  // let styleType = "media";

  // const [showList, setList] = useState(listType);
  // const [showStyle, setStyle] = useState(styleType);
  // const [showData, setShowData] = useState(activeStyles);

  // function contentPicker(type) {
  //   console.log(type);
  //   let active = {};
  //   let selected;
  //   let style = type;

  //   if (type === "media") {
  //     active.media = true;
  //     active.photos = false;
  //     active.graphics = false;
  //     selected = medias;
  //   } else if (type === "photos") {
  //     active.media = false;
  //     active.photos = true;
  //     active.graphics = false;
  //     selected = photos;
  //   } else if (type === "graphics") {
  //     active.media = false;
  //     active.photos = false;
  //     active.graphics = true;
  //     selected = graphics;
  //   }

  //   setList((showList) => ({
  //     ...showList,
  //     ...selected,
  //   }));

  //   setStyle((showStyle) => ({
  //     ...showStyle,
  //     ...style,
  //   }));

  //   setShowData((showData) => ({
  //     ...showData,
  //     ...active,
  //   }));
  // }
  return (
    <>
      <div id="mainContainer">
        <h1 id="titleText">Things I've Created</h1>
        <p className="sectionDesc">
          Alot of the media i've create is centered around photography/
          videography, but its not limited them. Here's a couple examples of
          concepts i've either created or collaborated with others to execute.
        </p>
        <div id="contentBox">
          {/* Make this into a carousel instead*/}
          <Carousel>
            <Carousel.Item>
              {/* Put thing here */}
              <TypePics typeStyle={"media"} artType={medias} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              {/* Put thing here */}
              <TypePics typeStyle={"graphics"} artType={graphics} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              {/* Put thing here */}
              <TypePics typeStyle={"photos"} artType={photos} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <TypePics typeStyle={"photos"} artType={other} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Projects;
