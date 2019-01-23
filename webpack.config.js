const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode:'production',                          // 使用 production 模式
    entry: "./src/main.js",                     // 指定项目的入口
    output: {                                   // 指定输出文件名与路径
        path: path.resolve(__dirname,'dist'),
        filename: "[name].js"
    },
    devtool:'inline-source-map',                    // 使用 source map（指明不同文件的错误）
    devServer:{                                     // 配置服务器
        contentBase: path.join(__dirname,"src"),    // 项目访问的路劲
        hot: true,                                  // 热部署
        port:3000                                   // 端口
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},   // css 加载的loader
            {test: /\.(png|svg|jpg|gif)$/,use:['file-loader']},  // 图片的 loader
            {test: /\.(woff|woff2|eot|ttf|otf)$/,use:['file-loader']},  //字体的 loader
            {test: /\.xml$/,use:['xml-loader']},    // xml 解析的loader
            {test: /\.json$/,use:['json-loader']}   // json 解析的 loader
        ]
    },
    plugins:[                                       // 配置使用的插件
        new CleanWebpackPlugin('[dist]'),           // 清空缓存插件
        new HtmlWebpackPlugin({                     // 初始化页面插件
            title:'my webpack study',
            filename:'index.html',                  // 主页文件
            template:'src/index.html',              // 模板页面
            inject:true
        }),
        new webpack.NamedModulesPlugin(),           
        new webpack.HotModuleReplacementPlugin()    // 热部署插件
    ]
};