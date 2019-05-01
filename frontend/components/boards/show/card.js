import React, { PureComponent, Fragment } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import difference from 'lodash/difference'
import isEqual from 'lodash/isEqual'

class Card extends PureComponent {
  getStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // change background colour if dragging
    background: isDragging && 'lightgreen',

    // styles we need to apply on draggables
    ...draggableStyle,
  })

  render() {
    return this.props.cards.map((card, index) => (
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
            style={this.getStyle(
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
}

export default Card
