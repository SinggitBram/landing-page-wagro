import React from "react";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import InfoSection2 from "./InfoSection2";
import Footer from "./Footer";

import { SliderData } from "../data/SliderData";
import { InfoData, InfoDataTwo, InfoDataThree } from "../data/InfoData";
const Home = () => {
  return (
    <div>
      <Hero slides={SliderData} />
      <InfoSection {...InfoDataThree} />
      <InfoSection2 {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <Footer />
    </div>
  );
};

export default Home;
