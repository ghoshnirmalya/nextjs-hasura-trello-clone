import { withRouter } from 'next/router'
import React, { Component } from 'react'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Board from '../../components/boards/show'

class Show extends Component<any, any> {
  render() {
    return <Board id={this.props.router.query.id} />
  }
}

export default withRouter(withApollo(withLayout(Show)))
