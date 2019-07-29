import React, { Component } from 'react'
import ReviewContainer from './ReviewContainer.js'
import BarContainer from './BarContainer.js'

export default class MainContainer extends Component {

    render() {
        return (
            <div>
                <ReviewContainer reviews={this.props.reviews} bars={this.props.bars}/>
                <BarContainer bars={this.props.bars} reviews={this.props.reviews}/>
            </div>
        )
    }
}
