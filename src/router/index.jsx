
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'page/Home';
import * as Pages from './pages';
let routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={Pages.About} />
        </Switch>
    )
}

export default routes