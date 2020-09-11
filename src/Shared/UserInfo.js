import React from "react";

const UserInfo = ({ className }) => {
  return (
    <div className={`userInfo ${className}`}>
      <div className="userImg"></div>
      <div className="userInfoContainer">
        <div className="userName">닉네임</div>
        <div className="chat_position">서울</div>
        <div className="time">5초전</div>
        <div className="position">서울</div>
        <div className="last_chat">안녕하세요</div>
      </div>
      <div className="pruduct_img" />
      <div className="mannerCount">
        <span>매너</span>
        <span>-100%</span>
      </div>
    </div>
  );
};

export default UserInfo;
