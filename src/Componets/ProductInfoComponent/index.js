import React from "react";

const ProductInfoComponent = () => {
  return (
    <div className="productInfoContainer">
      <div className="slide">SliderImg</div>
      <div className="userInfo">
        <div className="uerImg"></div>
        <div className="userInfoContainer">
          <div className="userName">닉네임</div>
          <div className="position">서울</div>
        </div>
        <div className="mannerCount">
          <span>매너</span>
          <span>-100%</span>
        </div>
      </div>
      <div className="contentBox"></div>
      <div className="tradeContent"></div>
    </div>
  );
};

export default ProductInfoComponent;
