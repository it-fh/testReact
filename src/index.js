import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'immutable'; 


// function request(url){
//   return fetch(url).then(response=>response.json())
//  }
fetch('/9418199?from=search&seid=2072426421288666589').then(function(res) { 
    console.log(res);
}) 

class App extends React.Component{
    constructor(){
        super();
        this.amountRef = React.createRef();
    }
    state = {counter:Map({number:0})};
    add = _=>{
        let oldState = this.state;
        let amount = parseInt(this.amountRef.current.value);
        // this.setState({
        //     ...oldState,counter:amount==0?oldState.counter:{number:oldState.counter.number+amount}
        // })
 

        // 这样写浅比较都是新对象，就都会渲染，这是可以采用immutable
        // this.setState({
        //     counter:{number:oldState.counter.number+amount}
        // })


        // 改用immutable
        oldState.counter = oldState.counter.set('number',oldState.counter.get('number')+amount);
        this.setState(oldState);
    } 
    render(){
        console.log('App');
        return (
            <div>
                <Counter counter={this.state.counter}/>
                <input ref={this.amountRef} /> 
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}




class Counter extends React.PureComponent{
    render(){
        console.log('Counter render');
        return(
            <>
        {this.props.counter.get('number')}
            </>
        )
    }
}


  ReactDOM.render(<App />, document.getElementById('root'))