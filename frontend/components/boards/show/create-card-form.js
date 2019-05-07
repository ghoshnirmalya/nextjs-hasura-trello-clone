import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo, Mutation } from 'react-apollo'
import { Drawer, Form, Button, Input, Icon } from 'antd'
import Link from 'next/link'

const createCardMutation = gql`
  mutation(
    $listId: uuid!
    $position: numeric
    $description: String
    $boardId: uuid!
  ) {
    insert_card(
      objects: {
        list_id: $listId
        position: $position
        description: $description
        board_id: $boardId
      }
    ) {
      returning {
        id
        description
        position
      }
    }
  }
`

class CreateCardForm extends Component {
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

  getPositionOfNewCard = () => {
    const bufferForEachPosition = 1024
    const positionOfLastCard = !!this.props.cards.length
      ? this.props.cards[this.props.cards.length - 1].position
      : 0

    return positionOfLastCard + bufferForEachPosition
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.client.mutate({
          mutation: createCardMutation,
          variables: {
            listId: this.props.listId,
            position: this.getPositionOfNewCard(),
            description: values.description,
            boardId: this.props.boardId,
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
        title="Create a new CardList"
        width={720}
        onClose={this.handleClose}
        visible={this.state.visible}
      >
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <Form.Item label="Description">
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Please enter description!' }],
            })(<Input placeholder="Please enter description" size="large" />)}
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
      <Mutation mutation={createCardMutation}>
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
              className="w-full my-4"
            >
              Create a new Card
              {this.drawerNode()}
            </Button>
          )
        }}
      </Mutation>
    )
  }
}

export default withApollo(Form.create()(CreateCardForm))
