import React from "react";

import Layout from "layout/Layout";
import ProductInfoContainer from "containers/ProductInfoContainer";

const ProductInfo = props => {
  const { history, location, match } = props;
  return (
    <Layout history={history} location={location}>
      <ProductInfoContainer
        history={history}
        location={location}
        match={match}
      />
    </Layout>
  );
};

export default ProductInfo;
