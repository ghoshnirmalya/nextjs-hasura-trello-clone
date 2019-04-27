import React, { Component } from 'react'
import { Layout } from 'antd'

const { Header } = Layout

class HeaderComponent extends Component {
  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <div className="flex flex-row-reverse items-center h-full px-4 border border-solid border-gray-300" />
      </Header>
    )
  }
}

export default HeaderComponent
