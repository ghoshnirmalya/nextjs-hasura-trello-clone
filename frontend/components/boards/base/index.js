import React, { Component, Fragment } from 'react'
import { graphql, withApollo, Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Card, Col, Row, Icon, Button, Table } from 'antd'
import Link from 'next/link'

const fetchBoardsQuery = gql`
  query {
    board {
      id
      name
    }
  }
`

const deleteBoardMutation = gql`
  mutation($id: uuid!) {
    delete_board(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`

class BoardsIndex extends Component {
  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '90%',
      render: (text, record) => (
        <Link href={`/boards/show?id=${record.id}`} as={`/boards/${record.id}`}>
          <a>{record.name}</a>
        </Link>
      ),
    },
    {
      key: 'actions',
      width: '10%',
      render: (text, record) => (
        <Button
          type="danger"
          icon="delete"
          onClick={async () => {
            await this.props.client.mutate({
              mutation: deleteBoardMutation,
              variables: { id: record.id },
            })

            await this.props.client.query({
              query: fetchBoardsQuery,
              fetchPolicy: 'network-only',
            })
          }}
        >
          Delete
        </Button>
      ),
    },
  ]

  render() {
    return (
      <Query query={fetchBoardsQuery} fetchPolicy="network-only">
        {({ data, error, loading }) => {
          if (loading)
            return (
              <p className="flex justify-center items-center min-h-screen">
                Loading...
              </p>
            )

          if (error) return <p>Error: {error.message}</p>

          const { board } = data

          return (
            <Fragment>
              <div className="flex flex-row-reverse">
                <Link href={`/boards/new`} as={`/boards/new`}>
                  <Button type="primary" icon="plus-circle" size="large">
                    New board
                  </Button>
                </Link>
              </div>
              <div className="mt-8">
                <Table
                  bordered
                  dataSource={board}
                  columns={this.columns}
                  rowKey="id"
                />
              </div>
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default withApollo(BoardsIndex)
