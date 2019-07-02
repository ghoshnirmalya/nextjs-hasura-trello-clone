import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Content } = Layout

class ContentComponent extends Component {
  render() {
    return (
      <div className="m-8">
        <div className="p-8 my-0 mx-auto">{this.props.children}</div>
      </div>
    )
  }
}

ContentComponent.propTypes = {
  children: PropTypes.node,
}

export default ContentComponent
