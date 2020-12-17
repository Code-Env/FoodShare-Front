import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productListApi } from "shared/Api";
import axios from "axios";

import ProductItem from "shared/ProductItem";
import MainPageComponent from "Componets/MainPageComponent";

const MainPageContainer = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const productList = async () => {
      try {
        // 요청이 시작 할 때에는 error와 productList 초기화.
        setError(null);
        setProductList(null);
        // isLoading 상태를 true로 바꾼다.
        setIsLoading(true);

        const response = await axios.get(productListApi);
        setProductList(response.data); // 데이터는 response.data 안에 들어있다.
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
    };
    productList();
  }, []);
  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!productList) return null;
  return (
    <MainPageComponent>
      {productList.map((product, index) => (
        <Link to="/product" key={product._id}>
          <ProductItem
            key={product._id}
            productName={product.productName}
            favouriteCount={product.favouriteCount}
            position={product.position}
            productImg={product.productImg}
          />
        </Link>
      ))}
    </MainPageComponent>
  );
};

export default MainPageContainer;
