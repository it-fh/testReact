import React, { Component } from 'react'

export default function (Comp) {
    return class extends Component{
        componentWillMount(){
            this.start = Date.now();
        }
        componentDidMount(){
            console.log(Date.now()-this.start);
        }
        render(){
            console.log(this.props.name);
            return <Comp {...this.props} />
        }
    }
}
