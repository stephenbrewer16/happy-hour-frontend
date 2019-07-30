import React, { Component } from 'react'
import '../App.css'

export default class BarCard extends Component {
    render() {
        return (
            <div className="bar">
                <h4>{this.props.bar.name}</h4>
                <p>{this.props.bar.location}</p>
                <button onClick={this.props.addFavorite}>Favorite</button>
            </div>
        )
    }
}
