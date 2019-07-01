import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import cookies from 'next-cookies'

import initApollo from './init-apollo'

// Gets the display name of a JSX component for dev tools
const getComponentDisplayName = Component => {
  return Component.displayName || Component.name || 'Unknown'
}

export default ComposedComponent => {
  return class WithApollo extends React.Component {
    static displayName = `WithApollo(${getComponentDisplayName(
      ComposedComponent
    )})`

    static propTypes = {
      serverState: PropTypes.object.isRequired,
    }

    static async getInitialProps(ctx) {
      const { token } = cookies(ctx)

      // Initial serverState with apollo (empty)
      let serverState = {
        apollo: {
          data: {},
        },
        token,
        userRole: cookies(ctx)['x-hasura-role'],
        userId: cookies(ctx)['x-hasura-user-id'],
      }

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {}

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        const apollo = initApollo({
          token,
          userRole: cookies(ctx)['x-hasura-role'],
          userId: cookies(ctx)['x-hasura-user-id'],
        })

        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <ApolloProvider client={apollo}>
              <ComposedComponent
                serverState={serverState}
                {...composedInitialProps}
              />
            </ApolloProvider>,
            {
              router: {
                asPath: ctx.asPath,
                pathname: ctx.pathname,
                query: ctx.query,
              },
            }
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()

        // Extract query data from the Apollo store
        serverState = {
          apollo: {
            data: apollo.cache.extract(),
          },
          token,
          userRole: cookies(ctx)['x-hasura-role'],
          userId: cookies(ctx)['x-hasura-user-id'],
        }
      }

      return {
        serverState,
        ...composedInitialProps,
      }
    }

    constructor(props) {
      super(props)

      this.apollo = initApollo({
        token: this.props.serverState.token,
        userRole: this.props.serverState.userRole,
        userId: this.props.serverState.userId,
        ...this.props.serverState.apollo.data,
      })
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
}
