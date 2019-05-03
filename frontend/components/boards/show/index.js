import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo, Subscription } from 'react-apollo'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import find from 'lodash/find'

import List from './list'
import CreateListForm from './create-list-form'

const fetchBoardSubscription = gql`
  subscription($id: uuid!) {
    board_by_pk(id: $id) {
      id
      name
      lists(order_by: { position: asc }) {
        id
        name
        position
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
const updateListMutation = gql`
  mutation($id: uuid!, $position: Int) {
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
    }

    if (type === 'card') {
      /**
       * Card has been reordered within the same list
       */
      if (destination.droppableId === source.droppableId) {
      } else {
        /**
         * Card has been reordered within different lists
         */
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
            <div className="flex">
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
          )
        }}
      </Subscription>
    )
  }
}

export default withApollo(BoardsShow)
