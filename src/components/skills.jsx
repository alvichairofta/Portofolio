import React, { useState, useEffect } from "react";
import Figma from "../Assets/figma.png";
import Canva from "../Assets/canva.png";
import Html from "../Assets/htmk.png";
import Css from "../Assets/css.png";
import Js from "../Assets/js.png";
import Rct from "../Assets/react.png";
import "./skills.css";

export default function Skills() {
  const [selectedImage] = useState(null);

  return (
    <div className="Skill-container" id="skills">
      <div className="Skills">
        <h4>Technologies</h4>
        <h1>Tools & Skills</h1>
      </div>
      <div className="Tools">
        <img
          className={
            selectedImage === "Figma" ? "Figma clicked show" : "Figma"
          }
          src={Figma}
          data-image="Figma"
          // onClick={handleImageClick}
        />
        <img
          className={
            selectedImage === "Canva" ? "Canva clicked show" : "Canva"
          }
          src={Canva}
          data-image="Canva"
          // onClick={handleImageClick}
        />
        <img
          className={selectedImage === "Html" ? "Html clicked show" : "Html"}
          src={Html}
          data-image="Html"
          // onClick={handleImageClick}
        />
        <img
          className={selectedImage === "Css" ? "Css clicked show" : "Css"}
          src={Css}
          data-image="Css"
          // onClick={handleImageClick}
        />
        <img
          className={selectedImage === "Js" ? "Js clicked show" : "Js"}
          src={Js}
          data-image="Js"
          // onClick={handleImageClick}
        />
        <img
          className={selectedImage === "Rct" ? "Rct clicked show" : "Rct"}
          src={Rct}
          data-image="Rct"
          // onClick={handleImageClick}
        />
      </div>
    </div>
  );
}
