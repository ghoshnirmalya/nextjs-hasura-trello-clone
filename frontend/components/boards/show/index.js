import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo, Subscription } from 'react-apollo'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import find from 'lodash/find'
import Scrollbar from 'react-scrollbars-custom'

import List from './list'
import CreateListForm from './create-list-form'
import Loader from '../../common/loader'

const fetchBoardSubscription = gql`
  subscription($id: uuid!) {
    board_by_pk(id: $id) {
      id
      name
      cards {
        id
      }
      lists(order_by: { position: asc }) {
        id
        name
        position
        board_id
        cards(order_by: { position: asc }) {
          id
          description
          position
        }
      }
    }
  }
`
const updateCardMutation = gql`
  mutation($id: uuid!, $position: numeric) {
    update_card(where: { id: { _eq: $id } }, _set: { position: $position }) {
      returning {
        id
        description
        position
      }
    }
  }
`
const updateCardForDifferentListsMutation = gql`
  mutation($id: uuid!, $position: numeric, $listId: uuid!) {
    update_card(
      where: { id: { _eq: $id } }
      _set: { list_id: $listId, position: $position }
    ) {
      returning {
        id
      }
    }
  }
`
const updateListMutation = gql`
  mutation($id: uuid!, $position: numeric) {
    update_list(where: { id: { _eq: $id } }, _set: { position: $position }) {
      returning {
        id
        name
        position
      }
    }
  }
`

class BoardsShow extends Component {
  onDragEnd = async (result, lists) => {
    const { draggableId, destination, source, type } = result

    if (!destination) {
      return false
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return false
    }

    if (type === 'list') {
      const destinationList = lists[destination.index]
      const sourceList = lists[source.index]
      const destinationMinusOneList = lists[destination.index - 1]
      const destinationPlusOneList = lists[destination.index + 1]

      const positionOfDestinationList = destinationList.position
      const positionOfSourceList = sourceList.position
      const positionOfDestinationMinusOneList =
        destinationMinusOneList && destinationMinusOneList.position
      const positionOfDestinationPlusOneList =
        destinationPlusOneList && destinationPlusOneList.position

      if (positionOfSourceList > positionOfDestinationList) {
        let updatedPositionOfSourceList

        if (destinationMinusOneList) {
          updatedPositionOfSourceList =
            (positionOfDestinationList + positionOfDestinationMinusOneList) / 2
        } else {
          updatedPositionOfSourceList = positionOfDestinationList / 2
        }

        /**
         * Update source list
         */
        await this.props.client.mutate({
          mutation: updateListMutation,
          variables: {
            id: lists[source.index].id,
            position: updatedPositionOfSourceList,
          },
        })
      } else {
        let updatedPositionOfSourceList

        if (destinationPlusOneList) {
          updatedPositionOfSourceList =
            (positionOfDestinationList + positionOfDestinationPlusOneList) / 2
        } else {
          updatedPositionOfSourceList = positionOfDestinationList + 1024
        }

        /**
         * Update source list
         */
        await this.props.client.mutate({
          mutation: updateListMutation,
          variables: {
            id: lists[source.index].id,
            position: updatedPositionOfSourceList,
          },
        })
      }
    }

    if (type === 'card') {
      /**
       * Card has been reordered within the same list
       */
      if (destination.droppableId === source.droppableId) {
        const list = find(lists, l => l.id === destination.droppableId)

        const destinationCard = list.cards[destination.index]
        const sourceCard = list.cards[source.index]
        const destinationMinusOneCard = list.cards[destination.index - 1]
        const destinationPlusOneCard = list.cards[destination.index + 1]

        const positionOfDestinationCard = destinationCard.position
        const positionOfSourceCard = sourceCard.position
        const positionOfDestinationMinusOneCard =
          destinationMinusOneCard && destinationMinusOneCard.position
        const positionOfDestinationPlusOneCard =
          destinationPlusOneCard && destinationPlusOneCard.position

        if (positionOfSourceCard > positionOfDestinationCard) {
          let updatedPositionOfSourceCard

          if (destinationMinusOneCard) {
            updatedPositionOfSourceCard =
              (positionOfDestinationCard + positionOfDestinationMinusOneCard) /
              2
          } else {
            updatedPositionOfSourceCard = positionOfDestinationCard / 2
          }

          /**
           * Update source card
           */
          await this.props.client.mutate({
            mutation: updateCardMutation,
            variables: {
              id: sourceCard.id,
              position: updatedPositionOfSourceCard,
            },
          })
        } else {
          let updatedPositionOfSourceCard

          if (destinationPlusOneCard) {
            updatedPositionOfSourceCard =
              (positionOfDestinationCard + positionOfDestinationPlusOneCard) / 2
          } else {
            updatedPositionOfSourceCard = positionOfDestinationCard + 1024
          }

          /**
           * Update source card
           */
          await this.props.client.mutate({
            mutation: updateCardMutation,
            variables: {
              id: sourceCard.id,
              position: updatedPositionOfSourceCard,
            },
          })
        }
      } else {
        /**
         * Card has been reordered within different lists
         */
        const destinationList = find(
          lists,
          l => l.id === destination.droppableId
        )
        const sourceList = find(lists, l => l.id === source.droppableId)
        const destinationCard = destinationList.cards[destination.index]
        const sourceCard = sourceList.cards[source.index]
        const destinationMinusOneCard =
          destinationList.cards[destination.index - 1]
        const destinationPlusOneCard =
          destinationList.cards[destination.index + 1]
        const lastCardFromDestinationList =
          destinationList.cards[destinationList.cards.length - 1]

        const positionOfDestinationCard =
          destinationCard && destinationCard.position
        const positionOfSourceCard = sourceCard.position
        const positionOfDestinationMinusOneCard =
          destinationMinusOneCard && destinationMinusOneCard.position
        const positionOfDestinationPlusOneCard =
          destinationPlusOneCard && destinationPlusOneCard.position
        const positionOfLastCardFromDestinationList =
          lastCardFromDestinationList && lastCardFromDestinationList.position

        let updatedPositionOfSourceCard

        if (!destinationCard) {
          if (positionOfLastCardFromDestinationList) {
            updatedPositionOfSourceCard =
              positionOfLastCardFromDestinationList + 1024
          } else {
            updatedPositionOfSourceCard = 1024
          }
        } else if (!destinationMinusOneCard) {
          updatedPositionOfSourceCard = positionOfDestinationCard / 2
        } else {
          updatedPositionOfSourceCard =
            (positionOfDestinationCard + positionOfDestinationMinusOneCard) / 2
        }

        /**
         * Update source card
         */
        await this.props.client.mutate({
          mutation: updateCardForDifferentListsMutation,
          variables: {
            id: sourceCard.id,
            position: updatedPositionOfSourceCard,
            listId: destinationList.id,
          },
        })
      }
    }
  }

  render() {
    return (
      <Subscription
        subscription={fetchBoardSubscription}
        variables={{ id: this.props.id }}
        fetchPolicy="network-only"
      >
        {({ data, error, loading }) => {
          if (loading) return <Loader />

          if (error) return <p>Error: {error.message}</p>

          const { name, lists, cards } = data.board_by_pk

          return (
            <div>
              <div className="flex justify-between items-center">
                <h2>{name}</h2>
              </div>
              <div style={{ height: 'calc(100vh - 200px)' }}>
                <Scrollbar noScrollY>
                  <div className="flex h-full">
                    <DragDropContext
                      onDragEnd={results => this.onDragEnd(results, lists)}
                    >
                      <Droppable
                        droppableId="board"
                        type="list"
                        direction="horizontal"
                      >
                        {(provided, snapshot) => (
                          <div ref={provided.innerRef} className="flex">
                            <List lists={lists} />
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                    <CreateListForm boardId={this.props.id} lists={lists} />
                  </div>
                </Scrollbar>
              </div>
            </div>
          )
        }}
      </Subscription>
    )
  }
}

export default withApollo(BoardsShow)
