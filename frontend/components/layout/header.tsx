import React, { Component } from 'react'
import { Layout } from 'antd'
import Link from 'next/link'
import { Icon } from 'antd'

const { Header } = Layout

class HeaderComponent extends Component {
  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <div className="flex flex-row-reverse items-center h-full px-4 border border-solid border-gray-300">
          <Link href={'/boards'} as={'/boards'}>
            <a>
              <Icon type="hdd" /> All Boards
            </a>
          </Link>
        </div>
      </Header>
    )
  }
}

export default HeaderComponent
