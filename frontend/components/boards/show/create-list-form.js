import React, { Component, useState } from "react";
import gql from "graphql-tag";
import { graphql, withApollo, Mutation } from "react-apollo";
import { Drawer, Form, Button, Input, Icon } from "antd";
import Link from "next/link";

import Loader from "../../common/loader";

const createListMutation = gql`
  mutation($boardId: uuid!, $position: numeric, $name: String) {
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
`;
const CreateListForm = props => {
  const [visible, setVisibility] = useState(false);
  const getPositionOfNewList = () => {
    const bufferForEachPosition = 1024;
    let positionOfLastList = props.lists[props.lists.length - 1]
      ? props.lists[props.lists.length - 1].position
      : 1;

    return positionOfLastList + bufferForEachPosition;
  };
  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFields(async (err, values) => {
      if (!err) {
        await props.client.mutate({
          mutation: createListMutation,
          variables: {
            boardId: props.boardId,
            position: getPositionOfNewList(),
            name: values.name
          }
        });

        setVisibility(false);
      }
    });
  };
  const drawerNode = () => {
    const { getFieldDecorator } = props.form;

    return (
      <Drawer
        destroyOnClose
        title="Create a new List"
        width={720}
        onClose={() => setVisibility(false)}
        visible={visible}
      >
        <Form layout="vertical" onSubmit={handleSubmit}>
          <Form.Item label="Name">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please enter name!" }]
            })(<Input placeholder="Please enter name" size="large" />)}
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
    <Mutation mutation={createListMutation}>
      {({ loading, error }) => {
        if (loading) return <Loader />;

        if (error) return <p>Error: {error.message}</p>;

        return (
          <Button
            type="dashed"
            onClick={() => setVisibility(true)}
            size="large"
            className="my-4"
            style={{ minWidth: "300px" }}
          >
            <Icon type="plus" /> Create a new List
            {drawerNode()}
          </Button>
        );
      }}
    </Mutation>
  );
};

export default withApollo(Form.create()(CreateListForm));
