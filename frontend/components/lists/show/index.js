import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { graphql, withApollo, Subscription } from "react-apollo";
import Router from "next/router";
import { Drawer, Form, Button, Input } from "antd";

import Board from "../../boards/show";
import Loader from "../../common/loader";

const fetchListSubscription = gql`
  subscription($id: uuid!) {
    list_by_pk(id: $id) {
      id
      name
      board_id
    }
  }
`;
const updateListMutation = gql`
  mutation($id: uuid!, $name: String) {
    update_list(where: { id: { _eq: $id } }, _set: { name: $name }) {
      returning {
        id
        name
        position
      }
    }
  }
`;
const ListsShow = props => {
  const onClose = boardId => {
    Router.push(`/boards/show?id=${boardId}`, `/boards/${boardId}`);
  };

  const handleSubmit = boardId => {
    props.form.validateFields(async (err, values) => {
      if (!err) {
        await props.client.mutate({
          mutation: updateListMutation,
          variables: {
            id: props.id,
            name: values.name
          }
        });

        Router.push(`/boards/show?id=${boardId}`, `/boards/${boardId}`);
      }
    });
  };

  return (
    <Subscription
      subscription={fetchListSubscription}
      variables={{ id: props.id }}
      fetchPolicy="network-only"
    >
      {({ data, error, loading }) => {
        if (loading) return <Loader />;

        if (error) return <p>Error: {error.message}</p>;

        const { name, board_id } = data.list_by_pk;

        return (
          <Fragment>
            <Board id={board_id} />
            <Drawer
              title={name}
              placement="right"
              closable={false}
              onClose={() => onClose(board_id)}
              visible
              width="50vw"
              destroyOnClose
            >
              <Form layout="vertical" onSubmit={() => handleSubmit(board_id)}>
                <Form.Item label="Name">
                  {props.form.getFieldDecorator("name", {
                    rules: [{ required: true, message: "Please enter name!" }],
                    initialValue: name
                  })(<Input placeholder="Please enter name" size="large" />)}
                </Form.Item>
              </Form>
              <div className="flex justify-end">
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => handleSubmit(board_id)}
                  loading={loading}
                  size="large"
                  icon="check-circle"
                >
                  Update
                </Button>
              </div>
            </Drawer>
          </Fragment>
        );
      }}
    </Subscription>
  );
};

export default withApollo(Form.create()(ListsShow));
