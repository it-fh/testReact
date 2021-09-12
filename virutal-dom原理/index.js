// import React from 'react';
// import ReactDOM from 'react-dom';
import React from './react';
import ReactDOM from './react-dom';

// let element = React.createElement('h1',{
//   className:'title',
//   style:{
//     color:'red',
//     fontSize:'50px' 
//   }
// },'hello',React.createElement('span',null,'world'))

// function Welcome(props){
//   return React.createElement('h1',{id:'welcome'},props.name,props.age)
// }
// let element = React.createElement(Welcome,{name:'feng',age:10})

class Welcome extends React.Component{
  render(){
    return React.createElement('h1',{id:'welcome'},this.props.name,this.props.age)
  }
}
let element = React.createElement(Welcome,{name:'feng',age:110})
ReactDOM.render(element,document.getElementById('root'));