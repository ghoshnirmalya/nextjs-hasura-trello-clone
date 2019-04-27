import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo, Query } from 'react-apollo'
import { Form, Button, Input } from 'antd'
import styled from 'styled-components'
import Router from 'next/router'
import Link from 'next/link'

const fetchBoardQuery = gql`
  query($id: uuid!) {
    board_by_pk(id: $id) {
      id
      name
    }
  }
`
const updateBoardMutation = gql`
  mutation($id: uuid!, $name: String) {
    update_board(where: { id: { _eq: $id } }, _set: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`

class BoardsShow extends Component {
  handleSubmit = () => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.client.mutate({
          mutation: updateBoardMutation,
          variables: {
            id: this.props.id,
            name: values.name,
          },
        })

        Router.push('/boards')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Query
        query={fetchBoardQuery}
        variables={{ id: this.props.id }}
        fetchPolicy="network-only"
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading</p>

          if (error) return <p>Error: {error.message}</p>

          const { name } = data.board_by_pk

          return (
            <div className="flex justify-center flex-col ml-auto mr-auto">
              <Form layout="vertical" onSubmit={this.handleSubmit}>
                <Form.Item label="Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please enter name!' }],
                    initialValue: name,
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
                  Update
                </Button>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default withApollo(Form.create()(BoardsShow))
