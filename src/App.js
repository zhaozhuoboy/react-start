/**
* 
* Created by zhaozhuo on 2018/04/19 16:16:30
*
*/

import React from 'react';
import { Route,Link} from 'react-router-dom';
import routes from './router/index';
import { Provider } from 'react-redux';
import store from './store/index';

export default class App extends React.Component {

    constructor(props) {
       super(props);
    }

    componentDidMount(){

    }
    render() {
        return (
            <Provider store={store}>
                <div className="app-root">
                    <ul>
                        <li><Link to="home">home</Link></li>
                        <li><Link to="about">about</Link></li>
                    </ul>
                    {
                        routes()
                    }
                </div>
            </Provider>
        );
    }
}