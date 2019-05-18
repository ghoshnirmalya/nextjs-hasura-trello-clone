import { withRouter } from 'next/router'
import React, { Component } from 'react'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Board from '../../components/boards/edit'
import { withAuthentication } from '../../lib/with-authentication'

class Edit extends Component<any, any> {
  render() {
    return <Board id={this.props.router.query.id} />
  }
}

export default withAuthentication(withRouter(withApollo(withLayout(Edit))))
