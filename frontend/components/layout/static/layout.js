import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

import ContentComponent from './content'
import HeaderComponent from './header'

const { Content } = Layout

class LayoutComponent extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
        <Layout>
          <HeaderComponent />
          <ContentComponent>{this.props.children}</ContentComponent>
        </Layout>
      </Layout>
    )
  }
}

LayoutComponent.propTypes = {
  children: PropTypes.node,
}

export default LayoutComponent
