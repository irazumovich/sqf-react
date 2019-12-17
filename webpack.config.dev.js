const path = require('path');
const autoprefixer = require('autoprefixer');

const WebpackBaseConfig = require('./webpack.config');

module.exports = {
    mode: 'development',
    ...WebpackBaseConfig,

    module: {
        ...WebpackBaseConfig.module,
        rules: [
            ...WebpackBaseConfig.module.rules,
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 2 }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [path.join(__dirname, 'src', 'scss')]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },

    plugins: [...WebpackBaseConfig.plugins],

    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 1234,
        disableHostCheck: true,
        hot: true,
        historyApiFallback: true
    }
};
