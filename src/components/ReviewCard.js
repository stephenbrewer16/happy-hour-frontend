import React, { Component } from 'react'

export default class ReviewCard extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.review.comment}</h2>
            </div>
        )
    }
}
