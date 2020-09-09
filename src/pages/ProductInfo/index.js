import React from "react";

import Layout from "layout/Layout";
import ProductInfoContainer from "containers/ProductInfoContainer";

const ProductInfo = props => {
  const { history, location } = props;
  return (
    <Layout history={history} location={location}>
      <ProductInfoContainer />
    </Layout>
  );
};

export default ProductInfo;
