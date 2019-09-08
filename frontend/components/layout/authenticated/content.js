import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

const { Content } = Layout;

const AuthenticatedContentComponent = props => {
  return (
    <div className="m-8">
      <div className="p-8 my-0 mx-auto">{props.children}</div>
    </div>
  );
};

AuthenticatedContentComponent.propTypes = {
  children: PropTypes.node
};

export default AuthenticatedContentComponent;
