import React from "react";
import Button from "./Button";
import "./InfoSection.css";

const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) => {
  return (
    <div className="infoSection">
      <div className="infoContainer">
        <div className="columnLeft" style={{ order: reverse ? "2" : "1" }}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="home" btnName={buttonLabel} primary="true" />
        </div>
        <div className="columnRight" style={{ order: reverse ? "1" : "2" }}>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
