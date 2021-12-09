import React, { useState } from "react";

import "./App.css";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

import { SliderData } from "./data/SliderData";
import { InfoData,InfoDataTwo } from "./data/InfoData";

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
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <Footer />
    </div>
  );
}

export default App;
