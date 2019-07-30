import React, { Component } from 'react'

export default class ReviewCard extends Component {
    render() {
        return (
            <div className="review">
                <h2>{this.props.review.bar.name}</h2>
                <h3>{this.props.review.rating}/10</h3>
                <h4>{this.props.review.comment}</h4>
                <p>{this.props.review.user.username}</p>
                {this.props.editable ? <button>Edit</button> : ""} 
                {this.props.editable ? <button>Delete</button> : ""} 
            </div>
        )
    }
}
