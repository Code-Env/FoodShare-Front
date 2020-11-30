import React, { useState } from "react";

import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";

const NavMenu = () => {
  const [nav, setNav] = useState(false);
  const closeNav = () => {
    console.log("close");
    setNav(!nav);
  };
  const openNav = () => {
    setNav(!nav);
    console.log("true");
  };

  return (
    <>
      {nav && (
        <div className={`navOverlay ${nav && "navOpen"}`}>
          <span className="navCloseBtn" onClick={closeNav}>
            &times;
          </span>
          <div className="overlay-content">
            <Link to="/">About</Link>
            <Link to="/">Services</Link>
            <Link to="/">Clients</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      )}
      <div onClick={openNav}>
        <IconContext.Provider value={{ className: "navOpenBtn" }}>
          <HiMenu />
        </IconContext.Provider>
      </div>
    </>
  );
};

export default NavMenu;
