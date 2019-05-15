const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options['api-mapper-nuxt-module'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'api-mapper-nuxt-module.js',
    options
  })
}

module.exports.meta = require('../package.json')
