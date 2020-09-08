import React from "react";
import Header from "./Header";

const Layout = props => {
  const { children } = props;
  return (
    <div id="layout" className="layout">
      <div id="container" className="container">
        <Header />
        <div className="wrapper">{children}</div>
        <Header />
      </div>
    </div>
  );
};

export default Layout;
