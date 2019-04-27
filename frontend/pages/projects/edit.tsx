import { withRouter } from 'next/router'
import React, { Component } from 'react'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Project from '../../components/projects/edit'

class Edit extends Component<any, any> {
  render() {
    return <Project id={this.props.router.query.id} />
  }
}

export default withRouter(withApollo(withLayout(Edit)))
