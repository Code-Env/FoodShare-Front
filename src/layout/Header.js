import React from "react";

import { IconContext } from "react-icons";
import { GoSettings } from "react-icons/go";
import { FaSearch, FaBell } from "react-icons/fa";
import NavMenu from "./NavMenu";

const Header = ({ headerNone }) => {
  return (
    <>
      {headerNone || (
        <div className="topnav">
          <NavMenu />
          <div className="topnav-right">
            <div className="menu_btn">
              <IconContext.Provider value={{ className: "set_ico" }}>
                <GoSettings />
              </IconContext.Provider>
            </div>
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
      )}
    </>
  );
};

export default Header;
