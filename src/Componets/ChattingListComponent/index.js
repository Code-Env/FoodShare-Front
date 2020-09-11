import React from "react";
import { IconContext } from "react-icons";
import { BiArrowBack } from "react-icons/bi";
import UserInfo from "../../shared/UserInfo";

const ChttingList = () => {
  return (
    <div className="chattingListContainer">
      <div className="chattingTitleOption">
        <div className="chattingBackIcon">
          <IconContext.Provider value={{ className: "sirenIcon" }}>
            <BiArrowBack />
          </IconContext.Provider>
        </div>
        <div className="chattingTitle">채팅</div>
      </div>
      <div className="chattingRoom">
        <UserInfo className="chat" />
      </div>
    </div>
  );
};

export default ChttingList;
