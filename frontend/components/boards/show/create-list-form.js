import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo, Mutation } from 'react-apollo'
import { Drawer, Form, Button, Input, Icon } from 'antd'
import Link from 'next/link'

const createListMutation = gql`
  mutation($boardId: uuid!, $position: numeric, $name: String) {
    insert_list(
      objects: { board_id: $boardId, position: $position, name: $name }
    ) {
      returning {
        id
        name
        position
      }
    }
  }
`

class CreateListForm extends Component {
  state = { visible: false }

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  handleClose = () => {
    this.setState({
      visible: false,
    })
  }

  getPositionOfNewList = () => {
    const bufferForEachPosition = 1024
    const positionOfLastList = this.props.lists[this.props.lists.length - 1]
      .position

    return positionOfLastList + bufferForEachPosition
  }

  handleSubmit = () => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.client.mutate({
          mutation: createListMutation,
          variables: {
            boardId: this.props.boardId,
            position: this.getPositionOfNewList(),
            name: values.name,
          },
        })

        this.handleClose()
      }
    })
  }

  drawerNode = () => {
    const { getFieldDecorator } = this.props.form

    return (
      <Drawer
        destroyOnClose
        title="Create a new List"
        width={720}
        onClose={this.handleClose}
        visible={this.state.visible}
      >
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <Form.Item label="Name">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please enter name!' }],
            })(<Input placeholder="Please enter name" size="large" />)}
          </Form.Item>
        </Form>
        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '10px 16px',
            background: '#fff',
            textAlign: 'right',
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={this.handleSubmit}
            size="large"
            icon="check-circle"
          >
            Submit
          </Button>
        </div>
      </Drawer>
    )
  }

  render() {
    return (
      <Mutation mutation={createListMutation}>
        {({ loading, error }) => {
          if (loading)
            return (
              <p className="flex justify-center items-center min-h-screen">
                Loading...
              </p>
            )

          if (error) return <p>Error: {error.message}</p>

          return (
            <Button
              type="dashed"
              onClick={this.showDrawer}
              size="large"
              className="m-4"
              style={{ minWidth: '300px' }}
            >
              <Icon type="plus" /> Create a new List
              {this.drawerNode()}
            </Button>
          )
        }}
      </Mutation>
    )
  }
}

export default withApollo(Form.create()(CreateListForm))
