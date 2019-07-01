import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo, Subscription } from 'react-apollo'
import Router from 'next/router'
import { Drawer, Button } from 'antd'

import Board from '../../boards/show'

const fetchCardSubscription = gql`
  subscription($id: uuid!) {
    card_by_pk(id: $id) {
      id
      description
      board_id
    }
  }
`
const updateCardMutation = gql`
  mutation($id: uuid!, $position: numeric) {
    update_card(where: { id: { _eq: $id } }, _set: { position: $position }) {
      returning {
        id
        description
      }
    }
  }
`

class CardsShow extends Component {
  onClose = boardId => {
    Router.push(`/boards/show?id=${boardId}`, `/boards/${boardId}`)
  }

  render() {
    return (
      <Subscription
        subscription={fetchCardSubscription}
        variables={{ id: this.props.id }}
        fetchPolicy="network-only"
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading</p>

          if (error) return <p>Error: {error.message}</p>

          const { description, board_id } = data.card_by_pk

          return (
            <Fragment>
              <Board id={board_id} />
              <Drawer
                title={description}
                placement="right"
                closable={false}
                onClose={() => this.onClose(board_id)}
                visible
                width="50vw"
                destroyOnClose
              >
                {description}
              </Drawer>
            </Fragment>
          )
        }}
      </Subscription>
    )
  }
}

export default withApollo(CardsShow)
