import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Dropdown, Icon, Avatar, Button } from "antd";
import Router from "next/router";
import Link from "next/link";

import Logo from "../../../static/images/logo.svg";

const { Header } = Layout;

class StaticLayoutHeader extends Component {
  render() {
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <div className="flex justify-between h-full px-4">
          <div className="mx-4 flex">
            <div className="px-4">
              <Link href={`/boards`} as={`/boards`}>
                <a>
                  <img
                    src={Logo}
                    className="px-2"
                    alt="Logo"
                    width="50px"
                    height="50px"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="mx-4 flex">
            <div className="px-4">
              <Link href={`/authentication`} as={`/authentication`}>
                <Button type="dashed" icon="login">
                  Sign In
                </Button>
              </Link>
            </div>
            <div className="px-4">
              <Link href={`/authentication`} as={`/authentication`}>
                <Button type="primary" icon="thunderbolt">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}

export default StaticLayoutHeader;
