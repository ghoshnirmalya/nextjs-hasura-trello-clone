import React, { PureComponent, Fragment } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import difference from 'lodash/difference'
import isEqual from 'lodash/isEqual'
import Link from 'next/link'
import { Card } from 'antd'

class _Card extends PureComponent {
  getStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    background: isDragging && '#002140',
    color: isDragging && '#ccc',
    boxShadow:
      isDragging &&
      '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
    borderRadius: '2px',
    // styles we need to apply on draggables
    ...draggableStyle,
  })

  render() {
    return this.props.cards.map((card, index) => (
      <Link
        href={`/cards/show?id=${card.id}`}
        as={`/cards/${card.id}`}
        key={card.id}
      >
        <a>
          <Draggable draggableId={card.id} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={this.getStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )}
                className="m-4 ml-0 mt-0"
              >
                <Card hoverable>
                  {card.description}
                  <div className="text-gray-500 text-xs">Nirmalya Ghosh</div>
                </Card>
              </div>
            )}
          </Draggable>
        </a>
      </Link>
    ))
  }
}

export default _Card
