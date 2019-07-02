import { withRouter } from 'next/router'
import React from 'react'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import BoardNew from '../../components/boards/new'
import { withAuthentication } from '../../lib/with-authentication'

function New(props: any) {
  return <BoardNew {...props} />
}

export default withAuthentication(withRouter(withApollo(withLayout(New))))
