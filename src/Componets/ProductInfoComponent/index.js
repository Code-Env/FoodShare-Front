import React from "react";
import { IconContext } from "react-icons";
import { GiSiren } from "react-icons/gi";
import { BsHeartFill } from "react-icons/bs";
import UserInfo from "../../shared/UserInfo";

const ProductInfoComponent = () => {
  return (
    <div className="productInfoContainer">
      <div className="slide">SliderImg</div>
      <UserInfo />
      <div className="contentBox">
        <div className="contentBoxTitle">거래하실분 괌 ...</div>
        <div className="contentBoxCondition">
          <div className="contentBoxCategory">식자제</div>
          <div className="contentBoxAgoTime">1분전</div>
          <div className="contentBoxFavourite">
            <span>관심</span>
            <span>0</span>
          </div>
          <div className="contentBoxHit">
            <span>조회</span>
            <span>100</span>
          </div>
        </div>
      </div>
      <div className="tradeContent">
        거래하실 분 괌...거래하실 분 괌...거래하실 분 괌...거래하실 분
        괌...거래하실 분 괌...거래하실 분 괌...거래하실 분 괌...거래하실 분
        괌...거래하실 분 괌...거래하실 분 괌...거래하실 분 괌...거래하실 분
        괌...거래하실 분 괌...거래하실 분 괌...거래하실 분 괌...거래하실 분
        괌...거래하실 분 괌...거래하실 분 괌...거래하실 분 괌...거래하실 분
        괌...거래하실 분 괌...
      </div>
      <div className="buttonGroup">
        <div className="buttonClick">
          <div className="siren">
            <IconContext.Provider value={{ className: "sirenIcon" }}>
              <GiSiren />
            </IconContext.Provider>
          </div>
          <div className="buttonGroupFavourite">
            <div className="favouriteIco">
              <IconContext.Provider value={{ className: "haertIcon" }}>
                <BsHeartFill />
              </IconContext.Provider>
            </div>
            <span id="favouriteCnt" className="favouriteCnt">
              0
            </span>
          </div>
        </div>
        <div className="chatingButton">
          <button>채팅으로 거래하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoComponent;
