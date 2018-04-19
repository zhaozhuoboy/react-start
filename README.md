# 记录一下搭建中遇到的问题

1、 webpack 4.X 好像还是有点问题的，百度了一下貌似webpack-dev-middleware 版本还没有兼容 命令行里会有 ` Tapable.plugin is deprecated. Use new API on `.hooks` instead` 提示，先记录一下，以后再整。先换成webpack3.X

2、 项目跑起来后控制台还有一个报错 `only one instance of babel-polyfill is allowed`

3 热更新会刷新浏览器没有真正热模块更新



