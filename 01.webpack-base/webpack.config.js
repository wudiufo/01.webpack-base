const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') //导入在内存中生成index页面的插件

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), //源文件
    filename: 'index.html' //生成的内存中首页的名称
})



// 向外暴露一个打包的配置对象
// 因为webpack是基于Node构建的，所以webpack支持所有的Node API和语法
module.exports = {
    mode: 'development', //development  production
    // 在webpack 4.x 中，有一个很大的特性，就是约定大于配置，约定，默认的打包入口路径是src->index.js
    plugins: [
        htmlPlugin
    ]
}

// 行不行？ 目前不行
// 因为这是es6中向外导出模块的API与之对应的是import ** from '路径标识符'
// export default {}
// 哪些特性Node支持呢？
// 如果chrome浏览器支持哪些，则Node就支持哪些