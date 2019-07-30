import React, { Component } from 'react'
import '../App.css'


export default class BarCard extends Component {
    render() {
        return (
            <div className="bar">
                <h4>{this.props.bar.name}</h4>
                <h5>{this.props.bar.location}</h5>
                <p>{this.props.bar.reviews.length} Reviews of This Bar</p>
            </div>
        )
    }
}
