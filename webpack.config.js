const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    resolve:  {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@pages': path.resolve(__dirname, 'src/pages/')
        }
    },
    module: {
        rules: [
            {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
            }
            },
            {
                test: /\.html$/,
                use:[
                    {
                    loader:'html-loader'
                }
            ]
            },
            {
                test: /\.(css)$/,
                use:[
                "css-loader"
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
    ],
    devServer:{
        //contentBase: path.join(__dirname, 'dist'),
        /*static: {
            directory: path.join(__dirname, 'public'),
            },
        compress: true,
        port: 3005,*/
        historyApiFallback: true,
    }
}