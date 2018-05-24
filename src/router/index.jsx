
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from 'src/utils/asyncComponent';
import Home from 'page/Home';
const About = asyncComponent(() => import(/*webpackChunkName:"about"*/'page/About'))
// import * as Pages from './pages';
let routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
        </Switch>
    )
}

export default routes