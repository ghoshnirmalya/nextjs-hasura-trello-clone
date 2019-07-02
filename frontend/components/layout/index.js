import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

import ContentComponent from "./content";
import HeaderComponent from "./header";
import { withAuthentication } from "../../lib/with-authentication";

const { Content } = Layout;
const LayoutComponent = props => {
  return (
    <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
      <Layout>
        <HeaderComponent />
        <ContentComponent>{props.children}</ContentComponent>
      </Layout>
    </Layout>
  );
};

LayoutComponent.propTypes = {
  children: PropTypes.node
};

export default withAuthentication(LayoutComponent);
