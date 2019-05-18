import React, { Component } from 'react'

import withLayout from '../../lib/with-unauthenticated-layout'
import Authentication from '../../components/authentication/sign-up'

class SignUp extends Component {
  render() {
    return <Authentication />
  }
}

export default withLayout(SignUp)
