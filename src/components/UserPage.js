import React, { Component } from 'react'
import ReviewCard from './ReviewCard';

export default class UserPage extends Component {
    renderReviews = () => {
        return this.props.reviews.map(review => {
            if(review.user.username === this.props.currentUser.username){
                return <ReviewCard key={review.id} review={review} editable={true}/>
            }else{
               return null
            }
        })
    }
    render() {
        return (
            <div>
                <h3>{this.props.currentUser.username}</h3>
                {this.renderReviews()}
            </div>
        )
    }
}
