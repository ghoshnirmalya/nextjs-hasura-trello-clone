import React from 'react'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Boards from '../../components/boards/base'
import { withAuthentication } from '../../lib/with-authentication'

function Index() {
  return <Boards />
}

export default withAuthentication(withApollo(withLayout(Index)))
