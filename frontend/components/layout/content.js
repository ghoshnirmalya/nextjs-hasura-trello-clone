import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Content } = Layout

class ContentComponent extends Component {
  render() {
    return (
      <div className="m-8">
        <div className="min-h-screen bg-white p-8 border border-solid border-gray-300 rounded">
          {this.props.children}
        </div>
      </div>
    )
  }
}

ContentComponent.propTypes = {
  children: PropTypes.node,
}

export default ContentComponent
