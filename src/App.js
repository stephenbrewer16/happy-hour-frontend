import React, { Component } from 'react'
import './App.css'
import MainContainer from './containers/MainContainer'
import Nav from './containers/Nav'
import { Route, Switch } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'

export default class App extends Component {
  state = {
    reviews: [],
    bars: [],
    currentUser: null
  }

  componentDidMount = () => {
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
  }
  setUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {this.props.history.push("/")})
  }
  render() {
    console.log(this.state.currentUser)
    return (
      <div className="app">
        < Nav currentUser={this.state.currentUser}/>
        <Switch>
        <Route path='/signup' render={(routerProps)=> <SignUpForm setUser={this.setUser}{...routerProps}/>}/>
        <Route path='/login' render={(routerProps)=> <LoginForm setUser={this.setUser}{...routerProps}/>}/>
        <Route path='/' render={(routerProps) => < MainContainer reviews={this.state.reviews} bars={this.state.bars} {...routerProps}/>}/> 
        </Switch>
      </div>
    )
  }
}

