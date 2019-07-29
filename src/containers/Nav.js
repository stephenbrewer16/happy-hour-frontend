import React, { Component } from 'react'
import UserControls from './UserControls';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <Link to='/'><li>Home</li></Link>
                    <li>Bars</li>
                    <li>Reviews</li>
                    <li>Profile</li>
                </ul>
                <UserControls currentUser={this.props.currentUser} logout={this.props.logout}/>
            </div>
        )
    }
}
