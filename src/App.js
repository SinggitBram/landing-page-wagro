import React,{useState} from "react";

import "./App.css";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";

function App() {

const [isOpen,setIsOpen] = useState(false);
const toggle = () => {
  setIsOpen(!isOpen);
}

  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
    </div>
  );
}

export default App;
