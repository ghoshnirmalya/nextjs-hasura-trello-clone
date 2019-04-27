import React, { Component } from 'react'
import { Layout } from 'antd'

import ContentComponent from './content'
import SiderComponent from './sider'
import HeaderComponent from './header'

class LayoutComponent extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <ContentComponent>{this.props.children}</ContentComponent>
        </Layout>
      </Layout>
    )
  }
}

export default LayoutComponent
