import React, { Component } from 'react'
import { withRouter } from 'next/router'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Lists from '../../components/lists/show'

class Show extends Component {
  render() {
    return <Lists id={this.props.router.query.id} />
  }
}

export default withRouter(withApollo(withLayout(Show)))
