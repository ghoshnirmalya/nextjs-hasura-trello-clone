import React from "react";
import Head from "next/head";
import Page from "components/Pages/Boards/Show";
import { NextPage } from "next";
import Loader from "components/Loader";
import AccessDeniedIndicator from "components/AccessDeniedIndicator";
import { useSession } from "next-auth/client";

const BoardsShowPage: NextPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <Loader />;
  }

  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>Boards Page</title>
      </Head>
      <Page />
    </>
  );
};

export default BoardsShowPage;
