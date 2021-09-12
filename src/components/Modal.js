import React, { Component } from 'react'


class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError:false
        }
    }
    componentDidCatch(err,info){
        if(err){
            this.setState({
                hasError:true
            })
        }
    }
    render(){
        if(this.state.hasError){
            return '子组件错误'
        }
        return this.props.children
    }
}
function Clock(){
    console.log(null.toString());
    return <div style={{border:'1px solid green',padding:'3px'}}>{Date.now()}</div>
}
function Counter(){
    return <div style={{border:'1px solid red',padding:'3px'}}>计数器</div>
}
export default class Modal extends Component {
    render() {
        return (
            <div  style={{border:'1px solid blue',padding:'3px'}}>
                <ErrorBoundary>
                    <Clock />
                </ErrorBoundary>
                <Counter />
            </div>
        )
    }
}
