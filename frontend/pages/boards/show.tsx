import React, { Component } from 'react'
import { withRouter } from 'next/router'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Board from '../../components/boards/show'
import { withAuthentication } from '../../lib/with-authentication'

class Show extends Component<any, any> {
  render() {
    return <Board id={this.props.router.query.id} />
  }
}

export default withAuthentication(withRouter(withApollo(withLayout(Show))))
