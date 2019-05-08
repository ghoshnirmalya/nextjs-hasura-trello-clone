import React, { Component, Fragment } from 'react'
import { graphql, withApollo, Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Card, Col, Row, Icon, Button } from 'antd'
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
                <Row gutter={16}>
                  {board.map(board => {
                    return (
                      <Col key={board.id} sm={24} md={12} lg={8} xl={4}>
                        <div className="mb-4">
                          <Link
                            href={`/boards/show?id=${board.id}`}
                            as={`/boards/${board.id}`}
                          >
                            <a>
                              <Card
                                hoverable
                                extra={
                                  <Button
                                    type="danger"
                                    onClick={async () => {
                                      await this.props.client.mutate({
                                        mutation: deleteBoardMutation,
                                        variables: {
                                          id: board.id,
                                        },
                                      })
                                    }}
                                  >
                                    <Icon type="delete" />
                                    Delete
                                  </Button>
                                }
                              >
                                {board.name}
                              </Card>
                            </a>
                          </Link>
                        </div>
                      </Col>
                    )
                  })}
                </Row>
              </div>
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default withApollo(BoardsIndex)
