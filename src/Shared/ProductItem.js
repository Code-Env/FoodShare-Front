import React from "react";
import background from '../assets/background.png'

const ProductItem = () => {
    return <div>item
                <img src={background}/>
                <span ClassName="location">거래위치</span>
                <span ClassName="upload">9시간전</span>
                <span ClassName="like">50</span>
            </div>
  };
  
  export default ProductItem;