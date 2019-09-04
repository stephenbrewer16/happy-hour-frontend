import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserControls extends Component {
    render() {
        return (
            <div className='user-controls'>
                <Link to='/signup'><button className='btn'>Sign Up</button></Link>
                <Link to='/login'><button className='btn'>Login</button></Link>
                <button className='btn logout' onClick={this.props.logout}>Logout: {this.props.currentUser ? this.props.currentUser.username: "NOT SIGNED IN"}</button>

            </div>
        )
    }
}
