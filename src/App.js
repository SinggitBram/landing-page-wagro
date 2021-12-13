import React, { useState } from "react";

import "./App.css";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import InfoSection from "./components/InfoSection";
import InfoSection2 from "./components/InfoSection2";

import Footer from "./components/Footer";

import { SliderData } from "./data/SliderData";
import { InfoData, InfoDataTwo, InfoDataThree } from "./data/InfoData";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoDataThree} />
      <InfoSection2 {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <Footer />
    </div>
  );
}

export default App;
