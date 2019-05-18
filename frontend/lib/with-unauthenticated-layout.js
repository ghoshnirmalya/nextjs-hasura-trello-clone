import React, { Component } from 'react'
import 'antd/dist/antd.css'

import Layout from '../components/layout/unauthenticated/layout'

export default App => {
  return class extends Component {
    static async getInitialProps(ctx) {
      let appProps = {}

      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(ctx)
      }

      return { ...appProps }
    }

    render() {
      return (
        <Layout>
          <App {...this.props} />
        </Layout>
      )
    }
  }
}
