import { withRouter } from 'next/router'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Project from '../../components/projects/show'

class Show extends Component {
  render() {
    return <Project id={this.props.router.query.id} />
  }
}

Show.propTypes = {
  url: PropTypes.object,
}

export default withRouter(withApollo(withLayout(Show)))
