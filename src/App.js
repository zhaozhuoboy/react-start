/**
* 
* Created by zhaozhuo on 2018/04/19 16:16:30
*
*/

import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from 'page/Home';
// import About from 'page/About';


import Loadable from 'react-loadable';

const LoadableAbout = Loadable({
    loader: () => import('page/About'),
    loading(){
        return <div>加载中...</div>
    },
})
export default class App extends React.Component {

    constructor(props) {
       super(props);
    }

    componentDidMount(){

    }
    render() {
        return (
            <div>
                <Link to="home">home</Link>
                <Link to="about">about</Link>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/about' component={LoadableAbout} />
                </Switch>
            </div>
        );
    }
}