import React from "react";

import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward, IoMdHome } from "react-icons/io";
import { GoSettings } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bottomnav">
      <div className="menu_btn">
        <div>
          <IconContext.Provider value={{ className: "back_ico" }}>
            <IoIosArrowBack />
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ className: "back_ico" }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
      </div>
      <div className="menu_btn">
        <IconContext.Provider value={{ className: "set_ico" }}>
          <GoSettings />
        </IconContext.Provider>
      </div>
      <div className="menu_btn">
        <Link to="/">
          <IconContext.Provider value={{ className: "home_ico" }}>
            <IoMdHome />
          </IconContext.Provider>
        </Link>
      </div>
      <div className="menu_btn">
        <Link to="/">
          <IconContext.Provider value={{ className: "create_ico" }}>
            <BsPencilSquare />
          </IconContext.Provider>
        </Link>
      </div>

      <div className="menu_btn">
        <Link to="/">
          <IconContext.Provider value={{ className: "create_ico" }}>
            <AiOutlineComment />
          </IconContext.Provider>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
