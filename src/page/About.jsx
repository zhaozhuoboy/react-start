/**
* 
* Created by zhaozhuo on 2018/04/20 09:36:32
*
*/

import React from 'react';


export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        console.log(this.props)
        return (
            <div className="about">
                About page
            </div>
        );
    }
}