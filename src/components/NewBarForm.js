import React, { Component } from 'react'

export default class NewBarForm extends Component {
    state ={
        name:'', 
        location:''
    }

    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/bars', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({ name: this.state.name, location: this.state.location})
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.errors) {
                    alert("You must be logged in to leave a review!")
                } else {
                    this.props.addBar(response)
                }
            })
    }
    render() {
        return (
            <div>
                <form className="new-bar-form" onSubmit={this.handleSubmit}>
                    <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Bar Name"></input>
                    <input name="location" value={this.state.location} onChange={this.handleChange} placeholder="Bar location"></input>
                    <button className="submit-new-bar" type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}
