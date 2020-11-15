import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward, IoMdHome } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";

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
        <div className="menu_btn" onClick={this.goBack}>
          <IconContext.Provider value={{ className: "back_ico" }}>
            <IoIosArrowBack />
          </IconContext.Provider>
        </div>
        <div className="menu_btn" onClick={this.go}>
          <IconContext.Provider value={{ className: "back_ico" }}>
            <IoIosArrowForward />
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
              <FaRegComments />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
