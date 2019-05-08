import React, { Component } from 'react'

class ContentComponent extends Component {
  render() {
    return (
      <div
        className="m-8"
        style={{
          minHeight: 'calc(100vh - 130px)',
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ContentComponent
