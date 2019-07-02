import React, { Component, useState } from "react";
import gql from "graphql-tag";
import { graphql, withApollo, Mutation } from "react-apollo";
import { Drawer, Form, Button, Input, Icon } from "antd";
import Link from "next/link";

import Loader from "../../common/loader";

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
`;
const CreateCardForm = props => {
  const [visible, setVisiblity] = useState(false);
  const getPositionOfNewCard = () => {
    const bufferForEachPosition = 1024;
    const positionOfLastCard = props.cards.length
      ? props.cards[props.cards.length - 1].position
      : 0;

    return positionOfLastCard + bufferForEachPosition;
  };
  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFields(async (err, values) => {
      if (!err) {
        await props.client.mutate({
          mutation: createCardMutation,
          variables: {
            listId: props.listId,
            position: getPositionOfNewCard(),
            description: values.description,
            boardId: props.boardId
          }
        });

        setVisiblity(false);
      }
    });
  };

  const drawerNode = () => {
    const { getFieldDecorator } = props.form;

    return (
      <Drawer
        destroyOnClose
        title="Create a new CardList"
        width={720}
        onClose={setVisiblity(false)}
        visible={visible}
      >
        <Form layout="vertical" onSubmit={handleSubmit}>
          <Form.Item label="Description">
            {getFieldDecorator("description", {
              rules: [{ required: true, message: "Please enter description!" }]
            })(<Input placeholder="Please enter description" size="large" />)}
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
            onClick={handleSubmit}
            size="large"
            icon="check-circle"
          >
            Submit
          </Button>
        </div>
      </Drawer>
    );
  };

  return (
    <Mutation mutation={createCardMutation}>
      {({ loading, error }) => {
        if (loading) return <Loader />;

        if (error) return <p>Error: {error.message}</p>;

        return (
          <div className="w-full p-4 pl-0 py-0">
            <Button
              type="dashed"
              onClick={() => setVisiblity(true)}
              className="w-full"
            >
              Create a new Card
              {drawerNode()}
            </Button>
          </div>
        );
      }}
    </Mutation>
  );
};

export default withApollo(Form.create()(CreateCardForm));
