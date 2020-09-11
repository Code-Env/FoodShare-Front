import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward, IoMdHome } from "react-icons/io";
import { GoSettings } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";

class Footer extends Component {
  go = () => {
    this.props.history.go(1);
  };
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="bottomnav">
        <div className="menu_btn">
          <div onClick={this.goBack}>
            <IconContext.Provider value={{ className: "back_ico" }}>
              <IoIosArrowBack />
            </IconContext.Provider>
          </div>
          <div onClick={this.go}>
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
          <Link to="/chattinglist">
            <IconContext.Provider value={{ className: "create_ico" }}>
              <AiOutlineComment />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
