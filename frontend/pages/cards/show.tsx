import React from 'react'
import { withRouter } from 'next/router'

import withApollo from '../../lib/with-apollo'
import withLayout from '../../lib/with-layout'
import Cards from '../../components/cards/show'
import { withAuthentication } from '../../lib/with-authentication'


function Show({ router }: { router: { query: { id: number } } }) {
  return <Cards id={router.query.id} />
}

export default withAuthentication(withRouter(withApollo(withLayout(Show))))
