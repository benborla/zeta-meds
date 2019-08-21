import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PublicRoute from '../routes/PublicRoutes'
import Home from './Home'
import Register from './Register'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PublicRoute restricted={false} component={Home} path="/" exact />
                    <PublicRoute restricted={false} component={Register} path="/register" exact />
                </Switch>
            </BrowserRouter>
        )
    }
}



