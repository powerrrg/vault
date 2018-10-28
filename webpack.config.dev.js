var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var initial = require('postcss-initial');

module.exports = {
    devtool: 'eval',
    entry: ['webpack-hot-middleware/', './src/index'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            },
            __DEV__: true
        })
    ],
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.(js)x?$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'postcss-loader'
                ],
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')]
            }
        ]
    }
};
