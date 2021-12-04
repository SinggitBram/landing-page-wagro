import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
const Button = ({ to, btnName, primary, big }) => {
  return (
    <div>
      <Link
        className="globalButton"
        to={to}
        style={{
          background: primary === "true" ? "#000d1a" : "#CD853F",
          color: primary === "true" ? "#fff" : "#000d1a",
          padding: big ? "16px 40px" : "14px 24px",
          fontSize: big ? "20px" : "14px",
        }}
      >
        {btnName}
      </Link>
    </div>
  );
};

export default Button;
