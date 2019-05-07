import React, { Component } from 'react'
import { withRouter } from 'next/router'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Cards from '../../components/cards/show'

class Show extends Component {
  render() {
    return <Cards id={this.props.router.query.id} />
  }
}

export default withRouter(withApollo(withLayout(Show)))
