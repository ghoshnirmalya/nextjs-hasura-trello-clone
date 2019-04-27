import React, { Component } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import { graphql, withApollo, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Form, Button, Input } from 'antd'
import Router from 'next/router'
import Link from 'next/link'

const createBoardMutation = gql`
  mutation($name: String) {
    insert_board(objects: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`

class BoardsNew extends Component {
  handleSubmit = () => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.client.mutate({
          mutation: createBoardMutation,
          variables: { name: values.name },
        })

        Router.push('/boards')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Mutation mutation={createBoardMutation}>
        {({ loading, error }) => {
          if (loading)
            return (
              <p className="flex justify-center items-center min-h-screen">
                Loading...
              </p>
            )

          if (error) return <p>Error: {error.message}</p>

          return (
            <div className="flex justify-center flex-col ml-auto mr-auto">
              <Form layout="vertical" onSubmit={this.handleSubmit}>
                <Form.Item label="Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please enter name!' }],
                  })(<Input placeholder="Please enter name" size="large" />)}
                </Form.Item>
              </Form>
              <div className="flex justify-end">
                <div className="mr-4">
                  <Link href={`/boards`} as={`/boards`}>
                    <Button loading={loading} size="large" icon="close-circle">
                      Cancel
                    </Button>
                  </Link>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.handleSubmit}
                  loading={loading}
                  size="large"
                  icon="check-circle"
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

export default withApollo(Form.create()(BoardsNew))
