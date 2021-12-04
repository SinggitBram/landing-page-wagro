import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="nav">
      <Link className="logo" to="/home">
        WAGRO
      </Link>
      <FaBars className="menuBars" />
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
        <Button theLink="/contact" btnName="Contact Us" primary='true' />
      </div>
    </div>
  );
};

export default Navbar;