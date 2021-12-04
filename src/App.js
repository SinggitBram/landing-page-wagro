import React, { Component } from "react";

import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero slides={SliderData}/>
    </div>
  );
}

export default App;
