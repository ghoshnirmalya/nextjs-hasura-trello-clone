import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import Link from 'next/link'

const { Sider } = Layout
const SubMenu = Menu.SubMenu

class SiderComponent extends Component {
  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  render() {
    return (
      <Sider
        width="250"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo h-10 bg-gray-700 m-3 rounded" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="projects">
            <Icon type="pie-chart" />
            <span>
              <Link href={`/projects`} as={`/projects`}>
                <a>Projects</a>
              </Link>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

SiderComponent.propTypes = {
  children: PropTypes.node,
}

export default SiderComponent
