import React, { Component } from 'react'
import UserControls from './UserControls';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <Link to='/'><li><a href="#home">Home</a></li></Link>
                    <li><a href="#bars">Bars</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#profile">Profile</a></li>
                </ul>
                <UserControls currentUser={this.props.currentUser}/>
            </div>
        )
    }
}
