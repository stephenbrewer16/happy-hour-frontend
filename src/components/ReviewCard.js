import React, { Component } from 'react'

export default class ReviewCard extends Component {
    state={
        edit:false,
        rating:this.props.review.rating,
        comment:this.props.review.comment,
        bar_id: this.props.review.bar_id,
        user_id: this.props.review.user_id

    }
    handleClick =() =>{
        this.setState({
            edit:true
        })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/reviews/${this.props.review.id}`, {
            method: 'PATCH',
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({rating: this.state.rating, comment: this.state.comment})
        })
        .then(resp => resp.json())
        .then(json => {
            console.log(this.props)
            this.props.updateReview(json)
        })
        .then(this.setState({
            edit: false
        }))
    }
    render() {
        return (
            <div className="review">
                {!this.state.edit ? 
                <div>
                    <h2>{this.props.review.bar.name}</h2>
                    <h3>{this.props.review.rating}/10</h3>
                    <h4>{this.props.review.comment}</h4>
                    <p>{this.props.review.user.username}</p>
                    {this.props.editable ? <button onClick={this.handleClick}>Edit</button> : ""} 
                    {this.props.editable ? <button>Delete</button> : ""}
                </div>:
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input name='rating' value={this.state.rating} onChange={this.handleChange}></input>
                        <br></br>
                        <input name='comment' value={this.state.comment} onChange={this.handleChange}></input>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                }
            </div>
        )
    }
}
