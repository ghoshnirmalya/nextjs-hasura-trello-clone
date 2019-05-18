import { withRouter } from 'next/router'
import React, { Component } from 'react'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import BoardNew from '../../components/boards/new'
import { withAuthentication } from '../../lib/with-authentication'

class New extends Component<any, any> {
  render() {
    return <BoardNew />
  }
}

export default withAuthentication(withRouter(withApollo(withLayout(New))))
