import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Content } = Layout

class ContentComponent extends Component {
  render() {
    return (
      <div className="m-8">
        <div className="p-8 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-0 mx-auto">
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
