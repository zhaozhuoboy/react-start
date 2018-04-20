# 记录一下搭建中遇到的问题

 [ ]1、 webpack 4.X 好像还是有点问题的，百度了一下貌似webpack-dev-middleware 版本还没有兼容 命令行里会有 ` Tapable.plugin is deprecated. Use new API on `.hooks` instead` 提示，先记录一下，以后再整。先换成webpack3.X

 [ ]2、 项目跑起来后控制台还有一个报错 `only one instance of babel-polyfill is allowed`

 [x]3、 热更新会刷新浏览器没有真正热模块更新 [参考](http://www.css88.com/doc/webpack/api/hot-module-replacement/)

>如果已经通过 HotModuleReplacementPlugin 启用了模块热替换(Hot Module Replacement)，则它的接口将被暴露在 module.hot 属性下面。

在`index.js`文件中添加下面代码,当修改文件之后会局部热更新，浏览器不会刷新

```js
if (module.hot) {
    module.hot.accept()
}
```

[x] 4、 HtmlWebpackPlugin插件，生成一个模板html文件到生产目录。

``` js
new HtmlWebpackPlugin({
            title: 'React-Starter',
            template: path.resolve(__dirname, '../src/index.html'),
            favicon: path.resolve(__dirname,'../src/favicon.ico'),//给网站加上小图标
            minify: {
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
```
在模板html中的title使用`HtmlWebpackPlugin`配置项中的title，在html中这样用 `<%= htmlWebpackPlugin.options.title %>`


#### 懒加载 

[参考](https://reacttraining.com/react-router/web/guides/code-splitting)

