import React, { Component } from 'react'
import { Layout } from 'antd'

import ContentComponent from './content'
import HeaderComponent from './header'

class LayoutComponent extends Component {
  render() {
    return (
      <Layout>
        <HeaderComponent />
        <Layout>
          <ContentComponent>{this.props.children}</ContentComponent>
        </Layout>
      </Layout>
    )
  }
}

export default LayoutComponent
