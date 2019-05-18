import React, { Component } from 'react'
import { Form, Button, Input, Card } from 'antd'
import Router from 'next/router'
import nextCookie from 'next-cookies'

class SignIn extends Component {
  fetchToken = async values => {
    try {
      const response = await fetch('http://localhost:3030/authentication', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          strategy: 'local',
          email: values.email,
          password: values.password,
        }),
      })
      const data = await response.json()

      document.cookie = `token=${data.accessToken};path=/`

      Router.push('/boards')
    } catch (error) {
      console.error(error)
    }
  }

  handleSubmit = () => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const response = await fetch('http://localhost:3030/user', {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
              role: 'user',
            }),
          })
          const data = await response.json()

          document.cookie = `email=${data.email};path=/`
          document.cookie = `x-hasura-role=${data['x-hasura-role']};path=/`
          document.cookie = `x-hasura-user-id=${
            data['x-hasura-user-id']
          };path=/`

          await this.fetchToken(values)
        } catch (error) {
          console.error(error)
        }
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className="w-1/3">
        <Card>
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Form.Item label="Email">
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: 'Please enter email!',
                  },
                ],
                initialValue: 'admin@admin.com',
              })(
                <Input
                  placeholder="Please enter email"
                  size="large"
                  type="email"
                />
              )}
            </Form.Item>
            <Form.Item label="Password">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please enter password!' }],
                initialValue: 'password',
              })(
                <Input
                  placeholder="Please enter password"
                  size="large"
                  type="password"
                />
              )}
            </Form.Item>
          </Form>
          <div className="flex justify-end">
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.handleSubmit}
              size="large"
              icon="check-circle"
            >
              Sign In
            </Button>
          </div>
        </Card>
      </div>
    )
  }
}

export default Form.create()(SignIn)
