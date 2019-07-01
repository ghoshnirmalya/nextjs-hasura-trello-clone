import React from 'react'
import { Spin } from 'antd'

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Spin tip="Loading..." size="large" />
    </div>
  )
}

export default Loader
