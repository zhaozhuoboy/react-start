/**
* 
* Created by zhaozhuo on 2018/04/19 16:16:30
*
*/

import React from 'react';
import { Route,Link} from 'react-router-dom';
import routes from './router/index';

export default class App extends React.Component {

    constructor(props) {
       super(props);
    }

    componentDidMount(){

    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="home">home</Link></li>
                    <li><Link to="about">about</Link></li>
                </ul>
                {
                    routes()
                }
            </div>
        );
    }
}