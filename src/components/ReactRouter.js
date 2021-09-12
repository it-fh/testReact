import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
export default class ReactRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to='/'>首页</Link>
                    <Link to='/user'>用户中心</Link>
                        <Route exact path='/'
                            component={HomePage}
                            // children={()=><div>children</div>}
                            render={() => <div>render</div>}
                        />
                        <Route path='/' component={UserPage} />
                        <Route component={EmptyPage}></Route>
                </Router>
            </div>
        )
    }
}
class HomePage extends Component {
    render() {
        return (
            <h3>HomePage</h3>
        )
    }
}
class UserPage extends Component {
    render() {
        return (
            <h3>UserPage</h3>
        )
    }
}

class EmptyPage extends Component {
    render() {
        return (
            <div>EmptyPage-404</div>
        )
    }
}