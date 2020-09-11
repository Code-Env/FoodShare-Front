import React from "react";

import Layout from "layout/Layout";
import ChattingListContainer from "containers/ChattingListContainer";

const ChattingList = props => {
  const { history, location } = props;
  return (
    <Layout history={history} location={location}>
      <ChattingListContainer />
    </Layout>
  );
};

export default ChattingList;
