
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'page/Home';
import About from 'page/About';
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