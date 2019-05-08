import React, { PureComponent } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Scrollbar from 'react-scrollbars-custom'
import { Badge, Icon, Menu, Dropdown } from 'antd'
import Router from 'next/router'
import gql from 'graphql-tag'
import { graphql, withApollo, Subscription } from 'react-apollo'

import Card from './card'
import CreateCardForm from './create-card-form'

const deleteListMutation = gql`
  mutation($id: uuid!, $position: numeric) {
    delete_list(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`

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
          >
            <div
              className="text-base m-4 ml-0 flex justify-between"
              style={{ width: '300px' }}
            >
              <div className="flex items-center">
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
              <div>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item
                        key="edit"
                        onClick={() => Router.push(`/lists/${list.id}`)}
                      >
                        <Icon type="edit" />
                        Edit
                      </Menu.Item>
                      <Menu.Item
                        key="delete"
                        onClick={async () => {
                          await this.props.client.mutate({
                            mutation: deleteListMutation,
                            variables: {
                              id: list.id,
                            },
                          })
                        }}
                      >
                        <Icon type="delete" />
                        Delete
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={['click']}
                >
                  <Icon type="more" />
                </Dropdown>
              </div>
            </div>
            <Droppable droppableId={list.id} type="card">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} className="flex flex-col">
                  <Scrollbar
                    style={{
                      minHeight: 'calc(100vh - 300px)',
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
