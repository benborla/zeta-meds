import React, { Component } from 'react';
import { logout, isLogin } from '../utils';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../routes/PublicRoutes'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>

                {this.state.isLogin ?
                    <button onClick={() => this.handleLogout()}>Click here to log out</button>
                    : <Link to={publicRoutes.register}>Register</Link>
                }
            </div>
        );
    }
}

export default Home;
