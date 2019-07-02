import React, { Component } from 'react'
import { Card, Tabs } from 'antd'

import SignIn from '../../authentication/sign-in'
import SignUp from '../../authentication/sign-up'

class ContentComponent extends Component {
  render() {
    return (
      <div className="flex min-h-screen">
        <div className="w-full">
          <Card className="h-screen">
            <div className="flex justify-center mt-16">
              <div className="w-2/3">
                <Tabs
                  defaultActiveKey="signIn"
                  onChange={key => console.log(key)}
                >
                  <Tabs.TabPane tab="Sign In" key="signIn">
                    <SignIn />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Sign Up" key="signUp">
                    <SignUp />
                  </Tabs.TabPane>
                </Tabs>
                {this.props.children}
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default ContentComponent
