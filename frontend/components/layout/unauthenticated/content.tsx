import React, { Component } from 'react'

class ContentComponent extends Component {
  render() {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          minHeight: '100vh',
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ContentComponent
