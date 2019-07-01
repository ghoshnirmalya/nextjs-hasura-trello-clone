import React, { Component, useState } from 'react'

import { Form, Button, Input, Card } from 'antd'
import Router from 'next/router'

const SignUp = props => {
  const [isLoading, setIsLoading] = useState(false)
  const { getFieldDecorator } = props.form
  const fetchToken = async values => {
    try {
      const response = await fetch(`${process.env.AUTH_URL}/authentication`, {
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

      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)

      console.error(error)
    }
  }

  const handleSubmit = () => {
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setIsLoading(true)

        try {
          const response = await fetch(`${process.env.AUTH_URL}/user`, {
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

          if ([200, 201].indexOf(response.status) > -1) {
            await fetchToken(values)
          } else {
            setIsLoading(false)
          }
        } catch (error) {
          setIsLoading(false)

          console.error(error)
        }
      }
    })
  }

  return (
    <div className="w-full">
      <Form layout="vertical" onSubmit={handleSubmit}>
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
            <Input placeholder="Please enter email" size="large" type="email" />
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
          Sign Up
        </Button>
      </div>
    </div>
  )
}

export default Form.create()(SignUp)
