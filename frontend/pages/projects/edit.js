import { withRouter } from 'next/router'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Project from '../../components/projects/edit'

class Edit extends Component {
  render() {
    return <Project id={this.props.router.query.id} />
  }
}

Edit.propTypes = {
  url: PropTypes.object,
}

export default withRouter(withApollo(withLayout(Edit)))
