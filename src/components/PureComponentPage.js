import React, { PureComponent } from 'react'

export default class PureComponentPage extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    setCount = ()=>{
        this.setState({count:100})
    }
//  shouldComponentUpdate(nextProps,nextState){
//      return nextState.count !== this.state.count
//  }
    render() {
        console.log('render');
        return (
            <div>
                {this.state.count}
                <button onClick={this.setCount} >{this.state.count}</button>
            </div>
        )
    }
}
