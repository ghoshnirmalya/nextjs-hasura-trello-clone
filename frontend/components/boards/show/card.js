import React, { PureComponent, Fragment } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import difference from 'lodash/difference'
import isEqual from 'lodash/isEqual'

class Card extends PureComponent {
  getStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    background: isDragging && '#002140',
    color: isDragging && '#ccc',
    boxShadow:
      isDragging &&
      '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
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
            className="bg-white p-2 border border-solid border-gray-300 rounded my-2 w-full min-h-8"
          >
            {card.description}
          </div>
        )}
      </Draggable>
    ))
  }
}

export default Card
