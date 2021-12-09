import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const [navbarChange, setNavbarChange] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarChange(true);
    } else {
      setNavbarChange(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbarChange ? "nav active" : "nav"}>
      <Link className="logo" to="/home">
        WAGRO
      </Link>
      <FaBars className="menuBars" onClick={toggle} />
      <div className="navMenu">
        <Link className="navMenuLinks" to="/about">
          About
        </Link>
        <Link className="navMenuLinks" to="/home">
          Home
        </Link>
        <Link className="navMenuLinks" to="/rentals">
          Rentals
        </Link>
      </div>
      <div className="navBtn">
        <Button to="/contact" btnName="Contact Us" primary="true" />
      </div>
    </div>
  );
};

export default Navbar;
