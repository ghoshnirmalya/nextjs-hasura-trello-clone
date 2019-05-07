import React, { PureComponent } from 'react'
import gql from 'graphql-tag'
import { withApollo } from 'react-apollo'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Scrollbar from 'react-scrollbars-custom'
import { Badge } from 'antd'

import Card from './card'
import CreateCardForm from './create-card-form'

class List extends PureComponent {
  getStyle = (isDragging, draggableStyle) => ({
    color: isDragging && '#ccc',
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
            className="mr-8"
            style={{ width: '300px', height: 'calc(100vh - 170px)' }}
          >
            <div className="text-base m-4 flex items-center">
              <div>{list.name}</div>
              <div className="ml-2 flex">
                <Badge
                  count={list.cards.length}
                  style={{
                    backgroundColor: '#fff',
                    color: '#999',
                    boxShadow: '0 0 0 1px #d9d9d9 inset',
                  }}
                />
              </div>
            </div>
            <Droppable droppableId={list.id} type="card">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} className="flex flex-col">
                  <Scrollbar
                    style={{
                      minHeight: 'calc(100vh - 240px)',
                    }}
                  >
                    <Card cards={list.cards} />
                    <CreateCardForm
                      listId={list.id}
                      cards={list.cards}
                      boardId={list.board_id}
                    />
                  </Scrollbar>
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
