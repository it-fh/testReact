import React, { Component } from 'react'

const foo = Cmp =>props=>
        (    <div style={{border:'1px solid red',padding:'3px'}}>
        <Cmp {...props}/>
    </div>)
         
         const fo1 = Cmp =>props=>
         (  <div style={{border:'1px solid green',padding:'3px'}}>
         <Cmp {...props}/>
     </div>)               
            


function Child(props){
    return <div>Child {props.name}</div>
}

const Foo = fo1(foo(Child));
export default class HocPage extends Component{
    render(){
        return (
            <div>
                <h3>HocPage</h3>
                <Foo name='msg' />
            </div>
        )
    }
}