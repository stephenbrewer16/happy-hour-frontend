import React, { Component } from 'react'
import './App.css'
import MainContainer from './containers/MainContainer'
import Nav from './containers/Nav'
import { Route, Switch } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import NewReview from './components/NewReview'
import NewBarForm from './components/NewBarForm';
import UserPage from './components/UserPage'


export default class App extends Component {
  state = {
    reviews: [],
    bars: [],
    currentUser: null
  }

  componentDidMount = () => {
    const token = localStorage.token
    fetch('http://localhost:3000/reviews')
      .then(resp => resp.json())
      .then(json => this.setState({
        reviews: json
      }))
    fetch('http://localhost:3000/bars')
    .then(resp => resp.json())
    .then(bar => this.setState({
      bars: bar
    }))
    if (token) {
      fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
        .then(res => res.json())
        .then(response => {
          if (response.errors) {
            alert(response.errors)
          } else {
            this.setState({
              currentUser: response
            })
          }
        })
    }
  }
  setUser = (response) => {
    this.setState({
      currentUser: response.user
    }, () => {
      localStorage.token = response.token
      this.props.history.push("/")})
  }

  addReview = (newReview) => {
    this.setState({
      reviews: [newReview, ...this.state.reviews]
    }, ()=> {
      this.props.history.push("/")
    })
  }
  updateReview = (editReview) => {
    this.setState({
      reviews: this.state.reviews.map(review => {
        if(review.id === editReview.id){
          return editReview
        }else{
          return review
        }
      })
    })
  }
  logout = () => {
    this.setState({
      currentUser: null
    }, () => {
      localStorage.removeItem("token")
      this.props.history.push("/login")})
  }
  addBar = (newBar) => {
    this.setState({
      bars: [newBar, ...this.state.bars]
    }, () => {
      this.props.history.push("/")
    })
  }
  sortBarsByReview = () => {
    this.setState({
      bars: this.state.bars.sort((a,b) => a.reviews.length < b.reviews.length ? 1 : -1)
    })
  }
  render() {
    console.log(this.state.currentUser)
    
    return (
      <div className="app">
        < Nav currentUser={this.state.currentUser} logout={this.logout}/>
        <Switch>
          <Route path='/users/:id' render={(routerProps) => <UserPage updateReview={this.updateReview} currentUser={this.state.currentUser} reviews={this.state.reviews}  {...routerProps}/>}/>
          <Route path='/addbar' render={(routerProps)=> <NewBarForm currentUser={this.state.currentUser} bars={this.state.bars} addBar={this.addBar}{...routerProps}/>}/>
          <Route path='/addreview' render={(routerProps)=> <NewReview currentUser={this.state.currentUser} bars={this.state.bars} addReview={this.addReview} {...routerProps}/>}/>
          <Route path='/signup' render={(routerProps)=> <SignUpForm setUser={this.setUser}{...routerProps}/>}/>
          <Route path='/login' render={(routerProps)=> <LoginForm setUser={this.setUser}{...routerProps}/>}/>
          <Route path='/' render={(routerProps) => < MainContainer updateReview={this.updateReview} sortBarsByReview={this.sortBarsByReview} currentUser={this.state.currentUser} reviews={this.state.reviews} bars={this.state.bars} addReview={this.addReview} {...routerProps}/>}/> 
        </Switch>
      </div>
    )
  }
}

