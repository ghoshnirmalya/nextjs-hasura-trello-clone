import React, { Component } from 'react'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Projects from '../../components/projects/base/'

class Index extends Component {
  render() {
    return <Projects />
  }
}

export default withApollo(withLayout(Index))
