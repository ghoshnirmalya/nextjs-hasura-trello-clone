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

    const unauthenticatedLayout = () => {
      return (
        <>
          <UnauthenticatedNavbar />
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
        </>
      );
    };

    const authenticatedLayout = () => {
      return (
        <Layout {...this.props}>
          <AuthenticatedNavbar {...this.props} />
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
      );
    };

    return (
      <>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <ThemeProvider>
          <CSSReset />
          {!!isAuthenticated ? authenticatedLayout() : unauthenticatedLayout()}
        </ThemeProvider>
      </>
    );
  }
}

export default App;
