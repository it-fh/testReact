import React,{Component} from 'react';
import store  from '../store';
import {bindActionCreateors} from '../redux'
import actions from '../store/actions/counter2'

let boundActions = bindActionCreateors(actions,store.dispatch);


export default class ReduxPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            number:store.getState().counter2.number
        }
    }
componentDidMount(){
 store.subscribe(_=>{
   this.setState({
    number:store.getState().counter2.number
   })
 })
}
render(){
        return(
        <>
        <p>{this.state.number}</p>
         <button onClick={boundActions.add2}>add2</button>
        <button onClick={boundActions.minus2}>minus2</button>
        </>
    )
}
}