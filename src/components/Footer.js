import React from "react";
import Button from "./Button";
import "./Footer.css";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="mainFooter">
        <div className="bigWord">
          <h1>Let's create</h1>
          <h1>your Dream Home</h1>
        </div>
        <div className="detailFooter">
          <div className="productFooter">
            <h3>Product</h3>
            <h5>House</h5>
            <h5>Villa</h5>
            <h5>Koi Pond</h5>
          </div>
          <div className="companyFooter">
            <h3>Company</h3>
            <h5>About</h5>
            <h5>Customers</h5>
            <h5>Careers</h5>
          </div>
          <div className="contactFooter">
            <h3>Contact Us</h3>
            <h5>FAQ</h5>
            <h5>Support</h5>
            <h5>Questions</h5>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="sosmedLink">
          <FaFacebookSquare className="logoSosmed" />
          <FaInstagram className="logoSosmed" />
          <FaTwitterSquare className="logoSosmed" />
          <FaYoutube className="logoSosmed" />
        </div>
        <div className="btnFooter">
          <Button to="contact" btnName="Let's Chat" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
