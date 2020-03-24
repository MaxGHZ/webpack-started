const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWbpacksPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
 
    mode: 'development',
    optimization: {
        minimizer: [new OptimizeCssAssetWbpacksPlugin()]
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'                
                ]

            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options:{minimize:false}
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]   
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
            
        }),
        new CleanWebpackPlugin()
    ]
}
 