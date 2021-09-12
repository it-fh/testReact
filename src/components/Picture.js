import React, { Component } from 'react'
import MouseTracker from './MouseTracker'
function withMouseTracker(Com){
    return props=>(<MouseTracker >
        {
data=><Com {...data}/>
        }
    </MouseTracker>)
}
 class Picture extends Component {
    render() {
        return (
            <>
            <img src='http://localhost:3000/1359040179.jpeg' />
            <p>请移动鼠标获取坐标:</p>
            x={this.props.x},y={this.props.y}
            </>
        )
    }
}
export default withMouseTracker(Picture)
