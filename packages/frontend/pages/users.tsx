import React from "react";
import Head from "next/head";
import Page from "components/pages/users/index";
import withAuthentication from "lib/with-authentication";
import withApollo from "lib/with-apollo";
import { Box } from "@chakra-ui/core";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>
      <Box mx="auto" maxW="4xl" w="full">
        <Page />
      </Box>
    </>
  );
};

export default withApollo(withAuthentication(IndexPage));
