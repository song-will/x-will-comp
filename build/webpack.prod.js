const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const resolve = require('./utils').resolve

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: resolve('dist')
    },
    optimization: {
        minimize: true
    }
})