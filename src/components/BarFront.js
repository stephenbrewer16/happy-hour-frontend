import React, { Component } from 'react'

export default class BarCardBack extends Component {
    render() {
        return (
            <div>
                <h5>{this.props.bar.reviews.rating}Average Review</h5>
                <p>{this.props.bar.reviews.length} Reviews</p>
            </div>
        )
    }
}
