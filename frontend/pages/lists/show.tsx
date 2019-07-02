import React from 'react'
import { withRouter } from 'next/router'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Lists from '../../components/lists/show'
import { withAuthentication } from '../../lib/with-authentication'

function Show({ router }: { router: { query: { id: number } } }) {
  return <Lists id={router.query.id} />
}


export default withAuthentication(withRouter(withApollo(withLayout(Show))))
