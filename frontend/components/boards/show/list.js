import React, { PureComponent } from 'react'
import gql from 'graphql-tag'
import { withApollo } from 'react-apollo'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import Card from './card'

class List extends PureComponent {
  getStyle = (isDragging, draggableStyle) => ({
    background: isDragging && '#002140',
    color: isDragging && '#ccc',
    boxShadow:
      isDragging &&
      '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
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
