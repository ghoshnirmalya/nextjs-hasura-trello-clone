import React, { Component } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'

export const auth = ctx => {
  const { token } = nextCookie(ctx)

  if (ctx.req && !token) {
    const currentUrl = ctx.res.writeHead(302, {
      Location: `/authentication/sign-in`,
    })

    ctx.res.end()

    return false
  }

  if (!token) {
    Router.push(`/authentication/sign-in`)
  }

  return token
}

const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component'

export const withAuthentication = WrappedComponent =>
  class extends Component {
    static displayName = `withAuthentication(${getDisplayName(
      WrappedComponent
    )})`

    static async getInitialProps(ctx) {
      const token = auth(ctx)

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return { ...componentProps, token }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
