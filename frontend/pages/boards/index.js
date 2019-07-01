import React, { Component } from 'react'
import nextCookie from 'next-cookies'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Boards from '../../components/boards/base'
import { withAuthentication } from '../../lib/with-authentication'

class Index extends Component {
  static getInitialProps = async ctx => {
    // We use `nextCookie` to get the cookie and pass the token to the
    // frontend in the `props`.
    const { token } = nextCookie(ctx)
  }

  render() {
    return <Boards />
  }
}

export default withAuthentication(withApollo(withLayout(Index)))
