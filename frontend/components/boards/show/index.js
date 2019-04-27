import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo, Subscription } from 'react-apollo'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import Router from 'next/router'
import Link from 'next/link'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { async } from 'q'

const fetchBoardSubscription = gql`
  subscription($id: uuid!) {
    board_by_pk(id: $id) {
      id
      name
      lists(order_by: { position: asc }) {
        id
        name
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
  getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // change background colour if dragging
    background: isDragging && 'lightgreen',

    // styles we need to apply on draggables
    ...draggableStyle,
  })

  listNode = lists => {
    return lists.map((item, index) => (
      <Draggable
        key={item.id}
        draggableId={item.id}
        index={index}
        className="bg-gray-100 min-h-full p-8 border border-solid border-gray-300 rounded"
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={this.getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
            className="bg-gray-100 p-8 border border-solid border-gray-300 rounded mr-8 w-64"
          >
            {item.name}
          </div>
        )}
      </Draggable>
    ))
  }

  onListsDragEnd = async (result, lists) => {
    const { draggableId, destination, source } = result

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
              onDragEnd={results => this.onListsDragEnd(results, lists)}
            >
              <Droppable droppableId="board" type="list" direction="horizontal">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} className="flex flex-column">
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
