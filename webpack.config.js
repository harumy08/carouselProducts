//Archivo de configuración webpack
const path = require('path');
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin');//Simplifica la creación de archivos HTML para servir a los paquetes de paquetes web.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//El complemento mini-css-extract admite la recarga en caliente de archivos css reales en desarrollo.

module.exports = {
    mode: 'development',//se especifica el mode para npm run start
    entry: './src/index.js',//se indica el archivo de entrada
    output:{//configuración para la salida de mi App
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    resolve:  {
        extensions: ['.js', '.jsx'],
        alias: {//Dentro de las reglas se crearon alias para simplificar las llamadas a componentes - estilos,etc
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
        }
    },
    module: {
        rules: [
            {//Le indico que sera babel el encargo de convertir mi JS para la facil lectura del Navegador
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
            }
            },
            {//Le indico que sera html-loader el encargo de leer mis HTML
                test: /\.html$/,
                use:[
                    {
                    loader:'html-loader'
                }
            ]
            },
            {
                test: /\.(css|scss)$/,//Le indico que seran esta serie de loaders los encargados de leer mis hojas de estilo
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"},
                    {loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: () => [
                                autoprefixer
                            ]
                        }
                    }
                    },
                ]
            },
            {
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset'
			}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({//Les brindo una carpeta public y un archivo de salida a mis archivos HTML
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({//Les brindo una carpeta public y un archivo de salida a mis archivos de hojas de estilo y que sea compilado en .css
            filename:'[name].css'
        }),
    ],
    devServer:{
        historyApiFallback: true,
    }
}