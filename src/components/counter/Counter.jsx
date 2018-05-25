import React from 'react';
import { connect} from 'react-redux';
import * as type from '../../constants/actionType';

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    add = () => {
        // this.setState({
        //     count:this.state.count +1
        // })
        this.props.dispatch({
            type:type.ADD,
            data:{
                name:"zhaozhuo",
                desc:"这里可以加上需要变化的数据导reducer里处理"
            }
        })
    }
    subtract = () => {
        // this.setState({
        //     count: this.state.count-1
        // })
        this.props.dispatch({
            type: type.JIAN,
            data: {
                name: "zhaozhuo",
                desc: "触发减1"
            }
        })
    }
    componentDidMount(){
        console.log('conter DidMount-->',this.props)
    }
    render(){
        return (
            <div>
                <h1>{this.props.conter}</h1>
                <button onClick={this.add}>+1</button>
                <button onClick={this.subtract}>-1</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log('mapStateToProps---->',state)
    return {
        conter:state.conter
    }
}

export default connect(mapStateToProps)(Counter);