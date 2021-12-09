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
            <p>House</p>
            <p>Villa</p>
            <p>Koi Pond</p>
          </div>
          <div className="companyFooter">
            <h3>Company</h3>
            <p>About</p>
            <p>Customers</p>
            <p>Careers</p>
          </div>
          <div className="contactFooter">
            <h3>Contact Us</h3>
            <p>FAQ</p>
            <p>Support</p>
            <p>Questions</p>
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
