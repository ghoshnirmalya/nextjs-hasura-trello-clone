import React from "react";
import NextApp from "next/app";
import {
  ThemeProvider,
  CSSReset,
  Box,
  Grid,
  ColorModeProvider,
} from "@chakra-ui/core";
import { cookieParser } from "lib/cookie";
import AuthenticatedNavbar from "components/navbar/authenticated";
import UnauthenticatedNavbar from "components/navbar/unauthenticated";
import Layout from "components/layout";

class App extends NextApp {
  render() {
    const { Component } = this.props;
    const isAuthenticated = !!cookieParser("token");

    return (
      <ThemeProvider>
        <CSSReset />
        <ColorModeProvider>
          <Layout>
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
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
