import React from "react";
import { IconContext } from "react-icons";

import { FaHeart } from "react-icons/fa";

import background from "../assets/background.png";

const ProductItem = () => {
  return (
    <div>
      item
      <img src={background} />
      <span className="location">거래위치</span>
      <span className="upload">9시간전</span>
      <span className="like">50</span>
      <IconContext.Provider value={{ className: "heart" }}>
        <div>
          <FaHeart />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default ProductItem;
