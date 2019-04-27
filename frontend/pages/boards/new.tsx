import { withRouter } from 'next/router'
import React, { Component } from 'react'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import BoardNew from '../../components/boards/new'

class New extends Component<any, any> {
  render() {
    return <BoardNew />
  }
}

export default withRouter(withApollo(withLayout(New)))
