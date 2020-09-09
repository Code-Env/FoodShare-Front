import React from "react";

const Footer = () => {
  return (
    <div className="topnav">
      <div id="myNav" class="overlay">
        <a href="/" className="closebtn">
          &times;
        </a>
        <div className="overlay-content">
          <a href="#About">About</a>
          <a href="#Services">Services</a>
          <a href="#Clients">Clients</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
      <span style={{ marginLeft: "16px", fontSize: "30px", cursor: "pointer" }}>
        &#9776;
      </span>
      <div className="topnav-right">
        <a href="#search">Search</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Footer;
