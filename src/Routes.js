import React from "react";
// import { HashRouter, Route, Switch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Main from "pages/Main";
import ProductInfo from "pages/ProductInfo";
import ChattingList from "pages/ChattingList";
import Login from "pages/Login";
import Signup from "pages/Signup";

const Routes = () => {
  return (
    <>
      {/* <HashRouter basename="/"> */}
      {/* github pages에서 spa지원을위해 <HashRouter basename="/"> 사용 */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/product/:id" component={ProductInfo} />
        <Route path="/chattinglist" component={ChattingList} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
      {/* </HashRouter> */}
    </>
  );
};

export default Routes;
