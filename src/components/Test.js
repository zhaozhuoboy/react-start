/**
* 
* Created by zhaozhuo on 2018/04/20 09:36:32
*
*/

import React from 'react';
import './index';


export default class Test extends React.Component {
    constructor(props) {
       super(props);
    }
    componentDidMount(){

    }
    render() {
        return (
            <div className="test-comp">
                <h3>Hello React</h3>
                <div className="avator">
                </div>
            </div>
        );
    }
}