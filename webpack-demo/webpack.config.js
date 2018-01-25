/**
 * Created by Johnnaling on 2018/1/23.
 */
const path = require('path');
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin=require('purifycss-webpack');
const webpack=require('webpack');
const index = require('./webpack_config/entry_webpack.js');
module.exports={
    entry: index,
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://127.0.0.1:8081/'
    },
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8081',
        compress:true
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('css/index.css'),
        new UglifyJsPlugin(),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new webpack.BannerPlugin('Hello World!'),
         new webpack.ProvidePlugin({
             $: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['jquery', 'vue'],
            filename: "assets/js/[name].js",
            minChunks: 2
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                //use:['style-loader', 'css-loader']
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:'css-loader',
                        options:{importLoaders:1}
                    },'postcss-loader'] 
                })
            },{
                test: /\.(jpg|png|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'img/'
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },{
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    use:[{
                        loader:'css-loader'
                    },{
                        loader:'sass-loader'
                    }],
                    fallback:'style-loader'
                })
            },{
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'env', 'react'
                        ]
                    }
                }
            }
        ]
    }

};
