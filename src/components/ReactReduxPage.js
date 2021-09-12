import React, { Component } from 'react'
import {connect} from 'react-redux'
export default connect(
    //  mapStateToProps  把store中的state映射到该组件的props上
    state=>({num:state}),
    // mapDispatchToProps  把dispatch映射到props上
    { // 使用这种形式不能直接使用dispatch来获取值
        MINUS:()=>({type:'MINUS'}),
        ADD:()=>({type:'ADD'})
    }
)(
    class ReactReduxPage extends Component {
        render() {
            console.log(this.props);
            return (
                <div>
                    {this.props.num}
                    {/* <button onClick={()=>this.props.dispatch({type:'ADD'})}>加1</button>
                    <button onClick={()=>this.props.dispatch({type:'MINUS'})}>减1</button> */}
                       <button onClick={this.props.ADD}>加1</button>  
                      <button onClick={this.props.MINUS}>减1</button> 
                </div>
            )
        }
    }
)
