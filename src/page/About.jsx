/**
* 
* Created by zhaozhuo on 2018/04/20 09:36:32
*
*/

import React from 'react';
import axios from 'axios';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:""
        }
    }
    componentDidMount() {

    }
    fetch = async () => {
        const res = await axios.get('https://api.github.com/users/zhaozhuoboy');
        console.log(res)
        this.setState({
            username:res.data.name
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className="about">
                <h2 style={{textAlign:'center'}}>About page</h2>
                <button style={{ textAlign: 'center' }} onClick={this.fetch}>Fetch info</button>
                <h3 style={{color:"green"}}>{this.state.username}</h3>
            </div>
        );
    }
}