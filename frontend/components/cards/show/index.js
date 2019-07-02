import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { graphql, withApollo, Query } from "react-apollo";
import Router from "next/router";
import { Drawer, Form, Button, Input, Icon, Select } from "antd";

import Board from "../../boards/show";
import Loader from "../../common/loader";

const fetchCardQuery = gql`
  query($id: uuid!) {
    card_by_pk(id: $id) {
      id
      description
      board_id
      labels
    }

    label {
      id
      name
    }
  }
`;
const updateCardMutation = gql`
  mutation($id: uuid!, $description: String, $labels: json) {
    update_card(
      where: { id: { _eq: $id } }
      _set: { description: $description, labels: $labels }
    ) {
      returning {
        id
        description
      }
    }
  }
`;
const CardsShow = props => {
  const onClose = boardId => {
    Router.push(`/boards/show?id=${boardId}`, `/boards/${boardId}`);
  };
  const handleSubmit = (e, boardId) => {
    e.preventDefault();

    props.form.validateFields(async (err, values) => {
      if (!err) {
        await props.client.mutate({
          mutation: updateCardMutation,
          variables: {
            id: props.id,
            description: values.description,
            labels: values.labels
          }
        });

        onClose(boardId);
      }
    });
  };

  return (
    <Query
      query={fetchCardQuery}
      variables={{ id: props.id }}
      fetchPolicy="network-only"
    >
      {({ data, error, loading }) => {
        if (loading) return <Loader />;

        if (error) return <p>Error: {error.message}</p>;

        const { description, board_id, labels } = data.card_by_pk;
        const { getFieldDecorator } = props.form;

        return (
          <Fragment>
            <Board id={board_id} />
            <Drawer
              destroyOnClose
              title={description}
              width={720}
              onClose={() => onClose(board_id)}
              visible
            >
              <Form layout="vertical" onSubmit={e => handleSubmit(e, board_id)}>
                <Form.Item label="Description">
                  {getFieldDecorator("description", {
                    rules: [
                      { required: true, message: "Please enter description!" }
                    ],
                    initialValue: description
                  })(
                    <Input
                      placeholder="Please enter description"
                      size="large"
                    />
                  )}
                </Form.Item>
                <Form.Item label="Labels">
                  {getFieldDecorator("labels", {
                    rules: [
                      { required: true, message: "Please enter description!" }
                    ],
                    initialValue: labels
                  })(
                    <Select size="large" mode="multiple">
                      {data.label.map(label => {
                        return (
                          <Select.Option key={label.id} value={label.name}>
                            {label.name}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  )}
                </Form.Item>
              </Form>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  borderTop: "1px solid #e9e9e9",
                  padding: "10px 16px",
                  background: "#fff",
                  textAlign: "right"
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={e => handleSubmit(e, board_id)}
                  size="large"
                  icon="check-circle"
                >
                  Submit
                </Button>
              </div>
            </Drawer>
          </Fragment>
        );
      }}
    </Query>
  );
};

export default withApollo(Form.create()(CardsShow));
