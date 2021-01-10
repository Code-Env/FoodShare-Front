import React from "react";
import Layout from "layout/Layout";
import MainPageContainer from "containers/MainPageContainer";

const Main = props => {
  const { history, location, match } = props;
  const { userId } = match.params;
  // const userItam = productList[userId];
  return (
    <Layout history={history} location={location}>
      <MainPageContainer
      // key={key}
      // productName={productName}
      // favouriteCount={favouriteCount}
      // position={position}
      // productImg={productImg}
      />
    </Layout>
  );
};

export default Main;
