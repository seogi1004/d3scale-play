const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const clientPath = path.resolve(__dirname, '.');
    const outputPath = path.resolve(__dirname, './dist');

    return {
        mode: !env ? 'development' : env,
        entry: {
            vendors: [ 'd3-scale', 'konva' ],
            app: clientPath + '/index.js'
        },
        output: {
            path: outputPath,
            filename: '[name].js'
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors'
                    }
                }
            }
        },
        devServer: {
            contentBase: outputPath,
            publicPath: '/',
            host: '127.0.0.1',
            port: 9000,
            inline: true,
            hot: false
        },
        module: {
            rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }]
            }]
        },
        resolve: {
            extensions: [ '.js' ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Project Demo',
                minify: {
                    collapseWhitespace: true
                },
                hash: true,
                template: './index.html'
            })
        ]
    }
}