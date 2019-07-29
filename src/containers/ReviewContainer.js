import React, { Component } from 'react'
import ReviewCard from '../components/ReviewCard.js'

export default class ReviewContainer extends Component {
    renderReviews() {
        return this.props.reviews.map(review => {
            return <ReviewCard key={review.id} review={review} />
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
