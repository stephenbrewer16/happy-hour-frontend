import React, { Component } from 'react'

export default class BarCardBack extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.bar.reviews.length} Reviews</h4>
            </div>
        )
    }
}
