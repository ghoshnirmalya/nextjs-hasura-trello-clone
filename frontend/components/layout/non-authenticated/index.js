import React, { Component } from "react";
import { Layout } from "antd";

import ContentComponent from "./content";

const NonAuthenticatedLayout = props => {
  return (
    <Layout>
      <Layout>
        <ContentComponent>{props.children}</ContentComponent>
      </Layout>
    </Layout>
  );
};

export default NonAuthenticatedLayout;
