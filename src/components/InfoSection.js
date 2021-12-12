import React from "react";
import Button from "./Button";
import "./InfoSection.css";
import { useInView } from 'react-intersection-observer';

const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  
  return (
    <div className={inView ? "infoSection infoSection--zoom" : "infoSection"} ref={ref}>
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
