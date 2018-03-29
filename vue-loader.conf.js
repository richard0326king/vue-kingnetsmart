var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction ?
      config.build.productionSourceMap : config.dev.cssSourceMap,
    extract: isProduction
  }),
  // autoprefixer配置
  postcss: [require('autoprefixer')({
      browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8']
    }),
    // px2rem配置  设置值为37.5，这样750的设计稿量出多少px就写多少px就行。
    require('postcss-px2rem')({
      remUnit: 37.5
    })
  ]
}
