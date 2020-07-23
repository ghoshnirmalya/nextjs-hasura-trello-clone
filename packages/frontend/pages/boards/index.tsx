import React from "react";
import Head from "next/head";
import Page from "components/pages/boards/index";
import { Box } from "@chakra-ui/core";
import { NextPage } from "next";
import Loader from "components/loader";
import AccessDeniedIndicator from "components/access-denied-indicator";
import { useSession } from "next-auth/client";
import WithGraphQL from "lib/with-graphql";

const BoardsIndexPage: NextPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <Loader />;
  }

  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <WithGraphQL>
      <Head>
        <title>Boards Page</title>
      </Head>
      <Box mx="auto" maxW="4xl" w="full">
        <Page />
      </Box>
    </WithGraphQL>
  );
};

export default BoardsIndexPage;
