import React, { Component } from 'react'

export default class NewReview extends Component {
    state = {
        rating: '',
        comment: '',
        bar_id: '',
        user_id: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({ rating: this.state.rating, comment: this.state.comment, bar_id: this.state.bar_id, user_id: this.props.currentUser.id})
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.errors) {
                    alert("You must be logged in to leave a review!")
                } else {
                    this.props.addReview(response)
                }
            })
    }
    renderBars() {
        return this.props.bars.map(bar => {
            return <option value={bar.id} key={bar.id}>{bar.name}</option> 
        })
    }
    render() {
        return (
            <div>
                <form className="new-review-form" onSubmit={this.handleSubmit}>
                    <input name="rating" value={this.state.rating} onChange={this.handleChange} placeholder="rating"></input>
                    <input name="comment" value={this.state.comment} type="comment" onChange={this.handleChange} placeholder="comment"></input>
                    <select name="bar_id"value={this.state.bar_id} onChange={this.handleChange}>Select Bar
                        {this.renderBars()}
                    </select>
                    <button className='add-review' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
