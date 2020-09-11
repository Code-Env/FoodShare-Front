import React from "react";
import ChatList from "./ChatList";

const ChttingList = () => {
  return (
    <div className="chattingListContainer">
      <div className="chattingTitleOption">
        <div className="chattingTitle">채팅</div>
      </div>
      <div className="chatList_container">
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
      </div>
    </div>
  );
};

export default ChttingList;
