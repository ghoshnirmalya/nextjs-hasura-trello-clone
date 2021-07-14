import { Box } from "@chakra-ui/react";
import AccessDeniedIndicator from "components/AccessDeniedIndicator";
import Page from "components/Pages/Boards/Index/index";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import React from "react";
import ISession from "types/session";

interface IProps {
  session: ISession;
}

const BoardsIndexPage: NextPage<IProps> = ({ session }) => {
  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>Boards Page</title>
      </Head>
      <Box mx="auto" maxW="4xl" w="full">
        <Page />
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  return {
    props: {
      session,
    },
  };
};

export default BoardsIndexPage;
