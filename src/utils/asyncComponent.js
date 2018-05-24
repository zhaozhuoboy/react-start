import React from 'react';

function asyncComponent (importComponent) {
    class AsyncComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={
                component:null
            }
        }
        async componentDidMount(){
            const com = await importComponent();
            console.log('async component --->',com)
            this.setState({
                component:com.default
            })
        }
        render(){
            const Component = this.state.component;
            return Component ? <Component {...this.props}/> : null
        }
    }
    return AsyncComponent
}

export default asyncComponent;