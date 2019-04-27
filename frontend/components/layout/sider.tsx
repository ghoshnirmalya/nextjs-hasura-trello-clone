import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Link from 'next/link'

const { Sider } = Layout

class SiderComponent extends Component {
  state = {
    collapsed: false,
  }

  onCollapse = (collapsed: boolean): any => {
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
          <Menu.Item key="boards">
            <Icon type="pie-chart" />
            <span>
              <Link href={`/boards`} as={`/boards`}>
                <a>Boards</a>
              </Link>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default SiderComponent
