import React, { Component } from 'react'
import nextCookie from 'next-cookies'

import 'antd/dist/antd.css'

import Layout from '../components/layout'

export default App => {
  return class extends Component {
    static async getInitialProps(ctx) {
      let appProps = {}

      const { token, userId, userRole } = nextCookie(ctx)

      if (!token) {
        ctx.res.writeHead(302, {
          Location: `/authentication`,
        })

        ctx.res.end()
      }

      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(ctx)
      }

      return { ...appProps, userId, userRole }
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
