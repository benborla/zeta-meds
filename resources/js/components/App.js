import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { PublicRoute, publicRoutes } from '../routes/PublicRoutes'
import Home from './Home'
import Register from './Register'
import PageNotFound from './PageNotFound'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PublicRoute restricted={false} component={Home} path={publicRoutes.home} exact />
                    <PublicRoute restricted={false} component={Register} path={publicRoutes.register} exact />
                    <PublicRoute restricted={false} component={PageNotFound} exact />
                </Switch>
            </BrowserRouter>
        )
    }
}



