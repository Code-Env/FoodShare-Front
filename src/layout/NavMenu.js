import React, { useState } from "react";

import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";

const NavMenu = () => {
  const [nav, setNav] = useState(false);
  const closeNav = () => {
    setNav(!nav);
  };
  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {nav && (
        <div className={`navOverlay ${nav && "navOpen"}`}>
          <span className="navCloseBtn" onClick={closeNav}>
            &times;
          </span>
          <div className="overlay-content">
            <Link to="/">마이페이지</Link>
            <Link to="/">관심 목록</Link>
            <Link to="/">구매 내역</Link>
            <Link to="/">글쓰기 목록</Link>
            <Link to="/">채팅 목록</Link>
            <Link to="/">공지사항</Link>
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
