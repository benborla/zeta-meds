import React, { Component } from 'react'
import { logout, isLogin } from '../utils'
import { Link } from 'react-router-dom'
import { publicRoutes } from '../routes/PublicRoutes'
class PageNotFound extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout()
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div>
                <h1>Page not found</h1>
                <Link to={publicRoutes.home}>Go home</Link>
            </div>
        )
    }
}

export default PageNotFound
