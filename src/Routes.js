import React from "react";
// import { HashRouter, Route, Switch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Main from "pages/Main";
import ProductInfo from "pages/ProductInfo";
import ChattingList from "pages/ChattingList";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Chat from "Componets/ChatComponent";

const Routes = ({
  chatReducer,
  mySocketId,
  leaveChatroom,
  enterChatroom,
  sendChat,
  clearChat,
}) => {
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
        <Route
          path="/chat/:id"
          render={props => (
            <Chat
              chatReducer={chatReducer}
              mySocketId={mySocketId}
              leaveChatroom={leaveChatroom}
              enterChatroom={enterChatroom}
              sendChat={sendChat}
              clearChat={clearChat}
            />
          )}
        />
      </Switch>
      {/* </HashRouter> */}
      {/*
        채팅 참고
        https://gaemi606.tistory.com/56
      */}
    </>
  );
};

export default Routes;
