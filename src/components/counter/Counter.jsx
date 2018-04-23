import React from 'react';

export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    add = () => {
        this.setState({
            count:this.state.count +1
        })
    }
    subtract = () => {
        this.setState({
            count: this.state.count-1
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.add}>+1</button>
                <button onClick={this.subtract}>-1</button>
            </div>
        )
    }
}