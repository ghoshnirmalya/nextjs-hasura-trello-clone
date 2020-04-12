import React from "react";
import Head from "next/head";
import Page from "components/pages/boards";
import withAuthentication from "lib/with-authentication";
import withApollo from "lib/with-apollo";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Boards Page</title>
      </Head>
      <Page />
    </>
  );
};

export default withApollo(withAuthentication(IndexPage));
