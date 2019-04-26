import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Dropdown, Icon, Avatar } from 'antd'
import Router from 'next/router'

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

HeaderComponent.propTypes = {
  children: PropTypes.node,
}

export default HeaderComponent
