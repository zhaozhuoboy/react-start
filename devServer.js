let path = require('path');
let config = require('./config/config.js');
let chalk = require('chalk');
let express = require('express');
let webpack = require('webpack');
let webpackConfig = require('./scripts/webpack.dev');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');


let compiler = webpack(webpackConfig);

let app = express();
app.use(express.static(path.join(__dirname, '/')));

//服务器中间件
app.use(webpackDevMiddleware(compiler,{
    noInfo: true,
    stats: {
        colors: true,
    },
    publicPath: webpackConfig.output.publicPath,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    }
}));

//热更新
app.use(webpackHotMiddleware(compiler));

app.set('port', parseInt(config.dev.port));

app.listen(app.get('port'),function(err){
    if (err) {
        console.log(chalk.red(err));
    }
    console.log(chalk.green('App is running at http://localhost:' + app.get('port') + ', please wait to build --->>>'));
})