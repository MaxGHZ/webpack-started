const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWbpacksPlugin = require('optimize-css-assets-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')



module.exports = {
 
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCssAssetWbpacksPlugin()]
    },
    output: {
        filename: 'main.[contentHash].js',
    },
    module: {
        rules:[
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [
                    "babel-loader"
                ]                                       
            },
            {
                test: /\.css$/,
                exclude: /styless\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styless\.css$/,
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
                            name: 'assets/images/[name].[ext]'
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
            filename: 'main.[contentHash].css',
            ignoreOrder: false
            
        }),
        new MinifyPlugin(),
        new CleanWebpackPlugin(),
    ]
}
 