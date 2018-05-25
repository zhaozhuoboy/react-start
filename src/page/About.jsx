/**
* 
* Created by zhaozhuo on 2018/04/20 09:36:32
*
*/

// import React from 'react';
import axios from 'axios';
import echarts from 'echarts';
import { connect } from 'react-redux';
import { getInfo } from '../action/githubInfoAction'
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:""
        }
    }
    componentDidMount() {
        console.log(this.props)
    }
    // async fetch  () {
    //     const res = await axios.get('https://api.github.com/users/zhaozhuoboy');
    //     console.log(res)
    //     this.setState({
    //         username:res.data.name
    //     })
    // }
    onFetch =() =>{
        this.props.getInfo()
    }
    render() {
        console.log(this.props)
        return (
            <div className="about">
                <h2 style={{textAlign:'center'}}>About page</h2>
                <button style={{ textAlign: 'center' }} onClick={this.onFetch}>Fetch info</button>
                <h3 style={{ color: "green" }}>{this.props.info.name}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('about mapState-->',state)
    return {
        info: state.githubInfo
    }
}

export default connect(mapStateToProps,{
    getInfo
})(About)