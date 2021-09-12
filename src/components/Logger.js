import React, { Component } from 'react'
import withLogger from './withLogger'
 class Logger extends Component {
    render() {
        return (
            <div>
                Logger
                {this.props.name}
            </div>
        )
    }
}
export default withLogger(Logger)
