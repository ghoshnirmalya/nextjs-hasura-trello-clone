/* eslint-disable */
const withCss = require('@zeit/next-css')
const withImages = require('next-images')
const withTypescript = require('@zeit/next-typescript')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withTypescript(
  withImages(
    withCss({
      target: 'serverless',
    })
  )
)
