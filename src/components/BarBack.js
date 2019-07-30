import React, { Component } from 'react'


export default class BarBack extends Component {
    render() {
        console.log(this.props.bar.reviews)
        return (
            <div>
                <p>Rating: {this.props.review.rating}</p>
                <p>Comment: {this.props.review.comment}</p>
            </div>
        )
    }
}
