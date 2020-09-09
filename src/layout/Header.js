import React from "react";

import { IconContext } from "react-icons";
import { FaSearch, FaBell } from "react-icons/fa";

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
      <span style={{ marginLeft: "16px", fontSize: "30px", cursor: "pointer" }}>
        &#9776;
      </span>
      <div className="topnav-right">
        <div>
          <IconContext.Provider value={{ className: "search_ico" }}>
            <FaSearch />
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ className: "bell_ico" }}>
            <FaBell />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Header;
