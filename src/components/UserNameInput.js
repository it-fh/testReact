import React, { Component } from 'react'

export default class UserNameInput extends Component {
    constructor(){
        super();
        this.state  = {
            value:''
        }
    };
    componentDidMount(){
        this.setState({
            value:localStorage.getItem('username')
        })
        this.setState({
            value:this.state.value+1
        })
    } 
    render() {
        console.log(1);
        return (
           <input defaultValue={this.state.value} />
        )
    }
}
