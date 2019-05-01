import React, { PureComponent } from 'react'
import gql from 'graphql-tag'
import { withApollo } from 'react-apollo'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import Card from './card'

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

class List extends PureComponent {
  getStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // change background colour if dragging
    background: isDragging && 'lightgreen',

    // styles we need to apply on draggables
    ...draggableStyle,
  })

  render() {
    return this.props.lists.map((list, index) => (
      <Draggable
        key={list.id}
        draggableId={list.id}
        index={index}
        className="bg-gray-100 p-8 border border-solid border-gray-300 rounded"
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={this.getStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
            className="bg-gray-100 p-8 border border-solid border-gray-300 rounded mr-8 w-64"
          >
            {list.name}
            <Droppable droppableId={list.id} type="card">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  className="flex flex-col min-h-full"
                >
                  <Card cards={list.cards} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    ))
  }
}

export default withApollo(List)
