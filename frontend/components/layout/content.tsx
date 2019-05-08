import React, { Component } from 'react'

class ContentComponent extends Component {
  render() {
    return (
      <div className="m-8">
        <div
          className="overflow-hidden"
          style={{ height: 'calc(100vh - 130px)' }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default ContentComponent
