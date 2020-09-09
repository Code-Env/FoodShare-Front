import React from "react";
// import { HashRouter, Route, Switch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Main from "pages/Main";
import ProductInfo from "pages/ProductInfo";

const Routes = () => {
  return (
    <>
      {/* <HashRouter basename="/"> */}
      {/* github pages에서 spa지원을위해 <HashRouter basename="/"> 사용 */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/product" component={ProductInfo} />
      </Switch>
      {/* </HashRouter> */}
    </>
  );
};

export default Routes;
