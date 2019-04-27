import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo, Subscription } from 'react-apollo'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import Router from 'next/router'
import Link from 'next/link'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { async } from 'q'
import find from 'lodash/find'

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
        }
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

class BoardsShow extends Component {
  getListStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // change background colour if dragging
    background: isDragging && 'lightgreen',

    // styles we need to apply on draggables
    ...draggableStyle,
  })

  listNode = lists => {
    return lists.map((list, index) => (
      <Draggable
        key={list.id}
        draggableId={list.id}
        index={index}
        className="bg-gray-100 min-h-full p-8 border border-solid border-gray-300 rounded"
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
            className="bg-gray-100 p-8 border border-solid border-gray-300 rounded mr-8 w-64"
          >
            {list.name}
            <Droppable droppableId={list.id} type="card">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} className="flex flex-col">
                  {this.cardNode(list.cards)}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    ))
  }

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
         * Update source list
         */
        await this.props.client.mutate({
          mutation: updateCardMutation,
          variables: {
            id: sourceCard.id,
            position: destination.index,
          },
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
        className="bg-gray-100 min-h-full p-8 border border-solid border-gray-300 rounded"
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
                    {this.listNode(lists)}
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
