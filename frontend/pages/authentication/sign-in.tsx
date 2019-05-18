import React, { Component } from 'react'

import withLayout from '../../lib/with-unauthenticated-layout'
import Authentication from '../../components/authentication/sign-in'

class SignIn extends Component {
  render() {
    return <Authentication />
  }
}

export default withLayout(SignIn)
