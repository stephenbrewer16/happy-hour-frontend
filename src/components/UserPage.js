import React, { Component } from 'react'

export default class UserPage extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.currentUser}</h3>
                <p>{this.props.favorites}</p>
            </div>
        )
    }
}
