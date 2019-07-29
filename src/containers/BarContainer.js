import React, { Component } from 'react'
import BarCard from '../components/BarCard.js'

export default class BarContainer extends Component {
    renderBars() {
        return this.props.bars.map(bar => {
            return <BarCard key={1} bar={bar} />
        })
    }
    render() {
        return (
            <div>
                {this.renderBars()}
            </div>
        )
    }
}
