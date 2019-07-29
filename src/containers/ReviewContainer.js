import React, { Component } from 'react'
import ReviewCard from '../components/ReviewCard.js'

export default class ReviewContainer extends Component {
    renderReviews() {
        return this.props.reviews.map(review => {
            return <ReviewCard key={1} review={review} />
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
