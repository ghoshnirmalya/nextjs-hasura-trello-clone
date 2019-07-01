/* eslint-disable */
require('dotenv').config()

const withCss = require('@zeit/next-css')
const withImages = require('next-images')
const withTypescript = require('@zeit/next-typescript')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const withOffline = require('next-offline')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withBundleAnalyzer(
  withOffline(
    withTypescript(
      withImages(
        withCss({
          target: 'server',
          webpack: config => {
            config.plugins = config.plugins || []

            config.plugins = [
              ...config.plugins,

              // Read the .env file
              new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true,
              }),
            ]

            return config
          },
        })
      )
    )
  )
)
