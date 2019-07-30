import React, { Component } from 'react'
import '../App.css'
import BarFront from './BarFront'
import BarBack from './BarBack'


export default class BarCard extends Component {
    state ={
        front:true
    }

    flipBar = () => {
        this.setState({
            front:!this.state.front
        })
    }
    renderReviews = () => {
        return this.props.bar.reviews.map(review => {
            return <BarBack key={review.id} review={review} bar={this.props.bar}/>
        })
    }
    render() {
        return (
            <div className="bar" onClick={this.flipBar}>
                <h3>{this.props.bar.name}</h3>
                <h4>{this.props.bar.location}</h4>
                {this.state.front ? <BarFront reviews={this.props.reviews} bar={this.props.bar} /> : this.renderReviews()}
            </div>
        )
    }
}

