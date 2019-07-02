import React, { Component, Fragment } from "react";
import { graphql, withApollo, Subscription } from "react-apollo";
import gql from "graphql-tag";
import { Card, Col, Row, Icon, Button } from "antd";
import Link from "next/link";

import Loader from "../../common/loader";

const fetchBoardsSubscription = gql`
  subscription {
    board {
      id
      name
    }
  }
`;
const deleteBoardMutation = gql`
  mutation($id: uuid!) {
    delete_board(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
const BoardsIndex = props => {
  return (
    <Subscription
      subscription={fetchBoardsSubscription}
      fetchPolicy="network-only"
    >
      {({ data, error, loading }) => {
        if (loading) return <Loader />;

        if (error) return <p>Error: {error.message}</p>;

        const { board } = data;

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
                    <Col key={board.id} sm={24} md={12} lg={8}>
                      <div className="mb-4">
                        <Card
                          hoverable
                          extra={
                            <Button
                              type="danger"
                              onClick={async () => {
                                await props.client.mutate({
                                  mutation: deleteBoardMutation,
                                  variables: {
                                    id: board.id
                                  }
                                });
                              }}
                            >
                              <Icon type="delete" />
                              Delete
                            </Button>
                          }
                        >
                          <Link
                            href={`/boards/show?id=${board.id}`}
                            as={`/boards/${board.id}`}
                          >
                            <a>{board.name}</a>
                          </Link>
                        </Card>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Fragment>
        );
      }}
    </Subscription>
  );
};

export default withApollo(BoardsIndex);
