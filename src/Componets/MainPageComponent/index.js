import React from "react";
import { Link } from "react-router-dom";

import ProductItem from "shared/ProductItem";

const MainPageComponent = () => {
  return (
    <div className="mainpage_wrapper">
      <Link to="/product">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Link>
    </div>
  );
};

export default MainPageComponent;
