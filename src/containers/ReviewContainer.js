import React, { Component } from 'react'
import ReviewCard from '../components/ReviewCard.js'

export default class ReviewContainer extends Component {
    renderReviews() {
        return this.props.reviews.map(review => {
            return <ReviewCard key={review.id} review={review} updateReview={this.props.updateReview} removeReview={this.props.removeReview}/>
        })
    }
    render() {
        return (
            <div>
                {this.renderReviews()}
            </div>
        )
    }
}
