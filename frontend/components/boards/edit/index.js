import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { graphql, withApollo, Query } from "react-apollo";
import {
  Form,
  Button,
  Input,
  PageHeader,
  Typography,
  Card,
  Row,
  Col,
  Tabs
} from "antd";
import styled from "styled-components";
import Router from "next/router";
import Link from "next/link";

import Loader from "../../common/loader";

const fetchBoardQuery = gql`
  query($id: uuid!) {
    board_by_pk(id: $id) {
      id
      name
    }
  }
`;
const updateBoardMutation = gql`
  mutation($id: uuid!, $name: String) {
    update_board(where: { id: { _eq: $id } }, _set: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;
const BoardsEdit = props => {
  const handleSubmit = () => {
    props.form.validateFields(async (err, values) => {
      if (!err) {
        await props.client.mutate({
          mutation: updateBoardMutation,
          variables: {
            id: props.id,
            name: values.name
          }
        });

        Router.push("/boards");
      }
    });
  };

  return (
    <Query
      query={fetchBoardQuery}
      variables={{ id: props.id }}
      fetchPolicy="network-only"
    >
      {({ data, error, loading }) => {
        if (loading) return <Loader />;

        if (error) return <p>Error: {error.message}</p>;

        const { name } = data.board_by_pk;

        return (
          <div className="sm:w-full md:w-full lg:w-1/2">
            <div className="border border-solid border-gray-300">
              <PageHeader
                title={
                  <h2 className="text-3xl mb-0 text-gray-700">
                    Create new Project
                  </h2>
                }
              >
                <p className="text-sm mb-0 text-gray-700">
                  You can add a new project by providing the necessary details
                </p>
              </PageHeader>
            </div>
            <div className="mt-8 flex justify-center flex-col ml-auto mr-auto bg-white rounded border border-solid border-gray-300">
              <Tabs defaultActiveKey="details" size="large">
                <Tabs.TabPane tab="Details" key="details">
                  <Card bordered={false}>
                    <Form layout="vertical" onSubmit={handleSubmit}>
                      <Form.Item label="Name">
                        {props.form.getFieldDecorator("name", {
                          rules: [
                            { required: true, message: "Please enter name!" }
                          ],
                          initialValue: name
                        })(
                          <Input placeholder="Please enter name" size="large" />
                        )}
                      </Form.Item>
                    </Form>
                  </Card>
                </Tabs.TabPane>
              </Tabs>
            </div>
            <div className="mt-8 flex justify-center flex-col ml-auto mr-auto">
              <div className="flex justify-end">
                <div className="mr-4">
                  <Link href={`/boards`} as={`/boards`}>
                    <Button
                      loading={loading}
                      size="large"
                      icon="close-circle"
                      type="danger"
                    >
                      Cancel
                    </Button>
                  </Link>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={handleSubmit}
                  loading={loading}
                  size="large"
                  icon="check-circle"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default withApollo(Form.create()(BoardsEdit));
