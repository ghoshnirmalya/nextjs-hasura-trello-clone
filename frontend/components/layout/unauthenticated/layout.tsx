import React, { Component } from 'react'
import { Layout } from 'antd'

import ContentComponent from './content'

class LayoutComponent extends Component {
  render() {
    return (
      <Layout>
        <Layout>
          <ContentComponent>{this.props.children}</ContentComponent>
        </Layout>
      </Layout>
    )
  }
}

export default LayoutComponent
