import React, { Component } from 'react'
import ReviewContainer from './ReviewContainer.js'
import BarContainer from './BarContainer.js'


export default class MainContainer extends Component {

    render() {
        return (
            <div>
                <BarContainer sortBarsByReview={this.props.sortBarsByReview} bars={this.props.bars} reviews={this.props.reviews}/>
                <ReviewContainer removeReview={this.props.removeReview} updateReview={this.props.updateReview} reviews={this.props.reviews} bars={this.props.bars}/>
            </div>
        )
    }
}
