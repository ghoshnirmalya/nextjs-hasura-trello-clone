import React, { Component, useState } from "react";
import { Form, Button, Input, Alert } from "antd";
import Router from "next/router";

const SignIn = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFields(async (err, values) => {
      if (!err) {
        setIsLoading(true);

        try {
          const response = await fetch(`${process.env.AUTH_URL}/login`, {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password
            })
          });

          if ([200, 201].indexOf(response.status) > -1) {
            const data = await response.json();

            document.cookie = `userId=${data.id};path=/`;
            document.cookie = `email=${data.email};path=/`;
            document.cookie = `token=${data.token};path=/`;

            setError("");

            Router.push("/boards");
          } else {
            const data = await response.json();

            setError(data.error);

            setIsLoading(false);
          }
        } catch (error) {
          setError(error);
          setIsLoading(false);

          console.error(error);
        }
      }
    });
  };

  return (
    <>
      {error && <Alert message={error} type="error" />}
      <div className="mt-4">
        <Form layout="vertical" onSubmit={handleSubmit}>
          <Form.Item label="Email">
            {getFieldDecorator("email", {
              rules: [
                {
                  required: true,
                  message: "Please enter email!"
                }
              ],
              initialValue: ""
            })(
              <Input
                placeholder="Please enter email"
                size="large"
                type="email"
              />
            )}
          </Form.Item>
          <Form.Item label="Password">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please enter password!" }],
              initialValue: ""
            })(
              <Input
                placeholder="Please enter password"
                size="large"
                type="password"
              />
            )}
          </Form.Item>
          <div className="flex justify-end mt-12">
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleSubmit}
              size="large"
              icon="check-circle"
              block
              loading={isLoading}
            >
              Sign In
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Form.create()(SignIn);
