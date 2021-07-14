import React from "react";
import Head from "next/head";
import Page from "components/Pages/Cards/Show";
import { NextPage } from "next";
import Loader from "components/Loader";
import AccessDeniedIndicator from "components/AccessDeniedIndicator";
import { useSession } from "next-auth/client";

const CardsShowPage: NextPage = () => {
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
        <title>Cards Page</title>
      </Head>
      <Page />
    </>
  );
};

export default CardsShowPage;
