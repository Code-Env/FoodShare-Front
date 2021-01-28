import React from "react";
import { IconContext } from "react-icons";
import { GiSiren } from "react-icons/gi";
import { BsHeartFill } from "react-icons/bs";
import UserInfo from "shared/UserInfo";
import Slider from "react-slick";

const ProductInfoComponent = ({
  favouriteCount,
  heart,
  favourite,
  productName,
  category,
  productImg,
  position,
  userId,
  hitCount,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className="productInfoContainer">
      <div className="slide">
        <Slider {...settings}>
          <div className="slider_content">
            <img src={productImg} alt="productImg" width="100%" height="100%" />
          </div>
          {/* <div className="slider_content"></div>
          <div className="slider_content"></div>
          <div className="slider_content"></div> */}
        </Slider>
      </div>
      <UserInfo position={position} userId={userId} />
      <div className="contentBox">
        <div className="contentBoxTitle">{productName}</div>
        <div className="contentBoxCondition">
          <div className="contentBoxCategory">{category}</div>
          <div className="contentBoxAgoTime">1분전</div>
          <div className="contentBoxFavourite">
            <span>관심</span>
            <span>{favouriteCount}</span>
          </div>
          <div className="contentBoxHit">
            <span>조회</span>
            <span>{hitCount}</span>
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
            <button className="favouriteIco" onClick={favourite}>
              {heart ? (
                <IconContext.Provider value={{ className: "haertIcon" }}>
                  <BsHeartFill />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ className: "haertNoneIcon" }}>
                  <BsHeartFill />
                </IconContext.Provider>
              )}
            </button>
            <span id="favouriteCnt" className="favouriteCnt">
              {favouriteCount}
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
