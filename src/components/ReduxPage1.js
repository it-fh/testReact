import React,{Component} from 'react';
import store  from '../store';
import {bindActionCreateors} from '../redux'
import actions from '../store/actions/counter1'

let boundActions = bindActionCreateors(actions,store.dispatch);

export default class ReduxPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            number:store.getState().counter1.number
        }
    }
componentDidMount(){
 store.subscribe(_=>{
   this.setState({
    number:store.getState().counter1.number
   })
 })
}
render(){
        return(
        <>
        <p>{this.state.number}</p>
         <button onClick={boundActions.add1}>add1</button>
        <button onClick={boundActions.minus1}>minus1</button>
        </>
    )
}
}