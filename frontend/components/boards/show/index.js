import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo, Subscription } from 'react-apollo'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import find from 'lodash/find'

import List from './list'

const fetchBoardSubscription = gql`
  subscription($id: uuid!) {
    board_by_pk(id: $id) {
      id
      name
      lists(order_by: { position: asc }) {
        id
        name
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
  mutation($id: uuid!, $position: Int) {
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
  mutation($id: uuid!, $position: Int, $listId: uuid!) {
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
      /**
       * Update destination list
       */
      await this.props.client.mutate({
        mutation: updateListMutation,
        variables: {
          id: lists[source.index].id,
          position: destination.index,
        },
      })

      /**
       * Update source list
       */
      await this.props.client.mutate({
        mutation: updateListMutation,
        variables: {
          id: lists[destination.index].id,
          position: source.index,
        },
      })
    }

    if (type === 'card') {
      /**
       * Card has been reordered within the same list
       */
      if (destination.droppableId === source.droppableId) {
        const list = find(lists, l => l.id === destination.droppableId)
        const destinationCard = list.cards[destination.index]
        const sourceCard = list.cards[source.index]

        /**
         * Update destination card
         */
        await this.props.client.mutate({
          mutation: updateCardMutation,
          variables: {
            id: destinationCard.id,
            position: source.index,
          },
        })

        /**
         * Increase the position of all cards in destinationList
         * whose position is >= destinationCard.position
         */
        list.cards.map(async card => {
          if (card.position >= destinationCard.position) {
            await this.props.client.mutate({
              mutation: updateCardMutation,
              variables: {
                id: card.id,
                position: card.position + 1,
              },
            })
          }
        })

        /**
         * Update source card
         */
        await this.props.client.mutate({
          mutation: updateCardMutation,
          variables: {
            id: sourceCard.id,
            position: destination.index,
          },
        })
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

        /**
         * Update source card
         */

        if (!destinationCard) {
          /**
           * If the card is moved to the end of the destinationList,
           */

          await this.props.client.mutate({
            mutation: updateCardForDifferentListsMutation,
            variables: {
              id: sourceCard.id,
              position: destination.index,
              listId: destinationList.id,
            },
          })
        } else {
          await this.props.client.mutate({
            mutation: updateCardForDifferentListsMutation,
            variables: {
              id: sourceCard.id,
              position: destinationCard.position,
              listId: destinationList.id,
            },
          })

          /**
           * Increase the position of all cards in destinationList
           * whose position is >= destinationCard.position
           */
          destinationList.cards.map(async card => {
            if (card.position >= destinationCard.position) {
              await this.props.client.mutate({
                mutation: updateCardMutation,
                variables: {
                  id: card.id,
                  position: card.position + 1,
                },
              })
            }
          })
        }

        /**
         * Decrease the position of all cards in sourceList whose position is > sourceCard.position
         */
        sourceList.cards.map(async card => {
          if (card.position > sourceCard.position) {
            await this.props.client.mutate({
              mutation: updateCardMutation,
              variables: {
                id: card.id,
                position: card.position - 1,
              },
            })
          }
        })
      }
    }
  }

  cardNode = cards => {
    return cards.map((card, index) => (
      <Draggable
        key={card.id}
        draggableId={card.id}
        index={index}
        className="bg-gray-100 p-8 border border-solid border-gray-300 rounded"
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={this.getListStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
            className="bg-white p-2 border border-solid border-gray-300 rounded my-2 w-full min-h-8 shadow"
          >
            {card.description}
          </div>
        )}
      </Draggable>
    ))
  }

  render() {
    return (
      <Subscription
        subscription={fetchBoardSubscription}
        variables={{ id: this.props.id }}
        fetchPolicy="network-only"
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading</p>

          if (error) return <p>Error: {error.message}</p>

          const { name, lists } = data.board_by_pk

          return (
            <DragDropContext
              onDragEnd={results => this.onDragEnd(results, lists)}
            >
              <Droppable droppableId="board" type="list" direction="horizontal">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} className="flex">
                    <List lists={lists} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )
        }}
      </Subscription>
    )
  }
}

export default withApollo(BoardsShow)
