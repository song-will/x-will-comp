const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack  = require('webpack')
const resolve = require('./utils').resolve
const packageName = require('../package.json').name;

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].js',
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        publicPath: '/'
        // jsonpFunction: `webpackJsonp_${packageName}`,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue', 'json'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg|webp)$/,
                type: "asset/resource",
                generator: {
                    filename: "image/[name].[hash:8][ext]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    experiments: { topLevelAwait: true },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            name: 'compOne',
            filename: 'comp1.js',
            // library: { type: "var", name: "app_comp1_expose" },
            remotes: {
            },
            exposes: {
                './TestComp1': './src/components/TestComp1.vue'
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
            }
        }),
        // 重新构建前，删除dist目录文件
        new CleanWebpackPlugin(),
        // 生成新的html文件
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: resolve('index.html'),
            chunks: ['app_comp1_expose','main'],
            chunksSortMode: "manual"
        }),
        new VueLoaderPlugin()
    ]
}