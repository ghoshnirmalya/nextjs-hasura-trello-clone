import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import { ThemeProvider, CSSReset, Box, Grid } from "@chakra-ui/core";
import { cookieParser } from "lib/cookie";
import AuthenticatedNavbar from "components/navbar/authenticated";
import UnauthenticatedNavbar from "components/navbar/unauthenticated";
import Layout from "components/layout";

class App extends NextApp {
  render() {
    const { Component } = this.props;
    const isAuthenticated = !!cookieParser("token");

    return (
      <>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <ThemeProvider>
          <CSSReset />
          <Layout {...this.props}>
            {!!isAuthenticated ? (
              <AuthenticatedNavbar {...this.props} />
            ) : (
              <UnauthenticatedNavbar />
            )}
            <Grid
              templateColumns="repeat(1, 1fr)"
              minH="calc(100vh - 73px)"
              w="full"
              mx="auto"
              py={8}
              px={4}
            >
              <Box>
                <Component {...this.props} />
              </Box>
            </Grid>
          </Layout>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
