import React, { Component } from 'react'
import nextCookie from 'next-cookies'
import Router from 'next/router'

import 'antd/dist/antd.css'

import Layout from '../components/layout/authentication/layout'

export default App => {
  return class extends Component {
    static async getInitialProps(ctx) {
      let appProps = {}

      const { token } = nextCookie(ctx)

      if (ctx.req && token) {
        ctx.res.writeHead(302, {
          Location: `/boards`,
        })

        ctx.res.end()

        return false
      }

      if (token) {
        Router.push(`/boards`)
      }

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
