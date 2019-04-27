import React, { Component } from 'react'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Boards from '../../components/boards/base/'

class Index extends Component {
  render() {
    return <Boards />
  }
}

export default withApollo(withLayout(Index))
