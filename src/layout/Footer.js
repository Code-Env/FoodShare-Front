import React from "react";

import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoMdHome } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bottomnav">
      <div>menu</div>
      <div>menu</div>
      <div>
        <Link to="/">
          <IconContext.Provider value={{ className: "home_ico" }}>
            <IoMdHome />
          </IconContext.Provider>
        </Link>
      </div>
      <div>menu</div>
      <div>menu</div>
    </div>
  );
};

export default Footer;
