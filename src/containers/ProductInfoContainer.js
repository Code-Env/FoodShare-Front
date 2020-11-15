import React, { useState } from "react";
import ProductInfoComponent from "Componets/ProductInfoComponent";
// import ProductInfoComponent from "Componets/ProductInfoComponent/asd";

const ProductInfoContainer = () => {
  const [favouriteCount, setFavouriteCount] = useState(100);
  const [heart, setHeart] = useState(false);
  const favourite = () => {
    if (!heart) {
      setFavouriteCount(favouriteCount + 1);
    } else {
      setFavouriteCount(favouriteCount - 1);
    }
    setHeart(!heart);
  };
  return (
    <ProductInfoComponent
      favouriteCount={favouriteCount}
      heart={heart}
      favourite={favourite}
    />
  );
};

export default ProductInfoContainer;
