import React, { Component } from 'react'
import BarCard from '../components/BarCard.js'

export default class BarContainer extends Component {
    renderBars() {
        return this.props.bars.map(bar => {
            return <BarCard key={bar.id} bar={bar} reviews={this.props.reviews}/>
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.props.sortBarsByReview}>Sort By Most Reviews</button>
                {this.renderBars()}
            </div>
        )
    }
}
