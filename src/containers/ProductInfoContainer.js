import React, { useState } from "react";
import ProductInfoComponent from "Componets/ProductInfoComponent";
// import ProductInfoComponent from "Componets/ProductInfoComponent/asd";

const ProductInfoContainer = ({ history, location, match }) => {
  const [favouriteCount, setFavouriteCount] = useState(
    location.state.favouriteCount
  );
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
      productName={location.state.productName}
      category={location.state.category}
      productImg={location.state.productImg}
      position={location.state.position}
      userId={location.state.userId}
      hitCount={location.state.hitCount}
      // history={history}
      // location={location}
    />
  );
};

export default ProductInfoContainer;
