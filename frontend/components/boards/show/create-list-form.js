import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo, Mutation } from 'react-apollo'
import { Form, Button, Input } from 'antd'
import Link from 'next/link'

const createListMutation = gql`
  mutation($boardId: uuid!, $position: Int, $name: String) {
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
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

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
            <div className="flex justify-center flex-col bg-gray-100 p-8 border border-solid border-gray-300 rounded">
              <Form layout="vertical" onSubmit={this.handleSubmit}>
                <Form.Item label="Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please enter name!' }],
                  })(<Input placeholder="Please enter name" size="large" />)}
                </Form.Item>
              </Form>
              <div className="flex justify-end">
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.handleSubmit}
                  loading={loading}
                  size="large"
                  icon="check-circle"
                  className="w-full"
                >
                  Submit
                </Button>
              </div>
            </div>
          )
        }}
      </Mutation>
    )
  }
}

export default withApollo(Form.create()(CreateListForm))
