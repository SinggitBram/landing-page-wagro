import React from "react";
import Button from "./Button";
import "./InfoSection2.css";
import { useInView } from "react-intersection-observer";

const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  return (
    <div className="infoSection2">
      <div className="infoContainer2">
        <div
          className={inView ? "columnLeft2 columnLeft2--zoom" : "columnLeft2"}
          ref={ref}
          style={{ order: reverse ? "2" : "1" }}
        >
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="home" btnName={buttonLabel} primary="true" />
        </div>
        <div
          className={inView ? "columnRight2 columnRight2--zoom" : "columnRight2"}
          ref={ref}
          style={{ order: reverse ? "1" : "2" }}
        >
          <div className="gambarDalam">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
