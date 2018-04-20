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


5、最开始用webpack4的时候遇到第一个问题，就把webpack降级到3.8.1版本了，然后就会报下面的错误。
![tim 20180420103018](https://user-images.githubusercontent.com/15223986/39027738-de813250-4485-11e8-9e1b-9b7234de30b4.jpg)

查了官方的issue [#295](https://github.com/webpack/webpack-dev-middleware/issues/295)，最新的`webpack-dev-middleware`插件是要搭配webpack4.x使用的。然后降级`webpack-dev-middleware`问题解决。

![image](https://user-images.githubusercontent.com/15223986/39027802-2d92c976-4486-11e8-9559-b539e6e40187.png)



#### 懒加载 

[参考](https://reacttraining.com/react-router/web/guides/code-splitting)

