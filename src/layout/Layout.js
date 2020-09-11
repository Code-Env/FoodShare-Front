import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  const { children, headerNone, headerNoneStyle } = props;
  return (
    <div
      id="layout"
      className={`layout ${headerNoneStyle ? "headerNoneStyle" : ""}`}
    >
      <div id="container" className="container">
        <Header headerNone={headerNone} />
        <div className="wrapper">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
