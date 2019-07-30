import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserControls extends Component {
    render() {
        return (
            <div className='user-controls'>
                <Link to='/signup'><button>Sign Up</button></Link>
                <Link to='/login'><button>Login</button></Link>
                <button onClick={this.props.logout}>Current User: {this.props.currentUser ? this.props.currentUser.username: "NOT SIGNED IN"}</button>

            </div>
        )
    }
}
