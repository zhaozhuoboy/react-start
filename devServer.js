let path = require('path');
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
    publicPath:'/',
    noInfo: true,
    stats: {
        colors: true,
    }
}));

//热更新
app.use(webpackHotMiddleware(compiler));

app.set('port', parseInt(process.env.PORT));

app.listen(app.get('port'),function(err){
    if (err) {
        console.log(err);
    }
    console.log('Port is ' + app.get('port') + ', please wait to build ...');
})