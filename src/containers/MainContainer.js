import React, { Component } from 'react'
import ReviewContainer from './ReviewContainer.js'
import BarContainer from './BarContainer.js'
import { Link } from 'react-router-dom'

export default class MainContainer extends Component {

    render() {
        return (
            <div>
                <Link to='addreview'><button>Write A New Review</button></Link>
                <Link to='addbar'><button>Add a new Bar</button></Link>
                <ReviewContainer reviews={this.props.reviews} bars={this.props.bars}/>
                <BarContainer addFavorite={this.props.addFavorite} bars={this.props.bars} reviews={this.props.reviews}/>
            </div>
        )
    }
}
