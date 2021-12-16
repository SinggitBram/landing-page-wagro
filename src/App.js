import React, { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import InfoSection2 from "./components/InfoSection2";
import Footer from "./components/Footer";
import { SliderData } from "./data/SliderData";
import { InfoData, InfoDataTwo, InfoDataThree } from "./data/InfoData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Villa from "./components/Villa";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />

          <Route path="/villa" component={Villa} />
          {/* <Route path="/shop" exact component={Shop} /> */}
        </Switch>
 
      </div>
    </Router>
  );
}

export default App;
