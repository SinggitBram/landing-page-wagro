import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import "./Hero.css";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

    // useEffect(() => {
    //   const nextSlide = () => {
    //     setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    //   };
    //   timeout.current = setTimeout(nextSlide, 4000);
    //   return function () {
    //     if (timeout.current) {
    //       clearTimeout(timeout.current);
    //     }
    //   };
    // }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="heroSection">
      <div className="heroWrapper">
        {slides.map((slide, index) => {
          return (
            <div className="heroSlide" key={index}>
              {index === current && (
                <div className="heroSlider">
                  <img src={slide.image} alt={slide.alt} className="heroImage" />
                  <div className="heroContent">
                    <h1>{slide.title}</h1>
                    <h3>{slide.model}</h3>
                    <Button to={slide.path} primary="true" btnName={slide.label} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="sliderButton">
          <IoArrowBack className="prevArrow" onClick={prevSlide} />
          <IoArrowForward className="nextArrow" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
