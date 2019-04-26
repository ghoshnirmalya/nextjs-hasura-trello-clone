import { withRouter } from 'next/router'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import ProjectNew from '../../components/projects/new'

class New extends Component {
  render() {
    return <ProjectNew />
  }
}

New.propTypes = {
  url: PropTypes.object,
}

export default withRouter(withApollo(withLayout(New)))
