/**
* 
* Created by zhaozhuo on 2018/04/19 16:16:30
*
*/

import React from 'react';
import Home from 'page/Home';


export default class App extends React.Component {

    constructor(props) {
       super(props);
    }

    componentDidMount(){

    }
    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}