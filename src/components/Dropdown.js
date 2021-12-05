import React from "react";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ toggle, isOpen }) => {
  return (
    <div
      className="dropdownContainer"
      onClick={toggle}
      style={{ opacity: isOpen ? "1" : "0", top: isOpen ? "0" : "-100%" }}
    >
      <div className="icon" onClick={toggle}>
        <FaTimes className="closeIcon" />
      </div>
      <div className="dropdownWrapper">
        <div className="dropdownMenu">
          <Link className="dropdownLink" to="/about">
            About
          </Link>
          <Link className="dropdownLink" to="/home">
            Home
          </Link>
          <Link className="dropdownLink" to="/rentals">
            Rentals
          </Link>
        </div>
        <div className="btnWrap">
          <Button primary="true" round="true" big="true" to="/contact" btnName="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
