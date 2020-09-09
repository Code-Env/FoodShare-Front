import React from "react";

const Header = () => {
  // const openNav = () => {
  //   document.getElementById("myNav").style.width = "100%";
  // };
  // const closeNav = () => {
  //   window.onload = function (event) {
  //     document.getElementById("myNav").style.width = "0%";
  //   };
  // };

  return (
    <div className="topnav">
      {/* <a className="active" href="#home">
        Home
      </a> */}
      <div id="myNav" class="overlay">
        {/* <a href="/" className="closebtn" onClick={closeNav()}> */}
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
      {/* <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav()}> */}
      <span style={{ fontSize: "30px", cursor: "pointer" }}>&#9776;</span>
      <div className="topnav-right">
        <a href="#search">Search</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Header;
