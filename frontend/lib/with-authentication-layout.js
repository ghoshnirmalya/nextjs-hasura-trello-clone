import React, { Component } from "react";
import nextCookie from "next-cookies";
import Router from "next/router";

import Layout from "../components/layout/non-authenticated";

export default App => {
  return class extends Component {
    static async getInitialProps(ctx) {
      let appProps = {};

      const { token } = nextCookie(ctx);

      if (ctx.req && token) {
        ctx.res.writeHead(302, {
          Location: `/sites`
        });

        ctx.res.end();

        return false;
      }

      if (token) {
        Router.push(`/sites`);
      }

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(ctx);
      }

      return { ...appProps };
    }

    render() {
      return (
        <Layout>
          <App {...this.props} />
        </Layout>
      );
    }
  };
};
